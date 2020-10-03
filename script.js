//Übermittlung von Antworten aus dem Fragebogen
//gibt die Gildenbeschreibungen frei
function submitAnswer()
        {
            
            var f001 = parseFloat(document.querySelector('input[name="f01"]:checked').value); <!--Azorius-->
            var f002 = parseFloat(document.querySelector('input[name="f02"]:checked').value); <!--Dimir-->
            var f003 = parseFloat(document.querySelector('input[name="f03"]:checked').value); <!--Boros-->
            var f004 = parseFloat(document.querySelector('input[name="f04"]:checked').value); <!--Golgari-->
            var f005 = parseFloat(document.querySelector('input[name="f05"]:checked').value); <!--Simic-->
            var f006 = parseFloat(document.querySelector('input[name="f06"]:checked').value); <!--Simic-->
            var f007 = parseFloat(document.querySelector('input[name="f07"]:checked').value); <!--Selesnya-->
            var f008 = parseFloat(document.querySelector('input[name="f08"]:checked').value); <!--Boros-->
            var f009 = parseFloat(document.querySelector('input[name="f09"]:checked').value); <!--Selesnya-->
            var f010 = parseFloat(document.querySelector('input[name="f10"]:checked').value); <!--Rakdos-->
            var f011 = parseFloat(document.querySelector('input[name="f11"]:checked').value); <!--Azorius-->
            var f012 = parseFloat(document.querySelector('input[name="f12"]:checked').value); <!--Golgari-->
            var f013 = parseFloat(document.querySelector('input[name="f13"]:checked').value); <!--Orzhov-->
            var f014 = parseFloat(document.querySelector('input[name="f14"]:checked').value); <!--Selesnya-->
            var f015 = parseFloat(document.querySelector('input[name="f15"]:checked').value); <!--Golgari-->
            var f016 = parseFloat(document.querySelector('input[name="f16"]:checked').value); <!--Rakdos-->
            var f017 = parseFloat(document.querySelector('input[name="f17"]:checked').value); <!--Izzet-->
            var f018 = parseFloat(document.querySelector('input[name="f18"]:checked').value); <!--Azorius-->
            var f019 = parseFloat(document.querySelector('input[name="f19"]:checked').value); <!--Orzhov-->
            var f020 = parseFloat(document.querySelector('input[name="f20"]:checked').value); <!--Izzet-->
            var f021 = parseFloat(document.querySelector('input[name="f21"]:checked').value); <!--Dimir-->
            var f022 = parseFloat(document.querySelector('input[name="f22"]:checked').value); <!--Gruul-->
            var f023 = parseFloat(document.querySelector('input[name="f23"]:checked').value); <!--Simic-->
            var f024 = parseFloat(document.querySelector('input[name="f24"]:checked').value); <!--Gruul-->
            var f025 = parseFloat(document.querySelector('input[name="f25"]:checked').value); <!--Boros-->
            var f026 = parseFloat(document.querySelector('input[name="f26"]:checked').value); <!--Rakdos-->
            var f027 = parseFloat(document.querySelector('input[name="f27"]:checked').value); <!--Orzhov-->
            var f028 = parseFloat(document.querySelector('input[name="f28"]:checked').value); <!--Gruul-->
            var f029 = parseFloat(document.querySelector('input[name="f29"]:checked').value); <!--Dimir-->
            var f030 = parseFloat(document.querySelector('input[name="f30"]:checked').value); <!--Izzet-->           
                        
            var sumGildeAzori = f001+f011+f018;
            var sumGildeDimir = f002+f021+f029;
            var sumGildeBoros = f003+f008+f025;
            var sumGildeGolga = f004+f012+f015;
            var sumGildeSimic = f005+f006+f023;
            var sumGildeSeles = f007+f009+f014;
            var sumGildeRakdo = f010+f016+f026;
            var sumGildeOrzho = f013+f019+f027;
            var sumGildeIzzet = f017+f020+f030;
            var sumGildeGruul = f022+f024+f028;
            
            var resultsGildeAzori = document.getElementById('resultsAzorius');
            resultsGildeAzori.innerHTML = '<p class="resultCounter"><br>' + sumGildeAzori +  '/15</p>';
            console.log(sumGildeAzori);
            
            var resultsGildeDimir = document.getElementById('resultsDimir');
            resultsGildeDimir.innerHTML = '<p class="resultCounter"><br>' + sumGildeDimir + '/15</p>';
            console.log(sumGildeDimir);
            
            var resultsGildeBoros = document.getElementById('resultsBoros');
            resultsGildeBoros.innerHTML = '<p class="resultCounter"><br>' + sumGildeBoros + '/15</p>';
            console.log(sumGildeBoros);
            
            var resultsGildeGolga = document.getElementById('resultsGolgari');
            resultsGildeGolga.innerHTML = '<p class="resultCounter"><br>' + sumGildeGolga + '/15</p>';
            console.log(sumGildeGolga);
            
            var resultsGildeSimic = document.getElementById('resultsSimic');
            resultsGildeSimic.innerHTML = '<p class="resultCounter"><br>' + sumGildeSimic + '/15</p>';
            console.log(sumGildeSimic);
            
            var resultsGildeSeles = document.getElementById('resultsSelesnya');
            resultsGildeSeles.innerHTML = '<p class="resultCounter"><br>' + sumGildeSeles + '/15</p>';
            console.log(sumGildeSeles);
            
            var resultsGildeRakdo = document.getElementById('resultsRakdos');
            resultsGildeRakdo.innerHTML = '<p class="resultCounter"><br>' + sumGildeRakdo + '/15</p>';
            console.log(sumGildeRakdo);
            
            var resultsGildeOrzho = document.getElementById('resultsOrzhov');
            resultsGildeOrzho.innerHTML = '<p class="resultCounter"><br>' + sumGildeOrzho + '/15</p>';
            console.log(sumGildeOrzho);
            
            var resultsGildeIzzet = document.getElementById('resultsIzzet');
            resultsGildeIzzet.innerHTML = '<p class="resultCounter"><br>' + sumGildeIzzet + '/15</p>';
            console.log(sumGildeIzzet);
            
            var resultsGildeGruul = document.getElementById('resultsGruul');
            resultsGildeGruul.innerHTML = '<p class="resultCounter"><br>' + sumGildeGruul + '/15</p>';
            console.log(sumGildeGruul);
            
            //window.scrollTo(0, 0);
            
            var quizDone = document.getElementById("resultCheck");
            quizDone.style.display = "block";
            
            return false;
        }


