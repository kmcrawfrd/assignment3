var silverShirt = 1;
var jesseShirt = 2;

var silverCounter = 3;
var jesseCounter = 3;

var silverDisplay = 1;
var jesseDisplay = 0;

$("#character-icon2").on("click", function() {
    silverDisplay = 0;
    jesseDisplay = 1;
    jesseCounter = 3;

    $("#shirt1").removeClass("active");
    $("#shirt2").addClass("active");
    $("#character-image").replaceWith('<img id="character-image" src="images/Jesse/NeutralJess2.png">');
    $("#character-name").replaceWith('<h1 id="character-name">Jesse</h1>');
    $("#character-icon2").addClass("active");
    $("#character-icon1").removeClass("active");
    document.documentElement.style.setProperty('--silver-silver', '#a34a3b');
    document.documentElement.style.setProperty('--silver-brown', '#28221d');
    document.documentElement.style.setProperty('--silver-tan', '#8d8073');
    
    if (jesseDisplay == 1 && silverDisplay == 0) {
        $("#shirt1").on("click", jesseShirt1Toggle);
    }
    if (jesseDisplay == 1 && silverDisplay == 0) {
        $("#shirt2").on("click", jesseShirt2Toggle);
    }
});

if (jesseDisplay == 1 && silverDisplay == 0) {
    $("#shirt1").on("click", jesseShirt1Toggle);
}
if (jesseDisplay == 1 && silverDisplay == 0) {
    $("#shirt2").on("click", jesseShirt2Toggle);
}

$("#character-icon1").on("click", function() {
    jesseDisplay = 0;
    silverDisplay = 1;
    silverCounter = 3;

    $("#shirt1").addClass("active");
    $("#shirt2").removeClass("active");
    $("#character-image").replaceWith('<img id="character-image" src="images/Silver/NeutralSil1.png">');
    $("#character-name").replaceWith('<h1 id="character-name">Silver</h1>');
    $("#character-icon1").addClass("active");
    $("#character-icon2").removeClass("active");
    document.documentElement.style.setProperty('--silver-silver', '#c3d4e1');
    document.documentElement.style.setProperty('--silver-brown', '#493e34');
    document.documentElement.style.setProperty('--silver-tan', '#e5ddd1');

    if (silverDisplay == 1 && jesseDisplay == 0) {
        $("#shirt2").on("click", silverShirt2Toggle);
    }
    if (silverDisplay == 1 && jesseDisplay == 0) {
    $("#shirt1").on("click", silverShirt1Toggle);
    }
});

if (silverDisplay == 1 && jesseDisplay == 0) {
    $("#shirt2").on("click", silverShirt2Toggle);
}
if (silverDisplay == 1 && jesseDisplay == 0) {
$("#shirt1").on("click", silverShirt1Toggle);
}

function silverShirt1Toggle(){

    if (silverCounter == 1 && silverShirt == 1) {$("#character-image").replaceWith('<img id="character-image" src="images/Silver/VUpsetSil0.png">'); silverShirt = 0; $("#shirt1").removeClass("active"); console.log("1-0");}
    else if (silverCounter == 1 && silverShirt == 0 || silverCounter == 1 && silverShirt == 2) {$("#character-image").replaceWith('<img id="character-image" src="images/Silver/VUpsetSil1.png">'); silverShirt = 1; $("#shirt1").addClass("active"); $("#shirt2").removeClass("active"); console.log("1-1");}

    else if (silverCounter == 2 && silverShirt == 1) {$("#character-image").replaceWith('<img id="character-image" src="images/Silver/UpsetSil0.png">'); silverShirt = 0; $("#shirt1").removeClass("active"); console.log("2-0");}
    else if (silverCounter == 2 && silverShirt == 0 ||silverCounter == 2 &&  silverShirt == 2) {$("#character-image").replaceWith('<img id="character-image" src="images/Silver/UpsetSil1.png">'); silverShirt = 1; $("#shirt1").addClass("active"); $("#shirt2").removeClass("active"); console.log("2-1");}

    else if (silverCounter == 3 && silverShirt == 1) {$("#character-image").replaceWith('<img id="character-image" src="images/Silver/NeutralSil0.png">'); silverShirt = 0; $("#shirt1").removeClass("active"); console.log("3-0");}
    else if (silverCounter == 3 && silverShirt == 0 || silverCounter == 3 && silverShirt == 2) {$("#character-image").replaceWith('<img id="character-image" src="images/Silver/NeutralSil1.png">'); silverShirt = 1; $("#shirt1").addClass("active"); $("#shirt2").removeClass("active"); console.log("3-1");}
    
    else if (silverCounter == 4 && silverShirt == 1) {$("#character-image").replaceWith('<img id="character-image" src="images/Silver/HappySil0.png">'); silverShirt = 0; $("#shirt1").removeClass("active"); console.log("2-0");}
    else if (silverCounter == 4 && silverShirt == 0 || silverCounter == 4 && silverShirt == 2) {$("#character-image").replaceWith('<img id="character-image" src="images/Silver/HappySil1.png">'); silverShirt = 1; $("#shirt1").addClass("active"); $("#shirt2").removeClass("active"); console.log("4-1");}

    else if (silverCounter == 5 && silverShirt == 1) {$("#character-image").replaceWith('<img id="character-image" src="images/Silver/VHappySil0.png">'); silverShirt = 0; $("#shirt1").removeClass("active"); console.log("3-0");}
    else if (silverCounter == 5 && silverShirt == 0 || silverCounter == 5 && silverShirt == 2) {$("#character-image").replaceWith('<img id="character-image" src="images/Silver/VHappySil1.png">'); silverShirt = 1; $("#shirt1").addClass("active"); $("#shirt2").removeClass("active"); console.log("5-1");}

}

