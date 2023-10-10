const nimed = ["mari maasikas", "jaan jõesaar", "kristiina kukk", "margus mustikas", "jaak järve", "kadi kask", "Toomas Tamm", "Kadi Meri", "Leena Laas", "Madis Mets", "Hannes Hõbe", "Anu Allikas", "Kristjan Käär", "Eva Esimene", "Jüri Jõgi", "Liis Lepik", "Kalle Kask", "Tiina Teder", "Kaidi Koppel", "tiina Toom"];

function lisaNimi() {
    const sisestus = document.getElementById("nimeSisestus");
    const nimi = sisestus.value.trim();
    if (nimi !== "") {
        nimed.push(nimi);
        sisestus.value = "";
        uuendaNimeList();
    }
}

function kustutaNimi(index) {
    nimed.splice(index, 1);
    uuendaNimeList();
}

function uuendaNimeList() {
    const nimeList = document.getElementById("nimeList");
    nimeList.innerHTML = "";
    nimed.forEach((nimi, index) => {
        const row = document.createElement("div");
        row.className = "row";

        const nameColumn = document.createElement("div");
        nameColumn.className = "col-md-9";
        nameColumn.textContent = nimi;

        const buttonColumn = document.createElement("div");
        buttonColumn.className = "col-md-3";
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Kustuta";
        deleteButton.className = "btn btn-danger btn-sm";
        deleteButton.onclick = () => kustutaNimi(index);
        buttonColumn.appendChild(deleteButton);

        row.appendChild(nameColumn);
        row.appendChild(buttonColumn);

        const listItem = document.createElement("li");
        listItem.className = "list-group-item";
        listItem.appendChild(row);

        nimeList.appendChild(listItem);
    });
}


function otsiNimi() {
    const sisestus = document.getElementById("nimeSisestus").value.trim();
    const leitudNimed = nimed.filter(nimi => nimi.toLowerCase().includes(sisestus.toLowerCase()));
    if (leitudNimed.length > 0) {
        document.getElementById("tulemus").innerHTML = "Leitud nimed:<br>" + leitudNimed.join("<br>");
    } else {
        document.getElementById("tulemus").innerHTML = "Nime ei leitud.";
    }
}

uuendaNimeList();
