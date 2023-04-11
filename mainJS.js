const scriptURL = 'https://script.google.com/macros/s/AKfycbwjoE570DDVCaKFPwR7yEJFB2b3x446hsDowrhcla9HVHcA_oZed6l036nT8wscfWap/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")
form.addEventListener('submit', e => {
e.preventDefault()
fetch(scriptURL, { method: 'POST', body: new FormData(form)})
.then(response => {
    msg.innerHTML = "Message sent successfully"
    setTimeout(function(){
        msg.innerHTML = ""
    },5000)
    form.reset()
})
.catch(error => console.error('Error!', error.message))})

