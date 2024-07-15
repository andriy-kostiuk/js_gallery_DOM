"use strict";
const largeImg = document.querySelector("#largeImg");
const thumbs = document.querySelector("#thumbs");
thumbs.addEventListener("click", (evt)=>{
    evt.preventDefault();
    const link = evt.target.closest("a");
    largeImg.src = link;
});

//# sourceMappingURL=index.f75de5e1.js.map
