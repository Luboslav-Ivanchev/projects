function div() {

       let main=document.querySelector('main');



    let img=localStorage.getItem('img');
   let name= localStorage.getItem('name');
    let p=localStorage.getItem('p');


main.innerHTML=`
<h1>${name}</h1>
    <img class="cube" src="${img}">
    <div class="details">
      <p><span>Description:</span> Magnets in AirSM will not drop, and their positions will be more precise with the
        Magnets-Snap-On design. With the use of 3mm*2mm magnets, the handfeel will be more stable and more
        comfortable. P.S. This design is brand new for the AirSM.</p>
      <p>${p}</p>
      <a class="btn" href="/home">Back</a>
    </div>
`

}