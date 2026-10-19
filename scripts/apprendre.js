import { loadXMLDoc, xmlhttp } from './index.js';

// Fonction filtrer
function filterDataTable(themeFiltre) {
    let xmlDoc = xmlhttp.responseXML;
    if (!xmlDoc) return;

    let questionnaire = `
        <thead class="table-pokemon">
            <tr>
                <th>ID</th>
                <th>Contenu de la question</th>
                <th>Réponse 1</th>
                <th>Réponse 2</th>
                <th>Réponse 3</th>
                <th>Bonne Réponse</th>
                <th>Points</th>
                <th>Image</th>
                <th>Explication</th>
            </tr>
        </thead>
        <tbody>
    `;
    let x = xmlDoc.getElementsByTagName("question");

    for (let i = 0; i < x.length; i++) {
        let thematiqueNode = x[i].getElementsByTagName("thematique")[0];
        let thematique = thematiqueNode ? thematiqueNode.textContent : "Tout";

        // Si le thème correspond, ou si on a sélectionné "Tout", on génère la ligne
        if (themeFiltre === "Tout" || thematique === themeFiltre) {
            let id = x[i].getElementsByTagName("id")[0].textContent;
            let contenu = x[i].getElementsByTagName("contenu")[0].textContent;
            let rep1 = x[i].getElementsByTagName("reponse1")[0].textContent;
            let rep2 = x[i].getElementsByTagName("reponse2")[0].textContent;
            let rep3 = x[i].getElementsByTagName("reponse3")[0].textContent;
            let bonneRep = x[i].getElementsByTagName("bonneReponse")[0].textContent;
            let point = x[i].getElementsByTagName("point")[0].textContent;
            let imageSrc = x[i].getElementsByTagName("image")[0].textContent;
            let explication = x[i].getElementsByTagName("explication")[0].textContent;
            
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
                </tr>
            `;
        }
    }
    questionnaire += `</tbody>`;
    document.getElementById("data").innerHTML = questionnaire;
}

// 1.recuperation des données XML et affichage initial du tableau par défaut avec le thème "Tout"
loadXMLDoc(() => {
    filterDataTable("Tout");
}, "../data/questionnaire.xml");

// 2. Gestion du bouton de filtrage
let btnFiltrer = document.getElementById("btn-filtrer");
btnFiltrer.addEventListener("click", () => {
    let slThematique = document.getElementById("thematique");
    let themeChoisi = slThematique.options[slThematique.selectedIndex].value;
    
    //Mise à jour le tableau avec le thème sélectionné
    filterDataTable(themeChoisi);
});