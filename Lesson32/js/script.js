let divL ,divB ,divR ,divT,div2L,div2B,div2R,div2T
const draggabble = document.querySelector("#drag")
const firstCube = document.querySelector("#first")
const secondCube = document.querySelector("#second")
 
draggabble.addEventListener("drag",function(e){ 
     console.log(e)
     let x = e.pageX 
     let y = e.pageY 
    e.target.style.cssText = ` 
    transform:translateX(${x}px) translateY(${y}px ) 
  ` 
})
draggabble.addEventListener("dragend",function(e){ 
    console.log(e)
    let x = e.pageX 
    let y = e.pageY 
   e.target.style.cssText = ` 
   transform:translateX(${x}px) translateY(${y}px ) 
   ` 
})
firstCube.addEventListener("touchmove",function(e){ 
        
    const x = e.touches[0].pageX  
    const y = e.touches[0].pageY 
    divL = e.touches[0].pageX
    divR = e.touches[0].pageX + 100
    divB = e.touches[0].pageY +100 
    divT = e.touches[0].pageY 
    e.target.style.cssText = ` 
    transform:translateX(${x}px) translateY(${y}px ) 
   ` 
   if(div2R > divL && div2B + 100 > divT && div2T < divB -100 && div2L < divR){ 
     console.log("123") 
     firstCube.style.background ="red" 
 } 
    
}) 
secondCube.addEventListener("touchmove",function(e){ 
        
    const x = e.touches[0].pageX  
    const y = e.touches[0].pageY 
    div2L =  e.touches[0].pageX
    div2R = e.touches[0].pageX + 100
    div2B = e.touches[0].pageY + 100 
    div2T = e.touches[0].pageY 
    e.target.style.cssText = ` 
    transform:translateX(${x}px) translateY(${y}px ) 
   ` 
   if(div2R > divL && div2B + 100 > divT && div2T < divB -100 && div2L < divR){ 
    console.log("123") 
    secondCube.style.background ="red" 
   }
    
}) 