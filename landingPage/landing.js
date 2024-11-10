document.getElementById('btnDownload').addEventListener('click', function() {    //click on download button and scroll to section 
    document.getElementById('section').scrollIntoView({
        behavior: 'smooth'
    });
});


// Get the button element by its id
const btnLogin = document.getElementById('btnLogin');

// Attach a click event listener to the button
btnLogin.addEventListener('click', function() {
    // Replace URL with the link you want to open
    window.open("login.html","_blank");
});


var menuList = document.getElementById("menuList");    //menulist
menuList.style.maxHeight = "0px";

function togglemenu()
{
    if(menuList.style.maxHeight == "0px")
    {
        menuList.style.maxHeight = "280px";
    }

    else
    {
        menuList.style.maxHeight = "0px";
    }


}