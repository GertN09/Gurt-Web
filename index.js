
document.getElementById("Berekenpyta").onclick = function(){

    a = document.getElementById("Pytagoa").value;
    a = Number(a);

    b = document.getElementById("Pytagob").value;
    b = Number(b)


    c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));

    document.getElementById("Letterc").innerHTML = "Zijde C: " + c;
}

    document.getElementById("Knopkwad").onclick = function(){

    d = document.getElementById("Kwad").value;
    

    e = d * d
   
    console.log(e);





    document.getElementById("Antkwad").innerHTML = "Het kwadraat van " + d +  " is " + e;
    }



document.getElementById("Knopwortle").onclick = function(){



    f = document.getElementById("Wort").value;
    
    f = Number(f);

    h = Math.sqrt(f);

    h = Number(h);
   
    console.log(h);




    document.getElementById("Antwortle").innerHTML = "De wortel van " + f + " is " + h;

}

i = 0;

document.getElementById("minknop").onclick = function(){
    i-=1;
    document.getElementById("countlable").innerHTML = i;

}

document.getElementById("reset").onclick = function(){
    i=0;
    document.getElementById("countlable").innerHTML = i;
    
}
document.getElementById("plusknop").onclick = function(){
    i+=1;
    document.getElementById("countlable").innerHTML = i;
    
}

//j = Math.random() * 20 + 1;


