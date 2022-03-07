let colorBtn = document.getElementById("color-btn")
let faceBtn = document.getElementById("face-btn")
let hornsBtn = document.getElementById("horns-btn")
let tailBtn = document.getElementById("tail-btn")

// below root element is taken from css file
let docRoot = document.querySelector(":root")

let bodyColors = ["#a8d530",
"#42aaff",
"#f3d55b",
"#ff4f51",
"#904ae8",
"#ffa711"];

let colors = [...bodyColors, "transparent"]

//The fill() method fills specified elements in an array with a value.
//The fill() method overwrites the original array.
let [counter1, counter2, counter3, counter4] = Array(4).fill(0)

let setCounter = (counter, len) =>{
    return counter < len -1 ? counter + 1 : 0
}

faceBtn.addEventListener("click",()=>{
    counter1 = setCounter(counter1,6)
    console.log(counter1)
    //The setAttribute() method sets a new value to an attribute.
    //If the attribute does not exist, it is created first.

    document.getElementById("face").setAttribute("src",`face-${counter1}.png`)
})

colorBtn.addEventListener("click",()=>{
    counter2 = setCounter(counter2,bodyColors.length)
    console.log(counter2)

    //docRoot will access to root{} properties of css file
    docRoot.style.setProperty("--color-monster",bodyColors[counter2])
})

hornsBtn.addEventListener("click",()=>{
    counter3 = setCounter(counter3,colors.length)

    //setProperty will set the variable with given value
    docRoot.style.setProperty("--color-horns",colors[counter3])
})

tailBtn.addEventListener("click",()=>{
    counter4 = setCounter(counter4,colors.length);
    docRoot.style.setProperty("--color-tail",colors[counter4])
})
