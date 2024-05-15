const formEl = document.querySelector("form")
const template = document.querySelector("template")
const ul = document.querySelector("ul")
const data = []

const updateUI = (users) => {
    ul.innerHTML = ''
    users.forEach(user => {
        const clone = template.content.cloneNode(true)
        const elements = {
            image: clone.querySelector("img"),
            name: clone.querySelector("h3"),
            email: clone.querySelector(".email"),
            tel: clone.querySelector(".tel")
        };
        elements.image.src = user.image
        elements.name.textContent = `Name: ${user.name}`
        elements.email.textContent = `Email: ${user.mail}`
        elements.tel.textContent = `Tel: ${user.number}`
        elements.email.setAttribute("href", `mailto:${user.mail}`)
        elements.tel.setAttribute("href", `tel:${user.number}`)
        ul.appendChild(clone)
    });
}

formEl.addEventListener("submit", (e) => {
    e.preventDefault()
    const userInfo = {
        id: Math.random() * new Date().getMilliseconds(),
        name: formEl.name.value,
        image: formEl.image.value,
        number: formEl.phone.value,
        mail: formEl.email.value,
    }
    data.push(userInfo);
    updateUI(data)
    formEl.reset()
})
