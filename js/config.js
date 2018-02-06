var values = {
      "caminhoImgs":"img/",
      "logo":"logo.png",
      "backgroundCapa":"backgroud.jpg",
      "works":["banner01.jpg","banner02.jpg","banner03.jpg","banner04.jpg","banner05.jpg","MEXICAN.jpg"],
      "sobreText":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      "imagemSobre":"sobre2.jpg",
      "facebook":"",
      "twitter":"",
      "instagram":"",
      "gmail":"",
      "seuEmail":""
    }

function setValues()
{
    document.getElementById("capa").backgroundImage = values.backgroundCapa;
    document.getElementById("logo").innerHTML= values.logo;

    var works = '<div class="title">Works</div><br>';
    for (var i = 0; i < values.works.length; i++) {
      works += "<a id='single_image' href='"+values.caminhoImgs+values.works[i]+"'><img src='"+values.caminhoImgs+values.works[i]+"' alt=''/></a>";
    }

    document.getElementById("works").innerHTML= works;
    document.getElementById("facebook").href= values.facebook;
    document.getElementById("twitter").href= values.twitter;
    document.getElementById("instagram").href= values.instagram;
    document.getElementById("gmail").href= values.gmail;
    document.getElementById("formContato").action = "https://formspree.io/"+values.seuEmail;

}

function setValuesSobre(){
  document.getElementById("sobre").innerHTML= values.sobreText;
  document.getElementById("sobreImg").src = values.caminhoImgs+values.imagemSobre;
}
