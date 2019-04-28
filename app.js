document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

//Scale images up on click an place them center
// Get the modal
let modal = document.getElementById('myModal');
let modalImg = document.getElementById("img01");
const imageFeed = document.getElementById("photo-feed");
const temp = imageFeed.querySelectorAll("img");
const pictures = Array.prototype.slice.call(temp);
function scaleUp(){
    modal.style.display = "block";
    modalImg.src = this.src;
    // Get the <span> element that closes the modal
    let span = document.getElementsByClassName("close")[0];
    // When the user clicks on <span> (x), close the modal
    span.onclick = function() { 
        modal.style.display = "none";
    }
}
pictures.forEach((pic)=>pic.addEventListener("click", scaleUp));