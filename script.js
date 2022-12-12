class Article {
  constructor(nom, marque, prix, date, type, promotion) {
    this.nom = nom;
    this.marque = marque;
    this.prix = prix;
    this.date = date;
    this.type = type;
    this.promotion = promotion;
  }

  details() {
    console.log("details method");
    return `Détails de l'article:<br>Nom: ${this.nom}<br>Marque: ${this.marque}<br>Prix: ${this.prix}DH<br>Date de production: ${this.date}<br>Type: ${this.type}<br>En promotion: ${this.promotion}`;
  }

  modifier() {
    console.log("modifier test");
  }

  supprimer() {
    console.log("supprimer test");
  }
}

function testii() {

  console.log("hello world")

  let nom = document.getElementById("nom").value;
  let marque = document.getElementById("marque").value;
  let prix = document.getElementById("prix").value;
  let date = document.getElementById("date").value;
  let type = document.getElementById("type").value;
  let promotion = document.querySelector("form").promotion.value;

  // new Article(nom, marque, prix, date, type, promotion) = {
  //   let table = document.getElementById("table");
  //   let row = table.insertRow();

  //   let nom = row.insertCell();
  //   let marque = row.insertCell();
  //   let prix = row.insertCell();
  //   let date = row.insertCell();
  //   let type = row.insertCell();
  //   let promotion = row.insertCell();
  //   let modifier = row.insertCell();
  //   let supprimer = row.insertCell();
  //       nom.innerHTML = document.getElementById("nom").value;
  //   localStorage.setItem("a", nom.innerHTML);
  //   marque.innerHTML = document.getElementById("marque").value;
  //   localStorage.setItem("b", marque.innerHTML);
  //   prix.innerHTML = document.getElementById("prix").value;
  //   localStorage.setItem("c", prix.innerHTML);
  //   date.innerHTML = document.getElementById("date").value;
  //   localStorage.setItem("d", date.innerHTML);
  //   type.innerHTML = document.getElementById("type").value;
  //   localStorage.setItem("e", type.innerHTML);
  //   promotion.innerHTML = document.querySelector("form").promotion.value;
  //   localStorage.setItem("f", promotion.innerHTML);
  //   supprimer.innerHTML = "Supprimer";
  //   localStorage.setItem("g", supprimer.innerHTML);
  // }
}

// function validate() {
//   const arr = [];
//   arr.length = 0;

//   let nomMarqueValidation = /^[aA-zZ ?aA-zZ]{3,30}$/;
//   let prixValidation = /^[0-9]+\$?$/;

// let nom = document.getElementById("nom").value;
// let marque = document.getElementById("marque").value;
// let prix = document.getElementById("prix").value;
// let date = document.getElementById("date").value;
// let type = document.getElementById("type").value;

//   if (nomMarqueValidation.test(nom)) {
//     document.getElementById("nomerror").style.visibility = "hidden";
//   } else {
//     document.getElementById("nomerror").style.visibility = "visible";
//     arr.push(1);
//   }

//   if (nomMarqueValidation.test(marque)) {
//     document.getElementById("marqueerror").style.visibility = "hidden";
//   } else {
//     document.getElementById("marqueerror").style.visibility = "visible";
//     arr.push(1);
//   }

//   if (prixValidation.test(prix)) {
//     document.getElementById("prixerror").style.visibility = "hidden";
//   } else {
//     document.getElementById("prixerror").style.visibility = "visible";
//     arr.push(1);
//   }

//   if (date == "") {
//     document.getElementById("dateerror").style.visibility = "visible";
//     arr.push(1);
//   } else {
//     document.getElementById("dateerror").style.visibility = "hidden";
//   }

//   if (type == "choisis une option") {
//     document.getElementById("typeerror").style.visibility = "visible";
//     arr.push(1);
//   } else {
//     document.getElementById("typeerror").style.visibility = "hidden";
//   }

//   if (non.checked || oui.checked) {
//     document.getElementById("promotionerror").style.visibility = "hidden";
//   } else {
//     arr.push(1);
//     document.getElementById("promotionerror").style.visibility = "visible";
//   }

