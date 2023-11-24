// JS document
export default function(){
    const navBar = document.getElementById("navigation");
    const navIcon = document.getElementById("menuIcon");
    
    navIcon.addEventListener("click", function(){
        navBar.classList.toggle('menu__links--show');
    });
    navBar.addEventListener("click", function(){
        navBar.classList.remove('menu__links--show');
    });

    //MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM

    const root = document.documentElement;
    document.addEventListener("DOMContentLoaded", function(){
        const switcherTheme = document.querySelectorAll(".menu__theme-mode");

        switcherTheme[0].addEventListener("click", function(){
            root.setAttribute("data-theme", "dark");
            localStorage.setItem("theme", "dark");
        });

        switcherTheme[1].addEventListener("click", function(){
            root.setAttribute("data-theme", "light");
            localStorage.setItem("theme", "light");
        });
    });

    const storageTheme = localStorage.getItem("theme");
    let  systemColorScheme = null;
    if(window.matchMedia('(prefers-color-scheme: dark)').matches){
        systemColorScheme = "dark";
    }else{
        systemColorScheme = "light";
    }

    let newTheme = null;
    if(storageTheme !== null){
        newTheme = storageTheme;
    }else{
        newTheme = systemColorScheme;
    }
    root.setAttribute("data-theme", newTheme);
}