function silverShirt2Toggle(){

    if (silverCounter == 1 && silverShirt == 2) {$("#character-image").replaceWith('<img id="character-image" src="images/Silver/VUpsetSil0.png">'); silverShirt = 0; $("#shirt2").removeClass("active"); console.log("1-0");}
    else if (silverCounter == 1 && silverShirt == 0 || silverCounter == 1 && silverShirt == 1) {$("#character-image").replaceWith('<img id="character-image" src="images/Silver/VUpsetSil2.png">'); silverShirt = 2; $("#shirt2").addClass("active"); $("#shirt1").removeClass("active"); console.log("1-2");}

    else if (silverCounter == 2 && silverShirt == 2) {$("#character-image").replaceWith('<img id="character-image" src="images/Silver/UpsetSil0.png">'); silverShirt = 0; $("#shirt2").removeClass("active"); console.log("2-0");}
    else if (silverCounter == 2 && silverShirt == 0 ||silverCounter == 2 &&  silverShirt == 1) {$("#character-image").replaceWith('<img id="character-image" src="images/Silver/UpsetSil2.png">'); silverShirt = 2; $("#shirt2").addClass("active"); $("#shirt1").removeClass("active"); console.log("2-2");}

    else if (silverCounter == 3 && silverShirt == 2) {$("#character-image").replaceWith('<img id="character-image" src="images/Silver/NeutralSil0.png">'); silverShirt = 0; $("#shirt2").removeClass("active"); console.log("3-0");}
    else if (silverCounter == 3 && silverShirt == 0 || silverCounter == 3 && silverShirt == 1) {$("#character-image").replaceWith('<img id="character-image" src="images/Silver/NeutralSil2.png">'); silverShirt = 2; $("#shirt2").addClass("active"); $("#shirt1").removeClass("active"); console.log("3-2");}
    
    else if (silverCounter == 4 && silverShirt == 2) {$("#character-image").replaceWith('<img id="character-image" src="images/Silver/HappySil0.png">'); silverShirt = 0; $("#shirt2").removeClass("active"); console.log("2-0");}
    else if (silverCounter == 4 && silverShirt == 0 || silverCounter == 4 && silverShirt == 1) {$("#character-image").replaceWith('<img id="character-image" src="images/Silver/HappySil2.png">'); silverShirt = 2; $("#shirt2").addClass("active"); $("#shirt1").removeClass("active"); console.log("4-2");}

    else if (silverCounter == 5 && silverShirt == 2) {$("#character-image").replaceWith('<img id="character-image" src="images/Silver/VHappySil0.png">'); silverShirt = 0; $("#shirt2").removeClass("active"); console.log("3-0");}
    else if (silverCounter == 5 && silverShirt == 0 || silverCounter == 5 && silverShirt == 1) {$("#character-image").replaceWith('<img id="character-image" src="images/Silver/VHappySil2.png">'); silverShirt = 2; $("#shirt2").addClass("active"); $("#shirt1").removeClass("active"); console.log("5-2");}

}

