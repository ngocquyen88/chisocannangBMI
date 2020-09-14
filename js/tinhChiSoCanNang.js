function tinhBMI(){
    let cao = parseFloat(document.getElementById("chieucao").value);
    let nang = parseFloat(document.getElementById("cannang").value);
    let bmi=nang/(cao*cao);
    alert(bmi);
    if(bmi<18){
        document.getElementById("display").innerHTML="Underweight!";
    }
    else if(bmi<25.0){
        document.getElementById("display").innerHTML="Normal!";
    }
    else if(bmi<30.0){
        document.getElementById("display").innerHTML="Overweight!";
    }
    else
    {
        document.getElementById("display").innerHTML="Obeve!";
    }
}

