function addCube(event) {

    let inputs=document.querySelectorAll('input');
    let i=Array.from(inputs);
    let name=i[0].value;
    let image=i[1].value;
    let description=document.querySelector('textarea#name');

    let select=document.getElementById('difficulty');

    let s='';

    if(select.value===1){
        s+='1-Very Easy';


    }else if(select.value===2){
        s+='2-Easy';


    }else if(select.value===3){
        s+='3-Medium(Standard-3)';


    }else if(select.value===4){
         s+='4-Intermediate';


    }else if(select.value===5){
        s+='5-Expert'

    }else if(select.value===6){
         s+='6-HardCore';


    }


    localStorage.setItem('name',name);
    localStorage.setItem('image',image);
    localStorage.setItem('description',description.value);
    localStorage.setItem('select',s);


}