function silverToggle(){

    if (silverCounter <= 1 && silverShirt == 2) {$("#character-image").replaceWith('<img id="character-image" src="images/Silver/VUpsetSil2.png">');}
    else if (silverCounter <= 1 && silverShirt == 1) {$("#character-image").replaceWith('<img id="character-image" src="images/Silver/VUpsetSil1.png">');}
    else if (silverCounter <= 1 && silverShirt == 0) {$("#character-image").replaceWith('<img id="character-image" src="images/Silver/VUpsetSil0.png">');}

    else if (silverCounter == 2 && silverShirt == 2) {$("#character-image").replaceWith('<img id="character-image" src="images/Silver/UpsetSil2.png">');}
    else if (silverCounter == 2 && silverShirt == 1) {$("#character-image").replaceWith('<img id="character-image" src="images/Silver/UpsetSil1.png">');}
    else if (silverCounter == 2 && silverShirt == 0) {$("#character-image").replaceWith('<img id="character-image" src="images/Silver/UpsetSil0.png">');}

    else if (silverCounter == 3 && silverShirt == 2) {$("#character-image").replaceWith('<img id="character-image" src="images/Silver/NeutralSil2.png">');}
    else if (silverCounter == 3 && silverShirt == 1) {$("#character-image").replaceWith('<img id="character-image" src="images/Silver/NeutralSil1.png">');}
    else if (silverCounter == 3 && silverShirt == 0) {$("#character-image").replaceWith('<img id="character-image" src="images/Silver/NeutralSil0.png">');}
    
    else if (silverCounter == 4 && silverShirt == 2) {$("#character-image").replaceWith('<img id="character-image" src="images/Silver/HappySil2.png">');}
    else if (silverCounter == 4 && silverShirt == 1) {$("#character-image").replaceWith('<img id="character-image" src="images/Silver/HappySil1.png">');}
    else if (silverCounter == 4 && silverShirt == 0) {$("#character-image").replaceWith('<img id="character-image" src="images/Silver/HappySil0.png">');}

    else if (silverCounter >= 5 && silverShirt == 2) {$("#character-image").replaceWith('<img id="character-image" src="images/Silver/VHappySil2.png">');}
    else if (silverCounter >= 5 && silverShirt == 1) {$("#character-image").replaceWith('<img id="character-image" src="images/Silver/VHappySil1.png">');}
    else if (silverCounter >= 5 && silverShirt == 0) {$("#character-image").replaceWith('<img id="character-image" src="images/Silver/VHappySil0.png">');}

}

function jesseShirt1Toggle(){

    if (jesseCounter == 1 && jesseShirt == 1) {$("#character-image").replaceWith('<img id="character-image" src="images/Jesse/VUpsetJess0.png">'); jesseShirt = 0; $("#shirt1").removeClass("active"); console.log("1-0");}
    else if (jesseCounter == 1 && jesseShirt == 0 || jesseCounter == 1 && jesseShirt == 2) {$("#character-image").replaceWith('<img id="character-image" src="images/Jesse/VUpsetJess1.png">'); jesseShirt = 1; $("#shirt1").addClass("active"); $("#shirt2").removeClass("active"); console.log("1-1");}

    else if (jesseCounter == 2 && jesseShirt == 1) {$("#character-image").replaceWith('<img id="character-image" src="images/Jesse/UpsetJess0.png">'); jesseShirt = 0; $("#shirt1").removeClass("active"); console.log("2-0");}
    else if (jesseCounter == 2 && jesseShirt == 0 || jesseCounter == 2 && jesseShirt == 2) {$("#character-image").replaceWith('<img id="character-image" src="images/Jesse/UpsetJess1.png">'); jesseShirt = 1; $("#shirt1").addClass("active"); $("#shirt2").removeClass("active"); console.log("2-1");}

    else if (jesseCounter == 3 && jesseShirt == 1) {$("#character-image").replaceWith('<img id="character-image" src="images/Jesse/NeutralJess0.png">'); jesseShirt = 0; $("#shirt1").removeClass("active"); console.log("3-0");}
    else if (jesseCounter == 3 && jesseShirt == 0 || jesseCounter == 3 && jesseShirt == 2) {$("#character-image").replaceWith('<img id="character-image" src="images/Jesse/NeutralJess1.png">'); jesseShirt = 1; $("#shirt1").addClass("active"); $("#shirt2").removeClass("active"); console.log("3-1");}
    
    else if (jesseCounter == 4 && jesseShirt == 1) {$("#character-image").replaceWith('<img id="character-image" src="images/Jesse/HappyJess0.png">'); jesseShirt = 0; $("#shirt1").removeClass("active"); console.log("2-0");}
    else if (jesseCounter == 4 && jesseShirt == 0 || jesseCounter == 4 && jesseShirt == 2) {$("#character-image").replaceWith('<img id="character-image" src="images/Jesse/HappyJess1.png">'); jesseShirt = 1; $("#shirt1").addClass("active"); $("#shirt2").removeClass("active"); console.log("4-1");}

    else if (jesseCounter == 5 && jesseShirt == 1) {$("#character-image").replaceWith('<img id="character-image" src="images/Jesse/VHappyJess0.png">'); jesseShirt = 0; $("#shirt1").removeClass("active"); console.log("3-0");}
    else if (jesseCounter == 5 && jesseShirt == 0 || jesseCounter == 5 && jesseShirt == 2) {$("#character-image").replaceWith('<img id="character-image" src="images/Jesse/VHappyJess1.png">'); jesseShirt = 1; $("#shirt1").addClass("active"); $("#shirt2").removeClass("active"); console.log("5-1");}

}

