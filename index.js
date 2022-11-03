
window.addEventListener("click", (event) => {
    event.stopPropagation();
    const styles = getComputedStyle(event.target);
    const str = `<div> font size : ${styles.fontSize}, width: ${styles.width} </div>`;
    document.getElementById("px").innerHTML = str;
}) ;