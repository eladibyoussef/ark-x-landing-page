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
    console.log(currentScrollTop);
    if (currentScrollTop >0  ) {
        navbar.classList.remove("invisible");
        video.style.opacity = opacity/4
        rocketGif.style.opacity = 1

    } else {
        navbar.classList.add("invisible");
        video.style.opacity = opacity
        rocketGif.style.opacity = opacity/4



    }

}




