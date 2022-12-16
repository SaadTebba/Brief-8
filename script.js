class Article {
  constructor(nom, marque, prix, date, type, promotion) {
    this.nom = nom;
    this.marque = marque;
    this.prix = prix;
    this.date = date;
    this.type = type;
    this.promotion = promotion;
    this.details = function () {
      document.getElementById("details").style.visibility = "visible";
      document.getElementById(
        "detailsParagraph"
      ).innerHTML = `<br><b>Nom:</b> ${this.nom}<br><b>Marque:</b> ${this.marque}<br><b>Prix:</b> ${this.prix}DH<br><b>Date:</b> ${this.date}<br><b>Type:</b> ${this.type}<br><b>En promotion:</b> ${this.promotion}<br>`;
    };
  }
}

let inputErrorArr = [];

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

function takeInputValues() {
  
  let nom = document.getElementById("nom").value;
  let marque = document.getElementById("marque").value;
  let prix = document.getElementById("prix").value;
  let date = document.getElementById("date").value;
  let type = document.getElementById("type").value;
  let promotion = document.querySelector("form").promotion.value;

  let article = new Article(
    nom,
    marque,
    prix,
    date,
    type,
    promotion
  );

  return article;
}

function takeLocalStorageValues() {
  JSON.parse(localStorage.getItem(takeInputValues()));
}

function createTable() {

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

  nom.innerHTML = takeInputValues().nom;
  marque.innerHTML = takeInputValues().marque;
  prix.innerHTML = takeInputValues().prix;
  date.innerHTML = takeInputValues().date;
  type.innerHTML = takeInputValues().type;
  promotion.innerHTML = takeInputValues().promotion;

  modifier.innerHTML = "Modifier";
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

        sortTable();
      }
    };
  };

  supprimer.innerHTML = "Supprimer";
  supprimer.onclick = function () {
    document.getElementById("confirm").style.visibility = "visible";
    document.getElementById("delete").onclick = function () {
      document.getElementById("confirm").style.visibility = "hidden";
      row.remove();
      localStorage.removeItem(takeInputValues().nom);
    };
  };

}

function sortTable() {

  let table = document.getElementById("table");
  let rows, switching, i, x, y, shouldSwitch;

  switching = true;
  while (switching) {
    switching = false;
    rows = table.rows;
    for (i = 1; i < rows.length - 1; i++) {
      shouldSwitch = false;
      x = rows[i].getElementsByTagName("td")[0];
      y = rows[i + 1].getElementsByTagName("td")[0];
      if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
        shouldSwitch = true;
        break;
      }
    }
    if (shouldSwitch) {
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
    }
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

function ajouter() {

  if (validate()) {

    takeInputValues();

    createTable();

    takeInputValues().details();

    sortTable();

    localStorage.setItem(
      takeInputValues().nom,
      JSON.stringify(takeInputValues())
    );

    emptyValues();

  }
}