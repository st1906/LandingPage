window.addEventListener("load", ()=>{
    let lat;
    let long;
    let tempertureContent = document.getElementById("temperture");
    let timezone = document.getElementById("timezone");

    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition((i)=>{
            lat = i.coords.latitude;
            long = i.coords.longitude;
            // console.log(lat);
            // console.log(long);
            const proxy = `https://cors-anywhere.herokuapp.com/`;
            const api = `${proxy}https://api.darksky.net/forecast/f594c0d4e13316b21367beeba3bacab8/${lat},${long}`;
            fetch(api)
            .then(response=>response.json())
            .then(data=>{
                tempertureContent.textContent = Math.round(data.currently.temperature - 32 * (5/9)) + "C";
                timezone.textContent = data.timezone;
            });
    })}
    else
        alert("Turn on location for weather to work");
 
});

//Language
let cro = document.getElementById("language");
cro.addEventListener("click", ()=>{
    let home = document.getElementById("home");
    let description = document.getElementById("description");
    let contact = document.getElementById("contact");
    let about = document.getElementById("about");
    let text = document.querySelector("h1");

    fetch("strings.json")
        .then(r=>r.json())
        .then(i=>{
            home.textContent = i.Home;
            description.textContent = i.Description;
            contact.textContent = i.Contact;
            about.textContent = i.About;
            text.textContent = i.Text;
        });
})