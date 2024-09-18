let nextBtn=document.querySelector('.next-btn');
let prevBtn=document.querySelector('.prev-btn');

nextBtn.addEventListener('click',()=>{
    let items=document.querySelectorAll('.item');
    console.log(items)
    document.querySelector('.wrapper').append(items[0]);
})

prevBtn.addEventListener('click',()=>{
    let items=document.querySelectorAll('.item');
    document.querySelector('.wrapper').prepend(items[items.length-1]);
})


//Feature yet To be Added to Toggle Text

// let hideBtn=document.querySelector('.hide-btn');
// let showBtn=document.querySelector('.show-btn')

// hideBtn.addEventListener('click',()=>{
//     let item=document.querySelector('.wrapper');
//     item.lastElementChild.style.display="none";
//     hideBtn.style.zIndex=-1;
//     showBtn.style.zIndex=1;
// })

// showBtn.addEventListener('click',()=>{
//     let item=document.querySelector('.wrapper');
//     wrapper.lastSiblingElement.style.display="inline-block";
//     hideBtn.style.zIndex=1;
//     showBtn.style.zIndex=-1;
// })
