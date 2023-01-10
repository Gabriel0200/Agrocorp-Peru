textSectionEnglish = document.getElementById("textEnglishMain");
textSectionSpanish = document.getElementById("textSpanishMain");
textFooterEnglish = document.getElementById("textEnglishFooter");
textFooterSpanish = document.getElementById("textSpanishFooter")
changeEnglish = document.getElementById("changeLaguajeEnglish");
changeSpanish = document.getElementById("changeLaguajeSpanish");

changeEnglish.addEventListener("click",()=>{
    textSectionEnglish.style.display = "block";
    textFooterEnglish.style.display = "block";
    textSectionSpanish.style.display = "none";
    textFooterSpanish.style.display = "none";
});
changeSpanish.addEventListener("click",()=>{
    textSectionEnglish.style.display="none";
    textFooterEnglish.style.display="none";
    textSectionSpanish.style.display="block";
    textFooterSpanish.style.display="block";
});