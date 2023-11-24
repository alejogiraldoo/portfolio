// JS document
export default function(){
    const route = "img/icons/";
    const icons = {
        "CSS": "CSS_icon.svg",
        "JavaScript": "JavaScript_icon.svg",
        "Nodejs": "Nodejs_icon.svg",
        "HTML": "HTML_icon.svg",
        "PHP": "PHP_icon.svg",
        "GitHub": "github_icon.svg",
        "Git": "git_icon.svg",
        "Python": "Python_icon.svg",
        "MySql": "MySql_icon.svg",
        "SQL": "SQL_icon.svg"
    }
    const tools_List = document.getElementById("tools_List");
    for (let icon in icons) {
        tools_List.innerHTML += `
            <img src="${route}${icons[icon]}" alt="${icon} icon" class="tools__icon">
        `;
    }
}