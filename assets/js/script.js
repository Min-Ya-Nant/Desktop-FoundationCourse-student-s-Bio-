const img = document.getElementById("mybio");
img.addEventListener("click", changeShape);

const shapeArr =  [
    // Hexagon
   "25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%",
    //    Plo
    "50% 0%, 90% 20%, 100% 60%, 75% 100%, 25% 100%, 0% 60%, 10% 20%",
    // Frame
    "0% 0%, 0% 100%, 25% 100%, 35% 28%, 42% 32%, 59% 92%, 78% 53%, 35% 100%, 100% 100%, 100% 0%"
    // Circle

];


function changeShape() {
    const randomShape = Math.floor(Math.random() 
    *shapeArr.length);
    const newClipPath = shapeArr[randomShape];
    const currentClipPath = getComputedStyle(img).getPropertyValue("--shape");


    // img.style.setProperty("--shape", shapeArr[randomShape]);

    if (currentClipPath !== newClipPath) {
        img.style.setProperty("--shape", newClipPath);
    } else {
        img.style.setProperty("--shape", shapeArr[randomShape + 1]);
        console.log(shapeArr[randomShape + 1]);
    };
};