function jesseShirt2Toggle(){

    if (jesseCounter <= 1 && jesseShirt == 2) {$("#character-image").replaceWith('<img id="character-image" src="images/Jesse/VUpsetJess0.png">'); jesseShirt = 0; $("#shirt2").removeClass("active"); console.log("1-0");}
    else if (jesseCounter <= 1 && jesseShirt == 0 || jesseCounter <= 1 && jesseShirt == 1) {$("#character-image").replaceWith('<img id="character-image" src="images/Jesse/VUpsetJess2.png">'); jesseShirt = 2; $("#shirt2").addClass("active"); $("#shirt1").removeClass("active"); console.log("1-2");}

    else if (jesseCounter == 2 && jesseShirt == 2) {$("#character-image").replaceWith('<img id="character-image" src="images/Jesse/UpsetJess0.png">'); jesseShirt = 0; $("#shirt2").removeClass("active"); console.log("2-0");}
    else if (jesseCounter == 2 && jesseShirt == 0 || jesseCounter == 2 && jesseShirt == 1) {$("#character-image").replaceWith('<img id="character-image" src="images/Jesse/UpsetJess2.png">'); jesseShirt = 2; $("#shirt2").addClass("active"); $("#shirt1").removeClass("active"); console.log("2-2");}

    else if (jesseCounter == 3 && jesseShirt == 2) {$("#character-image").replaceWith('<img id="character-image" src="images/Jesse/NeutralJess0.png">'); jesseShirt = 0; $("#shirt2").removeClass("active"); console.log("3-0");}
    else if (jesseCounter == 3 && jesseShirt == 0 || jesseCounter == 3 && jesseShirt == 1) {$("#character-image").replaceWith('<img id="character-image" src="images/Jesse/NeutralJess2.png">'); jesseShirt = 2; $("#shirt2").addClass("active"); $("#shirt1").removeClass("active"); console.log("3-2");}
    
    else if (jesseCounter == 4 && jesseShirt == 2) {$("#character-image").replaceWith('<img id="character-image" src="images/Jesse/HappyJess0.png">'); jesseShirt = 0; $("#shirt2").removeClass("active"); console.log("2-0");}
    else if (jesseCounter == 4 && jesseShirt == 0 || jesseCounter == 4 && jesseShirt == 1) {$("#character-image").replaceWith('<img id="character-image" src="images/Jesse/HappyJess2.png">'); jesseShirt = 2; $("#shirt2").addClass("active"); $("#shirt1").removeClass("active"); console.log("4-2");}

    else if (jesseCounter >= 5 && jesseShirt == 2) {$("#character-image").replaceWith('<img id="character-image" src="images/Jesse/VHappyJess0.png">'); jesseShirt = 0; $("#shirt2").removeClass("active"); console.log("3-0");}
    else if (jesseCounter >= 5 && jesseShirt == 0 || jesseCounter >= 5 && jesseShirt == 1) {$("#character-image").replaceWith('<img id="character-image" src="images/Jesse/VHappyJess2.png">'); jesseShirt = 2; $("#shirt2").addClass("active"); $("#shirt1").removeClass("active"); console.log("5-2");}

}

