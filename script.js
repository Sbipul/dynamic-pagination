const tabs = document.querySelectorAll('.same')
const nxt = document.querySelector('.nxt')
const prev = document.querySelector('.prev')
let index = 0;

const nextBtn = () =>{
    index = index+1            
    prev.style.display = 'block'
    if (index < tabs.length) {
        blockOnly(index)
        if(index === tabs.length-1){
            nxt.style.display = 'none'
        }
    }
     else{
        return
    }
}
const prevBtn = () =>{
    index = index-1            
    nxt.style.display = 'block'
    if (index >= 0) {
        blockOnly(index)
        if(index <= 0){
            prev.style.display = 'none'
        }
    } else {
        return
    }
}

const blockOnly = (num = 0) => {
    tabs.forEach(element => {
    element.style.display = 'none'
}); 
    tabs[num].style.display = 'block'
}
