const catalog = document.getElementsById('.dropdown')
const list = document.querySelector('.vert-nav')

list.style.display = "none";

catalog.addEventListener("click", (e) => {
    if(list.style.display == "none") {
        list.style.display = "block"
    }
    else{
        list.style.display == "none"
    }
} )