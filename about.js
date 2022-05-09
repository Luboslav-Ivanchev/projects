function about(event) {

    event.preventDefault();
    console.log(event.target);

    let divAbout=document.getElementsByClassName('about')[0];
    console.log(divAbout.children);


}