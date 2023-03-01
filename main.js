let btnadd = document.querySelector(".add")
let input = document.querySelector("input")
let p = document.querySelector("p")
let ul = document.querySelector("ul")
let clear = document.querySelector(".clear")
let lielements = document.getElementsByTagName("li")
btnadd.onclick = function () {
    if (input.value == "") {
        p.innerText = "doldurun"
        return
    }
    let li = document.createElement("li")
    li.innerText = input.value
    ul.append(li)
    li.onclick = function () {
        li.classList.toggle("active")
    }
}
clear.onclick = function () {
    ul.innerHTML = ""
    // for (let index = 0; index < lielements.length; index++) {
    //     // console.log(lielements[index]);
    //     lielements[index].remove
    // }
}
