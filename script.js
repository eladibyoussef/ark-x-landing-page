//make the navbar invisible so the user view the full background video and make it apear when they start scrolling 


window.onload = () => {
    document.getElementById("header-container").classList.add("invisible");
}

window.onscroll = () => {
    let currentScrollTop =  document.documentElement.scrollTop;
    let navbar = document.getElementById("header-container");
    let video = document.getElementById('with-video-back')
    var opacity = 1 - (currentScrollTop / (document.documentElement.scrollHeight - window.innerHeight));
    console.log(opacity);
    console.log(currentScrollTop);


    
    if (currentScrollTop >0  ) {
        navbar.classList.remove("invisible");
        video.style.opacity = opacity/3

    } else {
        navbar.classList.add("invisible");
        video.style.opacity = opacity

    }

}



