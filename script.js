class Article {

  constructor(nom, marque, prix, date, type, promotion, modifier, supprimer) {
    this.nom = nom;
    this.marque = marque;
    this.prix = prix;
    this.date = date;
    this.type = type;
    this.promotion = promotion;
    this.modifier = modifier;
    this.supprimer = supprimer;
  }

  details() {
    console.log("details method");
  }
}

const inputErrorArr = [];

function validate() {

  inputErrorArr.length = 0;

  let nomMarqueValidation = /^[aA-zZ ?aA-zZ]{3,30}$/;
  let prixValidation = /^[0-9]+\$?$/;

  let nom = document.getElementById("nom").value;
  let marque = document.getElementById("marque").value;
  let prix = document.getElementById("prix").value;
  let date = document.getElementById("date").value;
  let type = document.getElementById("type").value;


  if (nomMarqueValidation.test(nom)) {
    document.getElementById("nomerror").style.visibility = "hidden";
  } else {
    document.getElementById("nomerror").style.visibility = "visible";
    inputErrorArr.push(1);
  }

  if (nomMarqueValidation.test(marque)) {
    document.getElementById("marqueerror").style.visibility = "hidden";
  } else {
    document.getElementById("marqueerror").style.visibility = "visible";
    inputErrorArr.push(1);
  }

  if (prixValidation.test(prix)) {
    document.getElementById("prixerror").style.visibility = "hidden";
  } else {
    document.getElementById("prixerror").style.visibility = "visible";
    inputErrorArr.push(1);
  }

  if (date == "") {
    document.getElementById("dateerror").style.visibility = "visible";
    inputErrorArr.push(1);
  } else {
    document.getElementById("dateerror").style.visibility = "hidden";
  }

  if (type == "choisis une option") {
    document.getElementById("typeerror").style.visibility = "visible";
    inputErrorArr.push(1);
  } else {
    document.getElementById("typeerror").style.visibility = "hidden";
  }

  if (non.checked || oui.checked) {
    document.getElementById("promotionerror").style.visibility = "hidden";
  } else {
    inputErrorArr.push(1);
    document.getElementById("promotionerror").style.visibility = "visible";
  }

  if (inputErrorArr == 0) {
    return true;
  } else {
    return false;
  }
}

// let newRowNewArticle

function ajouter() {

  if (validate()) {

    let table = document.getElementById("table");
    let row = table.insertRow();

    let nom = row.insertCell();
    let marque = row.insertCell();
    let prix = row.insertCell();
    let date = row.insertCell();
    let type = row.insertCell();
    let promotion = row.insertCell();
    let modifier = row.insertCell();
    let supprimer = row.insertCell();

    nom.innerHTML = document.getElementById("nom").value;
    marque.innerHTML = document.getElementById("marque").value;
    prix.innerHTML = document.getElementById("prix").value;
    date.innerHTML = document.getElementById("date").value;
    type.innerHTML = document.getElementById("type").value;
    promotion.innerHTML = document.querySelector("form").promotion.value;
    modifier.innerHTML = "Modifier";
    supprimer.innerHTML = "Supprimer";

    const localStorageArr = [];

    localStorageArr.push(table.row);

  window.localStorage.setItem("localStorageArr", JSON.stringify(localStorageArr));

  if (localStorage.table != null) {

    locsto = JSON.parse(localStorage.table);
    for (let i in locsto) {
      localStorageArr.push(
        new Article(
          locsto[i].nom,
          locsto[i].marque,
          locsto[i].prix,
          locsto[i].date,
          locsto[i].type,
          locsto[i].promotion
        )
      );
    }
  }

  function emptyValues() {
    document.getElementById("nom").value = "";
    document.getElementById("marque").value = "";
    document.getElementById("prix").value = "";
    document.getElementById("date").value = "";
    document.getElementById("type").value = "choisis une option";
    non.checked = false;
    oui.checked = false;
  }

  emptyValues();

  // Suppression ========================================================================================

  supprimer.onclick = function () {
    document.getElementById("confirm").style.visibility = "visible";
    document.getElementById('delete').onclick = function () {
      row.remove();
      document.getElementById("confirm").style.visibility = "hidden";
    };
  }


  // Modification =======================================================================================

  modifier.onclick = function () {

    document.getElementById("save").style.visibility = "visible";
    document.getElementById("ajouter").style.visibility = "hidden";

    document.getElementById("nom").value = nom.innerHTML;
    document.getElementById("marque").value = marque.innerHTML;
    document.getElementById("prix").value = prix.innerHTML;
    document.getElementById("date").value = date.innerHTML;
    document.getElementById("type").value = type.innerHTML;
    document.querySelector("form").promotion.value = promotion.innerHTML;

    document.getElementById("save").onclick = function () {

      if (validate()) {
        nom.innerHTML = document.getElementById("nom").value;
        marque.innerHTML = document.getElementById("marque").value;
        prix.innerHTML = document.getElementById("prix").value;
        date.innerHTML = document.getElementById("date").value;
        type.innerHTML = document.getElementById("type").value;
        promotion.innerHTML = document.querySelector("form").promotion.value;
        emptyValues();
        document.getElementById("save").style.visibility = "hidden";
        document.getElementById("ajouter").style.visibility = "visible";

      }
    };
  };
}

}




























