//Scrolling animation of link clicks
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


// Get the modal
let modal = document.getElementById('myModal');
let modalImg = document.getElementById("img01");
const imageFeed = document.getElementById("photo-feed");
const temp = imageFeed.querySelectorAll("img");
const pictures = Array.prototype.slice.call(temp);
function popUp(){
    modal.style.display = "block";
    modalImg.src = this.src;
    modalImg.dataset.reg = this.dataset.id;
    let id = this.dataset.id;
    // Get the <span> element that closes the modal
    let span = document.getElementsByClassName("close")[0];
    // When the user clicks on <span> (x), close the modal
    span.onclick = function() { 
        modal.style.display = "none";
    }
}
pictures.forEach((pic)=>pic.addEventListener("click", popUp));

/**Gallery implementation */
let rightArrow = document.querySelector(".fa-arrow-right");
let leftArrow = document.querySelector(".fa-arrow-left");

function onArrowClickD(){
    let modalF = this.parentNode.parentNode;
    let image = modalF.querySelector("img");
    let dataID = image.dataset.reg; 
    let int = parseInt(dataID) + 1;
    if(int === 10)
        int = 1;
    image.src = pictures[int - 1].src;
    image.dataset.reg = int;

}
function onArrowClickL(){
    let modalF = this.parentNode.parentNode;
    let image = modalF.querySelector("img");
    let dataID = image.dataset.reg; 
    let int = parseInt(dataID) - 1;
    if(int === 0)
        int = 9;
    image.src = pictures[int - 1].src;
    image.dataset.reg = int;

}
rightArrow.addEventListener("click", onArrowClickD);
leftArrow.addEventListener("click", onArrowClickL);