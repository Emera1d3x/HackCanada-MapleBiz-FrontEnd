document.addEventListener('DOMContentLoaded', () => {
    const leaves = document.querySelector(".leaves");
    document.addEventListener("mousemove",function(e){
        let rect = e.target.getBoundingClientRect();
        let x = e.clientX - rect.left - rect.width / 2;
        let y = e.clientY - rect.top - rect.height / 2;
        leaves.style.transform = `rotateX(${-y / 50}deg) rotateY(${x / 30}deg)`;
    });
});