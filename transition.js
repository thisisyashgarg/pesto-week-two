
const box = document.getElementById("app");
console.log('server is running');

document.addEventListener('click', (event) => {
    const { clientX, clientY } = event;
    box.style.transform = `translate(${clientX -50}px, ${clientY - 50}px)`;
});

console.log(clientX);