
function testRender() {
  const contributorElement =
  '<div id="$login$" class="contributor-left"> \
    <span class="contributor-avatar" style="background-image: url(\'$avatar$\')"></span> \
    <span class="contributor-name"> \
      <a href="$profile$" target="_blank">$username$</a> \
    </span> \
  </div>';

  console.clear();
  renderContributors(contributorElement)
  .then((html) => {
    console.log('Contributors HTML: ', html);
  })
  .catch(error => {
    console.log(error);
  });
}

/**
 * @description Generate the HTML required to display information for all
 * contributors to the ShowMeCoders GitHub repo.
 * @param {String} contributorHtml A string containing the HTML tags used to
 * format the information for a contributor. Placeholders are used to define
 * where information from GitHub is to be placed and may be reference zero or
 * more times in the string.
 * - $avatar$ - The URL of the users GitHub avatar
 * - $bio$ - The bio from the contributors GitHub Profile
 * - $location$ - The contributors residence location from their GitHub profile
 * - $login$ - The contributors GitHub login name
 * - $profile$ - The contributors Github profile URL
 * - $username$ - The contributors full name from their GitHub profile
 * @example <caption>Call this function using the following</caption>
 *   renderContributors(contributorHtml)
 *   .then((resultHtml) => {
 *     <-- use the data in resultHtml -->
 *   })
 *   .catch(error => {
 *     console.log(error);
 *   });
 * @returns {String[]} An array of strings. Each entry in the array contains
 * the model from `contributorHtml`, but with the placeholders replaced by the
 * values retrieved from GitHub for each contributor to the repo.
 */
function renderContributors(contributorHtml) {
  // Validate the input parameter
  if (contributorHtml === null || contributorHtml === undefined ||
    typeof contributorHtml !== 'string') {
      throw new Error(`Invalid contributorHtml parameter: ${contributorHtml}`);
    }

  // Retrieve Repo & Contributor info from GitHub
  let resultHtml = [];

  return fetch('https://api.github.com/repos/ShowMeCoders/showmecoders/contributors')
  .then(response => response.json())
  .then(repoContributors => {
    let userPromises = repoContributors.map((user) => {
      return fetch(`https://api.github.com/users/${user.login}`)
      .then(response => response.json())
      .then(user => {
        let currentContributor = contributorHtml
        .replace('$avatar$', user.avatar_url)
        .replace('$bio$', user.bio)
        .replace('$location$', user.location)
        .replace('$login$', user.login)
        .replace('$profile$', user.html_url)
        .replace('$username$', user.name);
        resultHtml.push(currentContributor);
      });
    });
    return Promise.all(userPromises)
    .then(() => resultHtml);
  });
}