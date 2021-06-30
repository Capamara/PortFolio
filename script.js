
function darkMode(){
//header-sections//
   document.querySelector(".section").style.backgroundImage="url(./img/image4.jpg)"
   var backColor=document.querySelectorAll(".sectionSlides");
   for(i=0;i<backColor.length;i++){
      backColor[i].style.borderBottom="1px solid gold"
      backColor[i].style.backgroundColor="black";
   }
   var titleSections=document.querySelectorAll(".title h1");
   for(b=0;b<titleSections.length;b++){
      titleSections[b].style.color="white";
   }
   //footer//
   document.querySelector('.footer').style.backgroundColor="black";
   document.querySelector(".footer span").style.color="white";
   var iconFooter=document.querySelectorAll(".footer i");
   iconFooter.forEach(iconFooterX=>{
      iconFooterX.style.color="white";
   })
   //COMPETENCIAS//
   //Liguagens
   document.querySelector(".linguagens h1").style.color="white";
   var linguagensTipos=document.querySelectorAll(".card-icon span");
    linguagensTipos.forEach(linguagensComp => {
       linguagensComp.style.color="white";
   })
   
   var bordaBarra=document.querySelectorAll(".progress-bar");
    bordaBarra.forEach(bordaBarraX => {
       bordaBarraX.style.border="0.5px groove gold";
   })
   var conteudoBarra=document.querySelectorAll(".inside-bar");
    conteudoBarra.forEach(conteudoBarraX =>{
       conteudoBarraX.style.backgroundColor="gold";
   })
   //Soft Skills
   document.querySelector(".soft-skills").style.borderLeft="1px solid white"
   document.querySelector(".soft-skills h1").style.color="white";
   var icones=document.querySelectorAll(".icon-soft i");
   icones.forEach(iconesX =>{
      iconesX.style.color="white"
   })
   var tituloSoft=document.querySelectorAll(".title-soft h2");
      tituloSoft.forEach(tituloSoftX=>{
        tituloSoftX.style.color="white";
   })
   var bordas=document.querySelectorAll(".text-soft");
      bordas.forEach(bordasX =>{
      bordasX.style.borderLeft="2px solid gold"
      bordasX.style.borderRight="2px solid gold";
   })
   var textoSoftSkills=document.querySelectorAll(".text-soft p");
      textoSoftSkills.forEach(textoSoftSkillsX =>{
         textoSoftSkillsX.style.color="white"
   })


   //Projetos//
   document.querySelector(".title-banner").style.borderBottom="1px solid gold"
   document.querySelector("#titleBanner").style.color="white"
   document.querySelector("#imageBanner").style.border="1px solid gold"
   document.querySelector(".text-banner").style.borderTop="1px solid gold"
   document.querySelector("#textBanner").style.color="white" 
   var borderImageChoose=document.querySelectorAll(".flex-project img");
      for(a=0;a<borderImageChoose.length;a++){
         borderImageChoose[a].style.border="0.5px groove gold"
   }

   ///Certificados///
   document.querySelector(".flex-control-cert").style.border="3px groove gold"
   var bordaCard=document.querySelectorAll(".card");
   bordaCard.forEach(bordaCardX=>{
      bordaCardX.style.border="3px groove gold"
   })
   var conteudoCard=document.querySelectorAll(".card-text");
   conteudoCard.forEach(conteudoCardX => {
      conteudoCardX.style.borderTop="1px solid gold";
      conteudoCardX.style.backgroundColor="green"
      conteudoCardX.style.color="white"
   })
   var CorIconesCert=document.querySelectorAll(".card i");
   CorIconesCert.forEach(CorIconesCertX=>{
      CorIconesCertX.style.color="white"
   })
   var palavraIconesCert=document.querySelectorAll(".card-icon-cert span");
   palavraIconesCert.forEach(palavraIconesCertX=>{
      palavraIconesCertX.style.color="white";
   })
   var cardFrameProj=document.querySelector(".card-selected");
   cardFrameProj.style.border="2px groove gold"

   var bordaBottomCardFrameProj=document.querySelector(".list-course");
   bordaBottomCardFrameProj.style.borderTop="2px groove gold";

   var tituloFrameProj=document.querySelector("#tituloCourse");
   tituloFrameProj.style.color="white"

   var listaFrame=document.querySelectorAll(".list-course li");
   listaFrame.forEach(listaFrameX => {
      listaFrameX.style.color="white";
   })
}

//////////////////////////////////////////////

