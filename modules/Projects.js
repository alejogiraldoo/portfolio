// JS document
// PROJECT IMAGES
const routeImages = "img/projects/";
const projectImages = {
    "Employee-registration": "Employee-registration.png",
    "Movies-searcher": "Movies-searcher.png",
    "Madona-store": "Madona-store.png",
    "Questions-game": "Questions-game.png",
    "Gallery-photos": "Gallery-photos.png"
}

// REQUEST PARAMETERS
const user = "alejogiraldoo";
const url = `https://api.github.com/users/${user}/starred`;

export default async function(){
    const projects = await getProjects(url);
    const projects_List = document.getElementById("projects_list");
    projects.forEach(project =>{
        let projectImage;
        if(projectImages[project.name] !== undefined){
            projectImage = `${routeImages}${projectImages[project.name]}`;
        }else{
            projectImage = `${routeImages}${"project.svg"}`;
        }
        projects_List.innerHTML += `
            <div class="projects__text">
                <h3 class="project__title">${project.name}</h3>
                <figure class="project__picture">
                    <img src="${projectImage}" alt="Image:${project.name} Project" class="project__img"></img>
                </figure>
                <div class="project__languages" id="${project.id}"></div>
                <p class="project__paragraph">${project.description}</p>
                <a href="${project.homepage}" target="_blank" class="project__link">Open project</a>
            </div>
        `;
        getProjectLanguages(project.name, project.id);
    });
}

async function getProjects(url){
     try{
        let response = await fetch(url, {
            method: "GET",
            cache: "default",
            headers: {
                "Content-Type": "application/json"
            }
        });
        if(!response.ok){
            throw new Error("Request Error: ", response.statusText)
        }
        let data = await response.json();
        return data;
    }catch(error){
        console.error(error);
    }
}

// PROJECT LANGUAGES
const routeIcons = "img/icons/";
const projectLanguages = {
    "Employee-registration": ["HTML","CSS","JavaScript"],
    "Movies-searcher": ["HTML","CSS","JavaScript"],
    "Madona-store": ["HTML","CSS","JavaScript"],
    "Questions-game": ["HTML","CSS","JavaScript"],
    "Gallery-photos": ["HTML","CSS"]
}

async function getProjectLanguages(project, container){
    if (projectLanguages[project] !== undefined){
        for(let language of projectLanguages[project]){
            document.getElementById(container).innerHTML += `<img src="${routeIcons}${language}_icon.svg" alt="${language} icon" class="project__language">`;
        }
    }
}

//MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM

// These functions were commented out to avoid using additional external resources, as it can contribute to a decrease in web loading time.
// async function getProjectLanguages(url, project){
//     try{
//         // REQUEST
//         let response = await fetch(url, {
//             method: "GET",
//             cache: "default",
//             headers: {
//                 "Content-Type": "application/json"
//             }
//         });
//         if(!response.ok){
//             throw new Error("Request Error: ", response.statusText)
//         }
//         // REQUEST RESPONSE
//         let data = await response.json();
//         showProjectLanguages(data, project)
//     }catch(error){
//         console.error(error);
//     }
// }

// function showProjectLanguages(languages, project){
//     const container = document.getElementById(project);
//     const routeIcons = "img/icons/";
//     for(let language in languages){
//         container.innerHTML += `<img src="${routeIcons}${language}_icon.svg" class="project__language">`;
//     }
// }