//Gilden Kurzbeschreibung
//Alle P-Tags ausblenden
//Alle Icons auf einheitliche Sichtbarkeit stellen
function disableDescriptionText(){
    
    var resetAzorius = document.getElementById("textAzorius");
    resetAzorius.style.display = "none";
    var resetDimir = document.getElementById("textDimir");
    resetDimir.style.display = "none";
    var resetBoros = document.getElementById("textBoros");
    resetBoros.style.display = "none";
    var resetGolgari = document.getElementById("textGolgari");
    resetGolgari.style.display = "none";
    var resetSimic = document.getElementById("textSimic");
    resetSimic.style.display = "none";
    var resetSelesnya = document.getElementById("textSelesnya");
    resetSelesnya.style.display = "none";
    var resetRakdos = document.getElementById("textRakdos");
    resetRakdos.style.display = "none";
    var resetOrzhov = document.getElementById("textOrzhov");
    resetOrzhov.style.display = "none";
    var resetIzzet = document.getElementById("textIzzet");
    resetIzzet.style.display = "none";
    var resetGruul = document.getElementById("textGruul");
    resetGruul.style.display = "none";
    
    var iconAzorius = document.getElementById("azorius");
    iconAzorius.style.opacity = 0.5;
    var iconDimir = document.getElementById("dimir");
    iconDimir.style.opacity = 0.5;
    var iconBoros = document.getElementById("boros");
    iconBoros.style.opacity = 0.5;
    var iconGolgari = document.getElementById("golgari");
    iconGolgari.style.opacity = 0.5;
    var iconSimic = document.getElementById("simic");
    iconSimic.style.opacity = 0.5;
    var iconSelesnya = document.getElementById("selesnya");
    iconSelesnya.style.opacity = 0.5;
    var iconRakdos = document.getElementById("rakdos");
    iconRakdos.style.opacity = 0.5;
    var iconOrzhov = document.getElementById("orzhov");
    iconOrzhov.style.opacity = 0.5;
    var iconIzzet = document.getElementById("izzet");
    iconIzzet.style.opacity = 0.5;
    var iconGruul = document.getElementById("gruul");
    iconGruul.style.opacity = 0.5;
}


//Gilden Kurzbeschreibung
//aktiviert/deaktiviert die P-Tags und Div-Tags sowie die Sichtbarkeit der Icons nach jedem Klick
function showDescription(pTagID, divTagID, iconID){
    
    var pTag = document.getElementById(pTagID);
    var divTag = document.getElementById(divTagID);
    var icon = document.getElementById(iconID);
    
    if(pTag.style.display === "block"){
        pTag.style.display = "none";
        divTag.style.display = "none";
        icon.style.opacity = 0.5;
    } else {
        disableDescriptionText();
        pTag.style.display = "block";
        divTag.style.display = "block";
        icon.style.opacity = 1.0;
    }    
}


