class Article {
  constructor(nom, marque, prix, date, type, promotion) {
    this.nom = nom;
    this.marque = marque;
    this.prix = prix;
    this.date = date;
    this.type = type;
    this.promotion = promotion;

    // this.nom = document.getElementById("nom").value;
    // this.marque = document.getElementById("marque").value;;
    // this.prix = document.getElementById("prix").value;
    // this.date = document.getElementById("date").value;
    // this.type = document.getElementById("type").value;
    // this.promotion = document.querySelector("form").promotion.value;
  }

  validation() {
    const arr = [];
    arr.length = 0;

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
      arr.push(1);
    }

    if (nomMarqueValidation.test(marque)) {
      document.getElementById("marqueerror").style.visibility = "hidden";
    } else {
      document.getElementById("marqueerror").style.visibility = "visible";
      arr.push(1);
    }

    if (prixValidation.test(prix)) {
      document.getElementById("prixerror").style.visibility = "hidden";
    } else {
      document.getElementById("prixerror").style.visibility = "visible";
      arr.push(1);
    }

    if (date == "") {
      document.getElementById("dateerror").style.visibility = "visible";
      arr.push(1);
    } else {
      document.getElementById("dateerror").style.visibility = "hidden";
    }

    if (type == "choisis une option") {
      document.getElementById("typeerror").style.visibility = "visible";
      arr.push(1);
    } else {
      document.getElementById("typeerror").style.visibility = "hidden";
    }

    if (non.checked || oui.checked) {
      document.getElementById("promotionerror").style.visibility = "hidden";
    } else {
      arr.push(1);
      document.getElementById("promotionerror").style.visibility = "visible";
    }

    if (arr == 0) {
      return true;
    } else {
      return false;
    }
  }

  create() {
    let nomA = document.getElementById("nom").value;
    let marqueA = document.getElementById("marque").value;
    let prixA = document.getElementById("prix").value;
    let dateA = document.getElementById("date").value;
    let typeA = document.getElementById("type").value;
    let promotionA = document.querySelector("form").promotion.value;

    let newRowNewArticle = new Article(
      nomA,
      marqueA,
      prixA,
      dateA,
      typeA,
      promotionA
    );

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
  }

  emptyValues() {
    document.getElementById("nom").value = "";
    document.getElementById("marque").value = "";
    document.getElementById("prix").value = "";
    document.getElementById("date").value = "";
    document.getElementById("type").value = "choisis une option";
    non.checked = false;
    oui.checked = false;
  }

  modifier() {
    console.log("modifier test");
  }

  supprimer() {
    console.log("supprimer test");
  }

  details() {
    console.log("details method");
    return `Détails de l'article:<br>Nom: ${this.nom}<br>Marque: ${this.marque}<br>Prix: ${this.prix}DH<br>Date de production: ${this.date}<br>Type: ${this.type}<br>En promotion: ${this.promotion}`;
  }
}

function testii() {
  console.log("Button working");
  Article.validation;
  Article.create;
}

//   localStorage.setItem("a", nom.innerHTML);
//   localStorage.setItem("b", marque.innerHTML);
//   localStorage.setItem("c", prix.innerHTML);
//   localStorage.setItem("d", date.innerHTML);
//   localStorage.setItem("e", type.innerHTML);
//   localStorage.setItem("f", promotion.innerHTML);
//   localStorage.setItem("g", supprimer.innerHTML);

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
