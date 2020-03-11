console.log('%c HI', 'color: firebrick')

// function showImages(json) {

// }

fetch('https://dog.ceo/api/breeds/image/random/4') 
.then(res => res.json())
// .then(json => console.log(json.message[0]))
.then(res => res.message)
.then(function(message) {
    for(const index in message){
        addPicture(message[index]);
    }
})
// .then(json => addh1())

function addPicture(source){
    let picture = document.createElement("img")
    picture.src = source
    picture.style.height = "200px"
    picture.style.width = "200px"
    let imgContainer = document.querySelector('div#dog-image-container')
    imgContainer.append(picture)
}

function addBreed(source){
    let li = document.createElement("li")
    li.innerText = source
    
    li.addEventListener("mouseover", function() {
    li.style.color = "green"
})
    li.addEventListener("mouseout", function() {
    li.style.color = "black"
})
    li.addEventListener("click", function() {
    li.style.fontSize = "28px"
})
    document.querySelector("ul#dog-breeds").append(li)
}

function createBreedList(){fetch('https://dog.ceo/api/breeds/list/all')
    .then(res => res.json())
    .then(res => res.message)
    // .then(message => addBreed("Lab"))
    .then(function(message){
        for(const index in message){
               addBreed(index)
        }
    })
}

createBreedList()

let filter = document.querySelector("select#breed-dropdown")

filter.addEventListener("change", function() {
    let liReset = document.querySelectorAll("li")
    // debugger
    for(let i = 0; i < liReset.length; i++){
    liReset[i].remove()
    }
    
    fetch('https://dog.ceo/api/breeds/list/all')
        .then(res => res.json())
        .then(res => res.message)
        // .then(message => addBreed("Lab"))
    
        .then(function(message){
            let dropdown = document.querySelector("select#breed-dropdown")
            // debugger
            for(const index in message){
            if(index[0] === dropdown.value){
                addBreed(index)
            }
            }
        })   
})





