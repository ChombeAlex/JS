const btn=document.getElementById('btn');

btn.addEventListener('click',onLoad);

function onLoad(e)
{    
    const xhr=new XMLHttpRequest();

    xhr.open('GET');

    
    console.log("wellcome");

    e.preventDefault();

}