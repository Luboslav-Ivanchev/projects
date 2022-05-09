function load() {


    let nameCube=localStorage.getItem('name');
    let imgCube=localStorage.getItem('image');
    let description=localStorage.getItem('description');
    let select=localStorage.getItem('select')

          let main=document.getElementsByTagName('main')[0];

      let div=document.createElement('div');
      div.setAttribute('class','cube');

      let template=`
        <img class="cube" src="${imgCube}" >
            <p class="name">${nameCube}</p>
            <p><span>${select}</p>
            <a class="btn" href="/details" onClick="load(event)">Details</a>`;

      div.innerHTML=template

                    main.appendChild(div);

    let a=document.querySelectorAll('a');
    let arr=Array.from(a);
    let x=arr.slice(3,arr.length);


    x.forEach(aHref=>{
        aHref.addEventListener('click',function (e) {
            let array=Array.from(e.target.parentElement.children);
            let imageCube=array[0];
            let name=array[1].textContent;
            let p=array[2].textContent;
            localStorage.setItem('img',imageCube.src);
            localStorage.setItem('name',name);
            localStorage.setItem('p',p);


        })
    })



    let searchButton=document.getElementById('searched');

      searchButton.addEventListener('click',function (e) {

      e.preventDefault()
          let search=document.getElementsByClassName('search')[0];
          let p=document.querySelectorAll('p');
          let pArray=Array.from(p);
          for(let index in pArray){

              if(index%2===0){

                  if(search.value===pArray[index].textContent){

                      let main=document.getElementsByTagName('main')[0];
                     let divSearch=document.createElement('div');
                     divSearch.setAttribute('id','search')
                      divSearch.appendChild(pArray[index].parentElement)
                      main.innerHTML=divSearch.innerHTML;

                  }
              }
          }



      })


}
