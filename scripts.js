
var el = document.getElementById('links');
el.addEventListener('click', clickHandler, false);

var el = document.getElementById('button-contact-me');
el.addEventListener('click', clickHandler, false);

var home = document.getElementById('Home');
var aboutme = document.getElementById('About Me');
var whatisplaytherapy = document.getElementById('What is Play Therapy');
var services = document.getElementById('Services');
var testimonials = document.getElementById('Testimonials');
var contactme = document.getElementById('Contact Me');

function clickHandler(event) {
    console.log(event.srcElement.innerText);

    home.style.display = 'none';
    aboutme.style.display = 'none';
    whatisplaytherapy.style.display = 'none';
    services.style.display = 'none';
    testimonials.style.display = 'none';
    contactme.style.display = 'none';

    if (event.srcElement.innerText === 'Home') {
        home.style.display = 'block';
    }
    if (event.srcElement.innerText === 'About Me') {
        aboutme.style.display = 'block';
    }
    if (event.srcElement.innerText === 'What is Play Therapy?') {
        whatisplaytherapy.style.display = 'block';
    }
    if (event.srcElement.innerText === 'Services') {
        services.style.display = 'block';
    }
    if (event.srcElement.innerText === 'Testimonials') {
        testimonials.style.display = 'block';
    }
    if (event.srcElement.innerText === 'Contact Me') {
        contactme.style.display = 'block';
    }
}

