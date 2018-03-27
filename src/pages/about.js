
$(document).ready(function() {
  console.clear();

  // Retrieve Repo & Contributor info from GitHub
  fetch('https://api.github.com/repos/ShowMeCoders/showmecoders/contributors')
  .then(response => response.json())
  .then(data => {
    console.log(data);

    const contributorLeft =
      '<div id="$login$" class="contributor-left"> \
        <span class="contributor-avatar" style="background-image: url(\'$avatar$\')"></span> \
        <span class="contributor-name"> \
          <a href="$profile$" target="_blank">$name$</a> \
        </span> \
      </div>';
    const contributorRight =
      '<div id="$login$" class="contributor-right"> \
        <span class="contributor-name"> \
          <a href="$profile$" target="_blank">$name$</a> \
        </span> \
        <span class="contributor-avatar" style="background-image: url(\'$avatar$\')"></span> \
      </div>';

    const left = true;
    const right = false;
    let elementPosition = left;
    let contributorInfo = '';
    let currentContributor = '';
    let contributors = [];

    data.forEach(element => {
      currentContributor = elementPosition === true ? contributorLeft : contributorRight;
      elementPosition = !elementPosition;
      currentContributor = currentContributor.replace('$profile$', element.html_url);
      currentContributor = currentContributor.replace('$login$', element.login);
      currentContributor = currentContributor.replace('$name$', element.login);
      currentContributor = currentContributor.replace('$avatar$', element.avatar_url);
      contributorInfo += currentContributor;
    });
    $( ".contributors-wrapper" ).html(contributorInfo);
  })
  .catch((error) => {
    console.log(error);
  });

});
