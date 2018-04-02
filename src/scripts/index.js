
/* Calling function to Dynamically Generate DEVs from GH */

$(document).ready(function() {

  var contributorHtml =
    '<div class="devBox"> \
       <div class="devNameBox"> \
          <h3 class="devName">$username$</h3> \
       </div> \
     <a class="devLinks" href="$profile$" target="_blank"> \
      <img src="$avatar$" alt="$username$" class="devPic"> \
        <ul class="devInfo"> \
          <li><span class="devInfoListItems">GitHub:</span> $login$</li> \
          <li><span class="devInfoListItems">Loc:</span> $location$</li> \
          <li><span class="devInfoListItems">Bio:</span> $bio$</li> \
      </a> \
    </div> ';

  renderContributors(contributorHtml)
  .then((resultHtml) => {
    $("div.devRows").replaceWith(resultHtml);
  })
  .catch(error => {
    console.log(error);
  });

})
