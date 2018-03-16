function headerMenu() {
    document.getElementById("menuOptions").classList.toggle("show");
}

window.onclick=function(event) {
    if (!event.target.matches('.menuButton')) {
        var dropdowns = document.getElementsByClassName("menuContent");
        var i;
        for (i=0; i<dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains ('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

$(window).resize(function() {
    if ($(this).width() < 800) {
      $('.props').hide();
    } else {
      $('.props').show();
    }
});
