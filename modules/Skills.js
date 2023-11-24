// JS document
export default function(){
    const list = ["Systems Analyst","Documenter", "Teamwork", "Systemic thinking", "Ideas creator", "Problems identifier", "Assertive Communication", "Intermediate English"];
    const skill_List = document.getElementById("skills_List");
    let fragment = document.createDocumentFragment();
    list.forEach(skill => {
        const item = document.createElement("LI");
        item.setAttribute("class", "skills__item");
        item.textContent = skill;
        item.addEventListener("mouseover", function(){
            item.classList.add('skills__item--pointed');
        });
        item.addEventListener("mouseout", function(){
            item.classList.remove('skills__item--pointed');
        });
        fragment.appendChild(item);
    })
    skill_List.appendChild(fragment);
}