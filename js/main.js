// EXERCICE 1

// Ecrivez un programme JavaScript qui permet, grâce a un bouton, de changer le
// background-color d’un paragraphe.

// function changeBgColor() {
//     document.getElementById("exo1").style.backgroundColor = "red";
// }


// EXERCICE 2

// Ecrivez un programme qui permet, lors du clic sur le bouton, d’afcher dans le
// paragraphe tous les attributs du lien.

// function showAttributs () {
//    var getAt = document.getElementById("google");
//    var googleAt = google.getAttribute("google");
//    var hrefang = google.getAttribute("hrefang");
//    var target = google.getAttribute("target");
//    var href = google.getAttribute("href");
//    document.getElementById("replace").innerHTML = googleAt + " " + hrefang + " " + target + " " + href;

// }


// EXERCICE 3


// Créez une div avec « survolez moi » comme contenu, avec un background-color
// « lightgrey ».
// Au survol de la div, le background-color change en « white », et le contenu en
// « bienvenue ».
// Lorsque la souris quitte l’élément, la div reprend son état initial (background-color
// « lightgrey » et contenu « survolez moi » 

// function mOver(obj){
//     obj.style.backgroundColor = "white";
//     obj.innerHTML = "Bienvenue !";
// }

// function mOut(obj) {
//     obj.style.backgroundColor = "lightgrey";
//     obj.innerHTML = "SURVOLEZ MOI!";
// }


// EXERCICE 4

// function getTheDate() {
//     document.getElementById('date').innerHTML = Date();
// }

// console.log("test");


// EXERCICE 5



// EXERCICE 6
// var colors = ["blue", "yellow", "red"];
// var count = 0;

// function changeColor() {
//     if (count < colors.length) {
//         document.getElementById("changecolor").style.backgroundColor = colors[count];
//         count++;
//     }
// }


// EXERCICE 7

// var nbr = 2;

// function addToTable() {
//     var table = document.getElementById("tableau");
//     var row = table.insertRow(table.length);
//     var firstCell = row.insertCell(0);
//     var secondCell = row.insertCell(1);
   
//     nbr ++;
    
//     firstCell.innerHTML = "Ligne " + nbr ;
//     secondCell.innerHTML = "Ligne " + nbr ;    
// }


// EXERCICE 8
// function addElements() {
// var link = document.createElement('a');
// var img = document.createElement('img');
// var para = document.createElement('p');
// link.appendChild(img, para);

// var element = document.getElementById("inject");
// document.body.appendChild(link);} 


//9
// var stockID = [];

// function stock() {
//     var myImgClass = document.getElementsByClassName("img-fluid");
//     var classCount = myImgClass.length;

//     for(var j = 0; j < classCount; j++){
//         stockID.push(myImgClass[j].id);
//     }
// }

