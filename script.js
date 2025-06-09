var dp = "";

function bot1() {

    dp = dp + "1";
    console.log(dp);
    document.getElementById("display").innerHTML= dp;

}

function bot2() {

    dp = dp + "2";
    console.log(dp);
    document.getElementById("display").innerHTML= dp;

}

function bot3() {

    dp = dp + "3";
    console.log(dp);
    document.getElementById("display").innerHTML= dp;

}

function bot4() {

    dp = dp + "4";
    console.log(dp);
    document.getElementById("display").innerHTML= dp;

}

function bot5() {

    dp = dp + "5";
    console.log(dp);
    document.getElementById("display").innerHTML= dp;

}

function bot6() {

    dp = dp + "6";
    console.log(dp);
    document.getElementById("display").innerHTML= dp;

}

function bot7() {

    dp = dp + "7";
    console.log(dp);
    document.getElementById("display").innerHTML= dp;

}

function bot8() {

    dp = dp + "8";
    console.log(dp);
    document.getElementById("display").innerHTML= dp;

}

function bot9() {

    dp = dp + "9";
    console.log(dp);
    document.getElementById("display").innerHTML= dp;

}

function bot0() {

    dp = dp + "0";
    console.log(dp);
    document.getElementById("display").innerHTML= dp;

}

function botmais() {

    dp = dp + "+";
    console.log(dp);
    document.getElementById("display").innerHTML= dp;

}

function botmenos() {

    dp = dp + "-";
    console.log(dp);
    document.getElementById("display").innerHTML= dp;

}

function botdiv() {

    dp = dp + "/";
    console.log(dp);
    document.getElementById("display").innerHTML= dp;

}

function botmult() {

    dp = dp + "*";
    console.log(dp);
    document.getElementById("display").innerHTML= dp;

}

function botigual() {

    dp = dp + ".0"
    dp = eval(dp);
    console.log(dp);
    
    if (dp == Infinity || dp == undefined) {
        
        document.getElementById("display").innerHTML= "erro";
        setTimeout(botC, 500);
        console.log("erro");
        
    }else {
        
        document.getElementById("display").innerHTML= dp;
        console.log("certo");
    }

}

function botC() {

    dp = "";
    console.log(dp);
    document.getElementById("display").innerHTML= dp;

}
