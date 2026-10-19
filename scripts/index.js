/*j'ai choisi d'utiliser le format ES6 pour l'import/export des fonctions et variables entre les fichiers JS,
 ce qui est plus moderne et permet une meilleure modularité du code.
*/
 // On exporte l'objet xmlhttp pour pouvoir le lire depuis apprendre.js
export let xmlhttp = new XMLHttpRequest();

// "callback" (une fonction à exécuter quand le chargement est fini)
// "chemin" (le chemin du fichier XML à charger)
export function loadXMLDoc(callback, chemin) {
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {   
            if(callback) callback();
        }
    };
    xmlhttp.open("GET", chemin, true);
    xmlhttp.send();
}

// Fonction d'affichage du tableau de données
export function displayDataTable() {
    let xmlDoc = xmlhttp.responseXML; 
    if (!xmlDoc) return;
       
    let questionnaire = "<tr><th>ID</th><th>Contenu</th><th>Reponse1</th><th>Reponse2</th><th>Reponse3</th><th>BonneReponse</th><th>Point</th><th>Image</th><th>Explication</th><th>Thematique</th></tr>";    
    let x = xmlDoc.getElementsByTagName("question");

    for (let i = 0; i < x.length; i++) {        
        let id = x[i].getElementsByTagName("id")[0].textContent;
        let contenu = x[i].getElementsByTagName("contenu")[0].textContent;
        let rep1 = x[i].getElementsByTagName("reponse1")[0].textContent;
        let rep2 = x[i].getElementsByTagName("reponse2")[0].textContent;
        let rep3 = x[i].getElementsByTagName("reponse3")[0].textContent;
        let bonneRep = x[i].getElementsByTagName("bonneReponse")[0].textContent;
        let point = x[i].getElementsByTagName("point")[0].textContent;
        let imageSrc = x[i].getElementsByTagName("image")[0].textContent;
        let explication = x[i].getElementsByTagName("explication")[0].textContent;
        let thematique = x[i].getElementsByTagName("thematique")[0] ? x[i].getElementsByTagName("thematique")[0].textContent : "";

        questionnaire += `
            <tr>
                <td>${id}</td>
                <td>${contenu}</td>
                <td>${rep1}</td>
                <td>${rep2}</td>
                <td>${rep3}</td>
                <td>${bonneRep}</td>
                <td>${point}</td>
                <td><img src="${imageSrc}" width="100" height="100" alt="Image du Pokemon"></td>
                <td>${explication}</td>
                <td>${thematique}</td>
            </tr>
        `;
    }
    document.getElementById("data").innerHTML = questionnaire;
}

// Si ce script est exécuté sur index.html, on lance le chargement + affichage
if (document.title === "Index") { 
    addEventListener("click", () => {
        loadXMLDoc(displayDataTable, "data/questionnaire.xml");
    });
}