function jesseToggle(){

    if (jesseCounter <= 1 && jesseShirt == 2) {$("#character-image").replaceWith('<img id="character-image" src="images/Jesse/VUpsetJess2.png">');}
    else if (jesseCounter <= 1 && jesseShirt == 1) {$("#character-image").replaceWith('<img id="character-image" src="images/Jesse/VUpsetJess1.png">');}
    else if (jesseCounter <= 1 && jesseShirt == 0) {$("#character-image").replaceWith('<img id="character-image" src="images/Jesse/VUpsetJess0.png">');}

    else if (jesseCounter == 2 && jesseShirt == 2) {$("#character-image").replaceWith('<img id="character-image" src="images/Jesse/UpsetJess2.png">');}
    else if (jesseCounter == 2 && jesseShirt == 1) {$("#character-image").replaceWith('<img id="character-image" src="images/Jesse/UpsetJess1.png">');}
    else if (jesseCounter == 2 && jesseShirt == 0) {$("#character-image").replaceWith('<img id="character-image" src="images/Jesse/UpsetJess0.png">');}

    else if (jesseCounter == 3 && jesseShirt == 2) {$("#character-image").replaceWith('<img id="character-image" src="images/Jesse/NeutralJess2.png">');}
    else if (jesseCounter == 3 && jesseShirt == 1) {$("#character-image").replaceWith('<img id="character-image" src="images/Jesse/NeutralJess1.png">');}
    else if (jesseCounter == 3 && jesseShirt == 0) {$("#character-image").replaceWith('<img id="character-image" src="images/Jesse/NeutralJess0.png">');}
    
    else if (jesseCounter == 4 && jesseShirt == 2) {$("#character-image").replaceWith('<img id="character-image" src="images/Jesse/HappyJess2.png">');}
    else if (jesseCounter == 4 && jesseShirt == 1) {$("#character-image").replaceWith('<img id="character-image" src="images/Jesse/HappyJess1.png">');}
    else if (jesseCounter == 4 && jesseShirt == 0) {$("#character-image").replaceWith('<img id="character-image" src="images/Jesse/HappyJess0.png">');}

    else if (jesseCounter >= 5 && jesseShirt == 2) {$("#character-image").replaceWith('<img id="character-image" src="images/Jesse/VHappyJess2.png">');}
    else if (jesseCounter >= 5 && jesseShirt == 1) {$("#character-image").replaceWith('<img id="character-image" src="images/Jesse/VHappyJess1.png">');}
    else if (jesseCounter >= 5 && jesseShirt == 0) {$("#character-image").replaceWith('<img id="character-image" src="images/Jesse/VHappyJess0.png">');}

}

$("#coffee").on("click", function() {
    if(silverDisplay == 1 && jesseDisplay == 0){silverCounter--; silverToggle();}
    if(jesseDisplay == 1 && silverDisplay == 0){jesseCounter++; jesseToggle();}
});

$("#tea").on("click", function() {
    if(silverDisplay == 1 && jesseDisplay == 0){silverCounter++; silverToggle();}
    if(jesseDisplay == 1 && silverDisplay == 0){jesseCounter--; jesseToggle();}
});

$("#cactus").on("click", function() {
    if(silverDisplay == 1 && jesseDisplay == 0){silverCounter++; silverToggle();}
    if(jesseDisplay == 1 && silverDisplay == 0){jesseCounter--; jesseToggle();}
});

$("#rose").on("click", function() {
    if(silverDisplay == 1 && jesseDisplay == 0){silverCounter++; silverToggle();}
    if(jesseDisplay == 1 && silverDisplay == 0){jesseCounter++; jesseToggle();}
});

$("#chips").on("click", function() {
    if(silverDisplay == 1 && jesseDisplay == 0){silverCounter++; silverToggle();}
    if(jesseDisplay == 1 && silverDisplay == 0){jesseCounter++; jesseToggle();}
});

$("#pickles").on("click", function() {
    if(silverDisplay == 1 && jesseDisplay == 0){silverCounter--; silverToggle();}
    if(jesseDisplay == 1 && silverDisplay == 0){jesseCounter++; jesseToggle();}
});