function lightMode(){
   //header-sections//
   document.querySelector(".section").style.backgroundImage="url(./img/image.jpg)"
   var backColor=document.querySelectorAll(".sectionSlides");
   for(i=0;i<backColor.length;i++){
      backColor[i].style.borderBottom=null
      backColor[i].style.backgroundColor=null;
   }
   var titleSections=document.querySelectorAll(".title h1");
   for(b=0;b<titleSections.length;b++){
      titleSections[b].style.color=null;
   }  
   //footer//
   document.querySelector('.footer').style.backgroundColor="black";
   document.querySelector(".footer span").style.color="white";
   var iconFooter=document.querySelectorAll(".footer i");
   iconFooter.forEach(iconFooterX=>{
      iconFooterX.style.color="white";
   })
   //COMPETENCIAS//
   //Liguagens
   document.querySelector(".linguagens h1").style.color=null;
   var linguagensTipos=document.querySelectorAll(".card-icon span");
    linguagensTipos.forEach(linguagensComp => {
       linguagensComp.style.color=null;
   })
   var bordaBarra=document.querySelectorAll(".progress-bar");
    bordaBarra.forEach(bordaBarraX => {
       bordaBarraX.style.border=null;
   })
   var conteudoBarra=document.querySelectorAll(".inside-bar");
    conteudoBarra.forEach(conteudoBarraX =>{
       conteudoBarraX.style.backgroundColor=null;
   })
   //Soft Skills
   document.querySelector(".soft-skills").style.borderLeft=null
   document.querySelector(".soft-skills h1").style.color=null;
   var icones=document.querySelectorAll(".icon-soft i");
   icones.forEach(iconesX =>{
      iconesX.style.color=null;
   })
   var tituloSoft=document.querySelectorAll(".title-soft h2");
      tituloSoft.forEach(tituloSoftX=>{
        tituloSoftX.style.color=null;
   })
   var bordas=document.querySelectorAll(".text-soft");
      bordas.forEach(bordasX =>{
      bordasX.style.borderLeft=null
      bordasX.style.borderRight=null;
   })
   var textoSoftSkills=document.querySelectorAll(".text-soft p");
      textoSoftSkills.forEach(textoSoftSkillsX =>{
         textoSoftSkillsX.style.color=null
   })


   //Projetos//
   document.querySelector(".title-banner").style.borderBottom=null
   document.querySelector("#titleBanner").style.color=null
   document.querySelector("#imageBanner").style.border=null
   document.querySelector(".text-banner").style.borderTop=null
   document.querySelector("#textBanner").style.color=null
   var borderImageChoose=document.querySelectorAll(".flex-project img");
   for(a=0;a<borderImageChoose.length;a++){
      borderImageChoose[a].style.border=null
   }
    ///Certificados///
    document.querySelector(".flex-control-cert").style.border=null
    var bordaCard=document.querySelectorAll(".card");
    bordaCard.forEach(bordaCardX=>{
       bordaCardX.style.border=null
    })
    var conteudoCard=document.querySelectorAll(".card-text");
    conteudoCard.forEach(conteudoCardX => {
       conteudoCardX.style.borderTop=null
       conteudoCardX.style.backgroundColor=null
       conteudoCardX.style.color=null
    })
    var CorIconesCert=document.querySelectorAll(".card i");
    CorIconesCert.forEach(CorIconesCertX=>{
       CorIconesCertX.style.color=null
    })
    var palavraIconesCert=document.querySelectorAll(".card-icon-cert span");
    palavraIconesCert.forEach(palavraIconesCertX=>{
       palavraIconesCertX.style.color=null
    })
    var cardFrameProj=document.querySelector(".card-selected");
    cardFrameProj.style.border=null
 
    var bordaBottomCardFrameProj=document.querySelector(".list-course");
    bordaBottomCardFrameProj.style.borderTop=null
 
    var tituloFrameProj=document.querySelector("#tituloCourse");
    tituloFrameProj.style.color=null
 
    var listaFrame=document.querySelectorAll(".list-course li");
    listaFrame.forEach(listaFrameX => {
       listaFrameX.style.color=null;
    })

}


//Functions for select projects changes//
function myFunction(){
   document.querySelector("#titleBanner").textContent="Rainbow Six Extraction Fan Wiki"
   document.querySelector("#imageBanner").src="./img/R6-EXTRACTION.jpg"
   document.querySelector("#textBanner").textContent="1"
}

function myFunction1(){
   document.querySelector("#titleBanner").textContent="Projeto2"
   document.querySelector("#imageBanner").src="https://pbs.twimg.com/media/EJ16B8pX0A4ye2g.jpg"
   document.querySelector("#textBanner").textContent="2";
}

function myFunction2(){
   document.querySelector("#titleBanner").textContent="Projeto3"
   document.querySelector("#imageBanner").src="https://pbs.twimg.com/media/EJ16B8pX0A4ye2g.jpg"
   document.querySelector("#textBanner").textContent="3."
}

function myFunction3(){
   document.querySelector("#titleBanner").textContent="Projeto4"
   document.querySelector("#imageBanner").src="https://pbs.twimg.com/media/EJ16B8pX0A4ye2g.jpg"
   document.querySelector("#textBanner").textContent="4."
}

function cardFunctionGrad(){
   var lista=document.querySelectorAll(".list-course li");
   lista.forEach(listaX=> {
      listaX.style.display="block";
   })
   document.querySelector("#tituloCourse").textContent="Graduacao";
   document.querySelector("#liCert").textContent="FIAP-Analise e Desenvolvimento de Sistemas-Em andamento";
   
}
function cardFunctionHardCode(){
   var lista=document.querySelectorAll(".list-course li");
   lista.forEach(listaX=> {
      listaX.style.display="block";
   })
   document.querySelector("#tituloCourse").textContent="Hard Code";
   document.querySelector("#liCert").textContent="";
}
function cardFunctionWeb(){
   var lista=document.querySelectorAll(".list-course li");
   lista.forEach(listaX=> {
      listaX.style.display="block";
   })
   document.querySelector("#tituloCourse").textContent="Web Development";
   document.querySelector("#liCert").textContent="";
}
function cardFunctionOutros(){
   var lista=document.querySelectorAll(".list-course li");
   lista.forEach(listaX=> {
      listaX.style.display="block";
   })
   document.querySelector("#tituloCourse").textContent="Outros";
   document.querySelector("#liCert").textContent="";
}
