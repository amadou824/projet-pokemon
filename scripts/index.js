let xmlhttp = new XMLHttpRequest();

function loadXMLDoc() {
        xmlhttp.onreadystatechange = loadData;
        xmlhttp.open("GET", "data/questionnaire.xml", true);
        xmlhttp.send();
    }

function loadData() {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {   
        displayDataTable();     
    }
}


function displayDataTable() {
    let xmlDoc = xmlhttp.responseXML;    
    let questionnaire = "<tr><th>ID</th><th>Contenu</th><th>Reponse1</th><th>Reponse2</th><th>Reponse3</th><th>BonneReponse</th><th>Point</th><th>Image</th><th>Explication</th></tr>";    
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
    document.getElementById("data").innerHTML = questionnaire;
}
  