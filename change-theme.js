console.log("Hey its working")

let theme = localStorage.getItem("theme")

if (theme == null){
    setTheme("blue")
} else {
    setTheme(theme)
}

let themeDots = document.getElementsByClassName("theme-dot")

for (var i = 0; themeDots.length > i; i++){
    themeDots[i].addEventListener("click", function(){
        let mode = this.dataset.mode
        console.log("Option clicked:", mode)
        setTheme(mode)
    })
}

function setTheme(mode){
    if (mode == "blue"){
        document.getElementById("theme-style").href = "style.css"
    }

    if (mode == "pink"){
        document.getElementById("theme-style").href = "pink.css"
    }

    if (mode == "red"){
        document.getElementById("theme-style").href = "red.css"
    }
    if (mode == "green"){
        document.getElementById("theme-style").href = "green.css"
    }
    localStorage.setItem("theme", mode)
}