//Gilden Langbeschreibung
//Alle P-Tags ausblenden
//Alle Icons auf einheitliche Sichtbarkeit stellen
function disableDescriptionResult(){
    
    var resetAzorius = document.getElementById("descriptionResultAzorius");
    resetAzorius.style.display = "none";
    var resetDimir = document.getElementById("descriptionResultDimir");
    resetDimir.style.display = "none";
    var resetBoros = document.getElementById("descriptionResultBoros");
    resetBoros.style.display = "none";
    var resetGolgari = document.getElementById("descriptionResultGolgari");
    resetGolgari.style.display = "none";
    var resetSimic = document.getElementById("descriptionResultSimic");
    resetSimic.style.display = "none";
    var resetSelesnya = document.getElementById("descriptionResultSelesnya");
    resetSelesnya.style.display = "none";
    var resetRakdos = document.getElementById("descriptionResultRakdos");
    resetRakdos.style.display = "none";
    var resetOrzhov = document.getElementById("descriptionResultOrzhov");
    resetOrzhov.style.display = "none";
    var resetIzzet = document.getElementById("descriptionResultIzzet");
    resetIzzet.style.display = "none";
    var resetGruul = document.getElementById("descriptionResultGruul");
    resetGruul.style.display = "none";
    
    var iconAzorius = document.getElementById("resultsAzorius");
    iconAzorius.style.opacity = 0.5;
    var iconDimir = document.getElementById("resultsDimir");
    iconDimir.style.opacity = 0.5;
    var iconBoros = document.getElementById("resultsBoros");
    iconBoros.style.opacity = 0.5;
    var iconGolgari = document.getElementById("resultsGolgari");
    iconGolgari.style.opacity = 0.5;
    var iconSimic = document.getElementById("resultsSimic");
    iconSimic.style.opacity = 0.5;
    var iconSelesnya = document.getElementById("resultsSelesnya");
    iconSelesnya.style.opacity = 0.5;
    var iconRakdos = document.getElementById("resultsRakdos");
    iconRakdos.style.opacity = 0.5;
    var iconOrzhov = document.getElementById("resultsOrzhov");
    iconOrzhov.style.opacity = 0.5;
    var iconIzzet = document.getElementById("resultsIzzet");
    iconIzzet.style.opacity = 0.5;
    var iconGruul = document.getElementById("resultsGruul");
    iconGruul.style.opacity = 0.5;
}


//Gilden Langbeschreibung
//aktiviert/deaktiviert die P-Tags und Div-Tags sowie die Sichtbarkeit der Icons nach jedem Klick
function enableDescriptionResult(pTagID, divTagID, iconID){
    
    var pTag = document.getElementById(pTagID);
    var divTag = document.getElementById(divTagID);
    var icon = document.getElementById(iconID);
    
    if (pTag.style.display === "block"){
        pTag.style.display = "none";
        divTag.style.display = "none";
        icon.style.opacity = 0.5;
    } else {
        disableDescriptionResult();
        pTag.style.display = "block";
        divTag.style.display = "block";
        icon.style.opacity = 1.0;
    }    
}


//check: Wurde eine Eingabe in der Frage getätigt?
//wenn ja: disable currentQuestion und activate nextQuestion
//else: return false
function nextQuestion(currentQuestion, nextQuestion, groupName){
    
    var current = document.getElementById(currentQuestion);
    var next = document.getElementById(nextQuestion);
    var quest01 = document.getElementById(groupName + "-1");
    var quest02 = document.getElementById(groupName + "-2");
    var quest03 = document.getElementById(groupName + "-3");
    var quest04 = document.getElementById(groupName + "-4");
    var quest05 = document.getElementById(groupName + "-5");
    
    var section01 = document.getElementById("gildenOverview");
    var section02 = document.getElementById("sectionFragebogen");
    var section03 = document.getElementById("sectionPunkteauswertung");
    var section04 = document.getElementById("sectionLangbeschreibung");
        
    if(quest01.checked == true || quest02.checked == true || quest03.checked == true || quest04.checked == true || quest05.checked == true){
        if(currentQuestion == "question30"){
            section01.style.display = "none";
            section02.style.display = "none";
            section03.style.display = "block";
            section04.style.display = "block";
            submitAnswer();
        } else {
            current.style.display = "none";
        next.style.display = "block";
        }
    }else{
        return false;
    }
}