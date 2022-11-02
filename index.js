
window.addEventListener("click", (zoom) => {
    zoom.stopPropagation();
    const styles = getComputedStyle(zoom.target);
    const str = `<div> font size : ${styles.fontSize}, width: ${styles.width} </div>`;
    document.getElementById("px").innerHTML = str;
}) ;