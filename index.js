let bgcontainer=document.createElement("div")
bgcontainer.classList.add("bg-container")
document.body.appendChild(bgcontainer)

let heading=document.createElement("h1")
heading.classList.add("heading")
heading.textContent="Grocery List"
bgcontainer.appendChild(heading) 

let ulelement=document.createElement("ul")
ulelement.classList.add("list-container")
bgcontainer.appendChild(ulelement)

let groceryitem=["milk","bread","chocate","butter"]

function crete(todo){
let liElement=document.createElement("li")
liElement.textContent=todo

ulelement.appendChild(liElement)
}
for(let i of groceryitem){
    crete(i)
}
let inputElement=document.createElement("input")
inputElement.type="checkbox"
inputElement.id="mycheckbox"
bgcontainer.appendChild(inputElement)

let labelElement=document.createElement("label")
labelElement.setAttribute("for","mycheckbox")
labelElement.textContent="Neet To Preceed"
labelElement.classList.add("label-item")

bgcontainer.appendChild(labelElement)

let breakElement=document.createElement("br")
labelElement.appendChild(breakElement)


let buttonElement=document.createElement("button")
buttonElement.textContent="Proceed to pay"
buttonElement.classList.add("button")
bgcontainer.appendChild(buttonElement)









