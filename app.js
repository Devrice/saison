const input = document.getElementById("input");
console.log(input);

input.addEventListener ("change", () => {
    var valinput = input.value;
    console.log(valinput);

    var date = new Date(valinput);
    var mois = date.getMonth()+1;
    var jour = date.getDate();
    

    if(mois == 1){
        console.log('Hiver');
    }

    if(mois == 2){
        console.log('Hiver');
    }

    if(mois == 3){
        console.log('Spring');
    }

    if(mois == 4){
        console.log('Spring');
    }

    if(mois == 5){
        console.log('Spring');
    }

    if(mois == 6){
        console.log('Summer');
    }

    if(mois == 7){
        console.log('Summer');
    }

    if(mois == 8){
        console.log('Summer');
    }

    if(mois == 9){
        console.log('Fall');
    }

    if(mois == 10){
        console.log('Fall');
    }

    if(mois == 11){
        console.log('Fall');
    }

    if(mois == 12 && jour <= 21){
        console.log('Fall');
    }
    else{
        console.log('Hiver')
    }

})