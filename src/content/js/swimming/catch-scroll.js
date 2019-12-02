document.addEventListener('wheel', (evt)=>{
    
    console.log(document.querySelector('.scrollmation-container').scrollTop)
    document.querySelector('.scrollmation-container').scrollTop = window.scrollY
})