const title = document.querySelector("#uniq")
title.textContent = " Flag".toUpperCase().trim()

const body = document.querySelector("body")
body.style = ` background:linear-gradient(red,blue,orange) `;

const span = document.querySelectorAll("span");
span.forEach(element => {
    element.class = "str"
    
});

const HeadNew = document.querySelector(`head[name = "head"]`)
console.log(HeadNew)

const cont = document.querySelectorAll(".str")
console.log(cont)

const dataAtt = document.querySelector(["some"])

const oldMethodTagName = document.getElementsByTagName("body") // Html Collection
const oldMethodName = document.getElementsByName("head") // Node List
const oldMethodTittle = document.getElementById("uniq")
const oldMethodBody = document.getElementsByTagName("body")
console.log(oldMethodBody) //Html Collection
console.log(oldMethodTittle)
console.log(oldMethodName)