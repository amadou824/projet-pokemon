let xmlhttp = new XMLHttpRequest();

function loadXMLDoc() {
        xmlhttp.onreadystatechange = loadData;
        xmlhttp.open("GET", "https://obiwan.univ-brest.fr/~e22510037/data/bdd.xml", true);
        xmlhttp.send();
    }

function loadData() {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {   
        displayDataTable();     
    }
}


function displayDataTable() {
        let i;
        let xmlDoc = xmlhttp.responseXML;    
        let questionnaire = "<tr><th>ID</th><th>Contenu</th><th>Reponse1</th><th>Reponse2</th><th>Reponse3</th><th>BonneReponse</th><th>Point</th><img>Image</img><th>Explication</th></tr>";    
        let x = xmlDoc.getElementsByTagName("donnee");
        
        for (i = 0; i < x.length; i++) {        
            questionnaire += "<tr>" 
            + "<td>" 
            + x[i].getElementsByTagName("id")[0].textContent 
            + "</td>" 
            + "<td>" 
            + x[i].getElementsByTagName("contenu")[0].textContent 
            + "</td>" 
            + "<td>" 
            + x[i].getElementsByTagName("reponse1")[0].textContent 
            + "</td>" 
            + "<td>" 
            + x[i].getElementsByTagName("reponse2")[0].textContent 
            + "</td>" 
            + "<td>" 
            + x[i].getElementsByTagName("reponse3")[0].textContent 
            + "</td>" 
            + "<td>" 
            + x[i].getElementsByTagName("bonneReponse")[0].textContent 
            + "</td>" 
            + "<td>" 
            + x[i].getElementsByTagName("point")[0].textContent 
            + "</td>" 
              + "<img>" 
            + x[i].getElementsByTagName("image")[0].textContent 
            + "</img>" 
              + "<td>" 
            + x[i].getElementsByTagName("explication")[0].textContent 
            + "</td>" 
            + "</tr>";
        }
        
        document.getElementById("data").innerHTML = questionnaire;
    }   