const button = {
    menus: document.getElementById('menu-Overlay'),
    close: document.getElementById("close-menu-button"),
};





// svg loader
function svgL() {
    const svgList = document.querySelectorAll("span");

    for (let i = 0; i < svgList.length; i++) {
        if (svgList[i].className == "SvgC") {
            let svgSel = svgList[i];
            fetch(`./assets/img/${svgSel.id}.svg`)
                .then(res => res.text())
                .then(text => {
                    svgSel.innerHTML = text;
                });
        }
    }
};
svgL();


//pruebita uwu
function test() {
    clock.play();
    alert("¡Haz hecho clic en el botón!");
};

// darkmode  
let themecolor = "light";
function darkmode() {
    const themeLink = document.getElementById('theme-link');
    switch (themecolor) {
        case "light":
            themecolor = "dark";
            themeLink.href = './assets/styles/dark.css';
            break;
        default:
            themecolor = "light";
            themeLink.href = './assets/styles/light.css';
            break;
    }
};

//sounds
let clock = new Audio('./assets/sounds/clock.mp3');
function mobileMenu(menu) {
    menuOverlay()
    menuimport(menu)

} 
// Overlay menu 
let MenuStatus = "close";
function menuOverlay() {
    if (MenuStatus == "close") {
        button.menus.style.display = 'flex';
        MenuStatus = "open";
    } else {
        button.menus.style.display = 'none';
        MenuStatus = "close";
    }
}
function closeMenu() {
    button.menus.style.display = 'none';
    MenuStatus = "close";
}

function menuimport(menu) {
    
    fetch(`./menus/${menu}.html`)
        .then(res => res.text())
        .then(text => {
            const menuContainer = document.getElementById("menu-container");
            menuContainer.innerHTML = text;
        })

    menuOverlay();
}


//if (loginTrue) {
 //   button.menus.style.display = 'none';
//} else if (!loginTrue) {
 //   button.menus.style.display = 'flex';
//}
//function loginArea() {
  //  if (MenuStatus == "close") {
    //    button.menus.style.display = 'flex';
     //   MenuStatus = "open";
    //} else {
      //  button.menus.style.display = 'none';
       // MenuStatus = "close";
    //}
//}

