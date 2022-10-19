const someDiv = document.querySelector(".block")
someDiv.style.width = "60px"
someDiv.style.height = "70px"
someDiv.style.backgroundColor = "black"

let someDivTo = 60

someDiv.onmousemove = function(){
     someDiv.style.backgroundColor = "red"
     someDiv.style.width = someDivTo  + "px"
     someDivTo += 5
  
}

someDiv.addEventListener("click",function(){
     someDiv.style.backgroundColor = "red"
     someDiv.style.borderRadius = "10px"
     someDiv.style.boxShadow  = "5px 10px"
     someDiv.style.linearGradient = "red, orange, yellow, green, blue"
     someDiv.style.width = someDivTo  +"px"
     someDivTo+=5
     const someDiv2 = document.createElement("div")
     someDiv.append(someDiv2)
     someDiv2.style.width = "60px"
     someDiv2.style.height = "60px"
     someDiv2.style.backgroundColor = "green"
})



