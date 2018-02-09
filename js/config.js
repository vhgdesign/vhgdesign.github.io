var values = {
      "caminhoImgs":"img/",
      "logo":"logo.png",
      "backgroundCapa":"backgroud.jpg",
      "works":["banner01.jpg","banner02.jpg","banner03.jpg","banner04.jpg","banner05.jpg","MEXICAN.jpg"],
      "sobreText":"Meu nome é Vinicius Gomes, trabalho como designer gráfico, sou técnico em informatica no colégio Poli Técnico Bento Quirino, Tenho curso completo de Web Designer.",
      
      "facebook":"",
      "twitter":"",
      "instagram":"",
      "gmail":"vinicius.henrique1546@gmail.com",
      "seuEmail":"vinicius.henrique2007@hotmail.com"
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
