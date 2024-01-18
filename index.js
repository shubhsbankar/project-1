const maxFontSize = document.getElementById("maxFontSize");
const fontSize = document.getElementById("fontSize");
const minFontSize = document.getElementById("minFontSize");
const main = document.querySelector(".main");
const lang = document.querySelector(".lang");
const mrt =  document.getElementById("mrt");
const eng =  document.getElementById("eng");
const next =  document.getElementById("next");
const prev =  document.getElementById("prev");
const slides = document.querySelectorAll(".slide");

slides.forEach((slide,index) => {
    slide.style.left = `${index*100}%`;
})

function setFontStyle(element,bgColor,color)
{
    element.style.backgroundColor = bgColor;
    element.style.color = color;
}
setFontStyle(fontSize,"white","black");
maxFontSize.addEventListener("click",() => {
    main.style.fontSize = '30px';
    setFontStyle(maxFontSize,"white","black");
    setFontStyle(fontSize,"#ce4a4a","white");
    setFontStyle(minFontSize,"#ce4a4a","white");
});

fontSize.addEventListener("click",() => {
    main.style.fontSize = '16px';
    setFontStyle(maxFontSize,"#ce4a4a","white");
    setFontStyle(fontSize,"white","black");
    setFontStyle(minFontSize,"#ce4a4a","white");
});

minFontSize.addEventListener("click",() => {
    main.style.fontSize = '10px';
    setFontStyle(maxFontSize,"#ce4a4a","white");
    setFontStyle(fontSize,"#ce4a4a","white");
    setFontStyle(minFontSize,"white","black");
});
let marathiLang = false;
const setLang = () => {
    marathiLang = !marathiLang;
    lang.textContent = marathiLang? "मराठी":"English";
    if(marathiLang)
    {
        mrt.classList.remove("hide");
        eng.classList.add("hide");
    }
    else{
        mrt.classList.add("hide");
        eng.classList.remove("hide");
    }
};
setLang();
lang.addEventListener("click",setLang);
let counter = 0;
prev.addEventListener("click",() => {
    counter--;
    slideImages();
          
});

next.addEventListener("click",() => {

        counter++;
    slideImages();
          
});

const slideImages = () => {
    slides.forEach((slide) => {
        slide.style.transform = `translateX(${counter * 100}%)`
    })
}