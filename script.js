//make the navbar invisible so the user view the full background video and make it apear when they start scrolling 


window.onload = () => {
    document.getElementById("header-container").classList.add("invisible");
}

window.onscroll = () => {
    let currentScrollTop =  document.documentElement.scrollTop;
    let navbar = document.getElementById("header-container");
    let video = document.getElementById('with-video-back')
    let rocketGif = document.getElementById('rocket-gif')
    var opacity = 1 - (currentScrollTop / window.innerHeight);
    // console.log(currentScrollTop);
    if (currentScrollTop >0  ) {
        navbar.classList.remove("invisible");
        video.style.opacity = opacity/4
        rocketGif.style.opacity = 1

    } else {
        navbar.classList.add("invisible");
        video.style.opacity = opacity
        rocketGif.style.opacity = opacity/4}

        let sections = document.querySelectorAll('section');
sections.forEach(function(section) {
    let top = window.scrollY;
    let offset = section.offsetTop -150 ;
    let height = section.offsetHeight;

    console.log('top',top);
    console.log('offset',offset);
    console.log('heigh', height);

    // Check if the current section is within the viewport
    if (top >= offset && top < offset + height) {
        section.classList.add('show-element');
    } else {
        section.classList.remove('show-element');
    }
});


}

const toggleMenu = document.getElementById('menu')
toggleMenu.addEventListener('click' , (event)=>{
    event.preventDefault()
    const list=  document.getElementById('list-menu');

    if(list.style.display = 'none'){
        list.style.display = 'flex'

    }else{
        list.style.display = 'none'
    }
})