// function ajouter() {

//   function validation() {
//     const errorArr = [];
//     arr.length = 0;

//     let nomMarqueValidation = /^[aA-zZ ?aA-zZ]{3,30}$/;
//     let prixValidation = /^[0-9]+\$?$/;

//     let nom = document.getElementById("nom").value;
//     let marque = document.getElementById("marque").value;
//     let prix = document.getElementById("prix").value;
//     let date = document.getElementById("date").value;
//     let type = document.getElementById("type").value;

//     if (nomMarqueValidation.test(nom)) {
//       document.getElementById("nomerror").style.visibility = "hidden";
//     } else {
//       document.getElementById("nomerror").style.visibility = "visible";
//       arr.push(1);
//     }

//     if (nomMarqueValidation.test(marque)) {
//       document.getElementById("marqueerror").style.visibility = "hidden";
//     } else {
//       document.getElementById("marqueerror").style.visibility = "visible";
//       arr.push(1);
//     }

//     if (prixValidation.test(prix)) {
//       document.getElementById("prixerror").style.visibility = "hidden";
//     } else {
//       document.getElementById("prixerror").style.visibility = "visible";
//       arr.push(1);
//     }

//     if (date == "") {
//       document.getElementById("dateerror").style.visibility = "visible";
//       arr.push(1);
//     } else {
//       document.getElementById("dateerror").style.visibility = "hidden";
//     }

//     if (type == "choisis une option") {
//       document.getElementById("typeerror").style.visibility = "visible";
//       arr.push(1);
//     } else {
//       document.getElementById("typeerror").style.visibility = "hidden";
//     }

//     if (non.checked || oui.checked) {
//       document.getElementById("promotionerror").style.visibility = "hidden";
//     } else {
//       arr.push(1);
//       document.getElementById("promotionerror").style.visibility = "visible";
//     }

//     if (arr == 0) {
//       return true;
//     } else {
//       return false;
//     }
//   }

//   function create() {

    let nom = document.getElementById("nom").value;
    let marque = document.getElementById("marque").value;
    let prix = document.getElementById("prix").value;
    let date = document.getElementById("date").value;
    let type = document.getElementById("type").value;
    let promotion = document.querySelector("form").promotion.value;

    let newRowNewArticle = new Article(nom, marque, prix, date, type, promotion)

    newRowNewArticle = {

      table: document.getElementById("table"),

      row: table.insertRow(),

      nomcell: row.insertCell(),
      marquecell: row.insertCell(),
      prixcell: row.insertCell(),
      datecell: row.insertCell(),
      typecell: row.insertCell(),
      promotioncell: row.insertCell(),
      modifiercell: row.insertCell(),
      supprimercell: row.insertCell(),

    };
//   }

//   function emptyValues() {
//     document.getElementById("nom").value = "";
//     document.getElementById("marque").value = "";
//     document.getElementById("prix").value = "";
//     document.getElementById("date").value = "";
//     document.getElementById("type").value = "choisis une option";
//     non.checked = false;
//     oui.checked = false;
//   }

//   modifier.onclick = function () {

//     document.getElementById("save").style.visibility = "visible";

//     document.getElementById("nom").value = nom.innerHTML;
//     document.getElementById("marque").value = marque.innerHTML;
//     document.getElementById("prix").value = prix.innerHTML;
//     document.getElementById("date").value = date.innerHTML;
//     document.getElementById("type").value = type.innerHTML;
//     document.querySelector("form").promotion.value = promotion.innerHTML;

//     document.getElementById("save").onclick = function () {

//       if (validate()) {
//         nom.innerHTML = document.getElementById("nom").value;
//         marque.innerHTML = document.getElementById("marque").value;
//         prix.innerHTML = document.getElementById("prix").value;
//         date.innerHTML = document.getElementById("date").value;
//         type.innerHTML = document.getElementById("type").value;
//         promotion.innerHTML = document.querySelector("form").promotion.value;
//         emptyValues();
//         document.getElementById("save").style.visibility = "hidden";

//       };
//     };
//   }

//   supprimer.onclick = function () {
//     document.getElementById("confirm").style.visibility = "visible";
//     document.getElementById('delete').onclick = function () {
//       row.remove();
//       document.getElementById("confirm").style.visibility = "hidden";
//     };
//   }

// }



















// localStorage.setItem("a", nom.innerHTML);
// localStorage.setItem("b", marque.innerHTML);
// localStorage.setItem("c", prix.innerHTML);
// localStorage.setItem("d", date.innerHTML);
// localStorage.setItem("e", type.innerHTML);
// localStorage.setItem("f", promotion.innerHTML);
// localStorage.setItem("g", supprimer.innerHTML);

