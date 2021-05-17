//Voir aussi Correction
//Ex1
let h1 = document.querySelector('h1');
h1.addEventListener('click',()=>{
    h1.className='text-blue'
})

//Ex2
let h3 = document.querySelector('h3');
h3.addEventListener('dblclick',()=>{
    h3.className='text-error'
})

//Ex3
let p = document.querySelector('p');

    p.addEventListener('click',()=>{
    if ( p.className== 'text-style') {
        p.classList.remove("text-style")
    } else {
        p.className= 'text-style'
    }
})


//Ex4
let span =Array.from(document.querySelectorAll('span')) ;
span.splice(3)
console.log(span);
span.forEach(element => {
    element.addEventListener('click',()=>{
        element.className ='bolder'
    })
});

//Ex5
