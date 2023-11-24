// JS document
export default function(){
    const route = "img/icons/";
    const contacts = {
        "linkedin": {
            "icon": "linkedin_icon.svg",
            "link": "https://linkedin.com/in/alejandro-giraldo-ocampo-30a825233"
        },
        "github": {
            "icon": "github_icon.svg",
            "link": "https://github.com/alejogiraldoo"
        },
        "email": {
            "icon": "email_icon.svg",
            "link": "mailto:alejandrogiraldo1404@gmail.com"
        }
    };
    const contact_links = document.getElementById("contact_links");
    for (let contact in contacts) {
        contact_links.innerHTML += `
            <a href="${contacts[contact]["link"]}" target="_blank" class="contact__link">
                <img src="${route}${contacts[contact]["icon"]}" alt="${contact} icon" class="contact__icon">
            </a>
        `;
    }
}