//   if (arr == 0) {
//     return true;
//   } else {
//     return false;
//   }
// }

// function emptyValues() {
//   document.getElementById("nom").value = "";
//   document.getElementById("marque").value = "";
//   document.getElementById("prix").value = "";
//   document.getElementById("date").value = "";
//   document.getElementById("type").value = "choisis une option";
//   non.checked = false;
//   oui.checked = false;
// }

// function ajouter() {
//   if (validate()) {
//     let table = document.getElementById("table");
//     let row = table.insertRow();

//     let nom = row.insertCell();
//     let marque = row.insertCell();
//     let prix = row.insertCell();
//     let date = row.insertCell();
//     let type = row.insertCell();
//     let promotion = row.insertCell();
//     let modifier = row.insertCell();
//     let supprimer = row.insertCell();

//     nom.innerHTML = document.getElementById("nom").value;
//     localStorage.setItem("a", nom.innerHTML);
//     marque.innerHTML = document.getElementById("marque").value;
//     localStorage.setItem("b", marque.innerHTML);
//     prix.innerHTML = document.getElementById("prix").value;
//     localStorage.setItem("c", prix.innerHTML);
//     date.innerHTML = document.getElementById("date").value;
//     localStorage.setItem("d", date.innerHTML);
//     type.innerHTML = document.getElementById("type").value;
//     localStorage.setItem("e", type.innerHTML);
//     promotion.innerHTML = document.querySelector("form").promotion.value;
//     localStorage.setItem("f", promotion.innerHTML);
//     supprimer.innerHTML = "Supprimer";
//     localStorage.setItem("g", supprimer.innerHTML);
//     modifier.innerHTML = "Modifier";
//     localStorage.setItem("h", modifier.innerHTML);
//     supprimer.onclick = function () {
//       document.getElementById("confirm").style.visibility = "visible";
//       document.getElementById("delete").onclick = function () {
//         row.remove();
//         document.getElementById("confirm").style.visibility = "hidden";
//       };
//     };

//     modifier.onclick = function () {
//       document.getElementById("save").style.visibility = "visible";

//       document.getElementById("nom").value = nom.innerHTML;
//       document.getElementById("marque").value = marque.innerHTML;
//       document.getElementById("prix").value = prix.innerHTML;
//       document.getElementById("date").value = date.innerHTML;
//       document.getElementById("type").value = type.innerHTML;
//       document.querySelector("form").promotion.value = promotion.innerHTML;

//       document.getElementById("save").onclick = function () {
//         if (validate()) {
//           nom.innerHTML = document.getElementById("nom").value;
//           marque.innerHTML = document.getElementById("marque").value;
//           prix.innerHTML = document.getElementById("prix").value;
//           date.innerHTML = document.getElementById("date").value;
//           type.innerHTML = document.getElementById("type").value;
//           promotion.innerHTML = document.querySelector("form").promotion.value;
//           emptyValues();
//           document.getElementById("save").style.visibility = "hidden";
//         }
//       };
//     };

//     emptyValues();
//   }
// }

// =======================================================================================================================================

// if (location.reload() === true) {
//   let table = document.getElementById("table");
//   let row = table.insertRow();

//   let nom = row.insertCell();
//   let marque = row.insertCell();
//   let prix = row.insertCell();
//   let date = row.insertCell();
//   let type = row.insertCell();
//   let promotion = row.insertCell();
//   let modifier = row.insertCell();
//   let supprimer = row.insertCell();

//   nom.innerHTML = localStorage.getItem(a)
//   marque.innerHTML = localStorage.getItem(b);
//   prix.innerHTML = localStorage.getItem(c);
//   date.innerHTML = localStorage.getItem(d);
//   type.innerHTML = localStorage.getItem(e);
//   promotion.innerHTML = localStorage.getItem(f);
//   supprimer.innerHTML = "Supprimer";
//   modifier.innerHTML = "Modifier";
// }
