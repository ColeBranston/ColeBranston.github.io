const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)

function formSubmit(){
    const scriptURL = 'https://script.google.com/macros/s/AKfycbxpfGC4YSbpNX4E4wgWYh68qyy7XeGtjivL2mqHyV18kU2JlVTjB8NSxv8JrYOcvcp8/exec'
    const form = document.forms['submit-to-google-sheet']
    const msg = document.getElementById("msg")
    form.addEventListener('submit', e => {
        e.preventDefault()
        fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => {
            msg.innerHTML = "Message Sent Successfully"
            setTimeout(function(){
                msg.innerHTML = ""
            },7000)
            form.reset()
        })
        .catch(error => console.error('Error!', error.message))
    })}

    window.onscroll = function(){
        var top = window.pageYOffset || document.documentElement.scrollTop;
        const homepage = document.getElementById("homepage")
        const aboutLink = document.getElementById("aboutLink")
        const workLink = document.getElementById("workLink")
        const projectsLink = document.getElementById("projectsLink")
        const arrow = document.getElementById("downArrow")
        const workDiv = document.getElementById("Work")
        const projectsDiv = document.getElementById("myProjects")
        const projects = document.getElementById("projectsHeader")
        const personalDesc = document.getElementById("Me")
        const personalImage = document.getElementById("ColeBranston_Image")
        const aboutHeader = document.getElementById("aboutmeHeader")

        if (top > personalDesc.offsetTop - vh*1.08){
            personalImage.style.animation = "fadeLeft 1s ease"
            personalDesc.style.animation = "fadeRight 1s ease"
            console.log("true")
        }

        if (top > aboutHeader.offsetTop - vh*1.08){
            aboutHeader.style.animation = "fadeIn 1.7s ease"
        }
        
        if (top < aboutLink.offsetTop){
            homepage.style.color = "#cfccf1"
            homepage.style.transition = "0.60s ease"
            homepage.style.transform = "translateY(-5px)"
        }else{
            homepage.style.color = "#6759b8"
            homepage.style.transition = "0.60s ease"
            homepage.style.transform = "translateY(0)"
        }

        if (top < workDiv.offsetTop - vh + vh*0.08 && top >= aboutLink.offsetTop){
            aboutLink.style.color = "#cfccf1"
            aboutLink.style.transition = "0.60s ease"
            aboutLink.style.transform = "translateY(-5px)"
        }else{
            aboutLink.style.color = "#6759b8"
            aboutLink.style.transition = "0.60s ease"
            aboutLink.style.transform = "translateY(0)"
        }

        if (top >= workDiv.offsetTop - vh + vh*0.08 && top < projectsDiv.offsetTop - vh + vh*0.08){
            workLink.style.color = "#cfccf1"
            workLink.style.transition = "0.60s ease"
            workLink.style.transform = "translateY(-5px)"
            workDiv.style.animation = "fadeUp 1s ease"
            
        }else{
            workLink.style.color = "#6759b8"
            workLink.style.transition = "0.60s ease"
            workLink.style.transform = "translateY(0)"
        }

        if (top >= projectsDiv.offsetTop - vh*1.08){
            projectsLink.style.color = "#cfccf1"
            projectsLink.style.transition = "0.60s ease"
            projectsLink.style.transform = "translateY(-5px)"
            projectsDiv.style.animation = "fadeUp 1s ease"
            projects.style.animation = "fadeUp 1s ease"
            
        }else{
            projectsLink.style.color = "#6759b8"
            projectsLink.style.transition = "0.60s ease"
            projectsLink.style.transform = "translateY(0)"
        }

        console.log(top, personalDesc.offsetTop)

        arrow.style.transition = "0.4s ease"

        if (top == 0){
            arrow.style.opacity = "1"
        }  else{
            arrow.style.opacity = "0"
        }

    } 

    function Clicked(n){
        const header = document.getElementsByClassName("clickable")
        const sliderText = document.getElementsByClassName("sliderText")
    
            switch(n){
                case 0:
                    header[1].style.color = "#b7aeff"
                    header[1].style.textShadow = "none"

                    header[2].style.color = "#b7aeff"
                    header[2].style.textShadow = "none"

                    header[n].style.color = "white"
                    header[n].style.textShadow = "0 0 0.125em hsl(0 0% 10% / 0.3), 0 0 0.45em currentColor"

                    sliderText[0].style.transform = "translateX(0)"
                    setTimeout(function(){
                        sliderText[0].style.opacity = "1"
                    },550)

                    sliderText[1].style.opacity = "0"
                    sliderText[1].style.transform = "translateX(-200%)"

                    sliderText[2].style.opacity = "0"
                    sliderText[2].style.transform = "translateX(-200%)"

                    // For text disappearing I want it to move off screen to the left meaning transform = translateX(-1000px), then I should make it disappear by turning its opacity to 0 with opacity = "0"
                    // For text appearing I want it to change translation back to its origin with transfrom = translateX(0) and then making its opacity = "1"
                    break

                case 1:
                    header[0].style.color = "#b7aeff"
                    header[0].style.textShadow = "none"

                    header[2].style.color = "#b7aeff"
                    header[2].style.textShadow = "none"

                    header[n].style.color = "white"
                    header[n].style.textShadow = "0 0 0.125em hsl(0 0% 10% / 0.3), 0 0 0.45em currentColor"

                    sliderText[0].style.opacity = "0"
                    sliderText[0].style.transform = "translateX(-200%)"

                    sliderText[1].style.transform = "translateX(0)"
                    setTimeout(function(){
                        sliderText[1].style.opacity = "1"
                    },550)

                    sliderText[2].style.opacity = "0"
                    sliderText[2].style.transform = "translateX(-200%)"
                    break

                case 2:
                    header[1].style.color = "#b7aeff"
                    header[1].style.textShadow = "none"

                    header[0].style.color = "#b7aeff"
                    header[0].style.textShadow = "none"

                    header[n].style.color = "white"
                    header[n].style.textShadow = "0 0 0.125em hsl(0 0% 10% / 0.3), 0 0 0.45em currentColor"

                    sliderText[0].style.opacity = "0"
                    sliderText[0].style.transform = "translateX(-200%)"

                    sliderText[1].style.opacity = "0"
                    sliderText[1].style.transform = "translateX(-200%)"
                    
                    sliderText[2].style.transform = "translateX(0)"
                    setTimeout(function(){
                        sliderText[2].style.opacity = "1"
                    },550)
                    break
            }
        }
