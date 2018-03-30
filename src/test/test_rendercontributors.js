
function testRender() {
  const contributorElement =
  '<div id="$login$" class="contributor-left"> \
    <span class="contributor-avatar" style="background-image: url(\'$avatar$\')"></span> \
    <span class="contributor-name"> \
      <a href="$profile$" target="_blank">$name$</a> \
    </span> \
  </div>';

  console.log('Contributors HTML: ', renderContributors(contributorElement));
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
 * - $login$ - The contributors GitHub login name
 * - $username$ - The contributors full name from their GitHub profile
 * - $location$ - The contributors residence location from their GitHub profile
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
  let contributorsHtml = [];

  fetch('https://api.github.com/repos/ShowMeCoders/showmecoders/contributors')
  .then(response => response.json())
  .then(repoContributors => {
    console.log('No. contributors: ', repoContributors.length);
    repoContributors.forEach(contributor => {
      console.log('element: ', element);
      fetch('https://api.github.com/users/ZumDeWald')
      .then(response => response.json())
      .then(user => {
        let currentContributor = contributorHtml;
        currentContributor = contributorHtml.replace('$avatar$', user.avatar_url);
        currentContributor = contributorHtml.replace('$bio$', user.bio);
        currentContributor = contributorHtml.replace('$location$', user.location);
        currentContributor = contributorHtml.replace('$login$', user.login);
        currentContributor = contributorHtml.replace('$username$', user.name);
        contributorsHtml.push(currentContributor);
      })
      .catch((error) => {
        console.log(error);
      });
    });
    return contributorsHtml;
  })
  .catch((error) => {
    console.log(error);
  });
}