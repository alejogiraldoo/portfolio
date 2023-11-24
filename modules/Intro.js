// JS document
export default function(){
    const myAge = document.getElementById("myAge");
    const date = new Date();

    if(date.getMonth() >= 10){
        myAge.textContent = date.getFullYear() - 2004;
    }else{
        myAge.textContent = (date.getFullYear() - 1) - 2004;
    }
}