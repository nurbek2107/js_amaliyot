const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const tel = document.getElementById('tel').value;
    const email = document.getElementById('email').value;
    const img = document.getElementById('img').value;

    const newobg = {
        name,
        tel,
        email,
        img
    }
    form.reset(); 
    console.log(newobg);
})