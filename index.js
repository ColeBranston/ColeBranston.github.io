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
        var arrow = document.getElementById("downArrow")
        
        if (top < 250){
            homepage.style.color = "#cfccf1"
            homepage.style.transition = "0.60s ease"
            homepage.style.transform = "translateY(-5px)"
        }else{
            homepage.style.color = "#6759b8"
            homepage.style.transition = "0.60s ease"
            homepage.style.transform = "translateY(0)"
        }

        if (top < 1112 && top > 531){
            aboutLink.style.color = "#cfccf1"
            aboutLink.style.transition = "0.60s ease"
            aboutLink.style.transform = "translateY(-5px)"
        }else{
            aboutLink.style.color = "#6759b8"
            aboutLink.style.transition = "0.60s ease"
            aboutLink.style.transform = "translateY(0)"
        }

        if (top < 2666 && top > 1800){
            workLink.style.color = "#cfccf1"
            workLink.style.transition = "0.60s ease"
            workLink.style.transform = "translateY(-5px)"
            
        }else{
            workLink.style.color = "#6759b8"
            workLink.style.transition = "0.60s ease"
            workLink.style.transform = "translateY(0)"
        }

        if (top > 3000){
            projectsLink.style.color = "#cfccf1"
            projectsLink.style.transition = "0.60s ease"
            projectsLink.style.transform = "translateY(-5px)"
        }else{
            projectsLink.style.color = "#6759b8"
            projectsLink.style.transition = "0.60s ease"
            projectsLink.style.transform = "translateY(0)"
        }

        // console.log(top)

        arrow.style.transition = "0.4s ease"

        if (top == 0){
            arrow.style.opacity = "1"
        }  else{
            arrow.style.opacity = "0"
        }
    }