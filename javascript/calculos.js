const mensaje = (mensaje) => document.getElementById("textResultado").value = mensaje;

function calcularMultiplicacion(){
    let primerNumero = parseInt(document.getElementById("numero1").value);  
    let segundoNumero = parseInt(document.getElementById("numero2").value);
    let resultado = primerNumero * segundoNumero
    mensaje(`el resultado de la multiplicacion es: ${resultado}`);
}

function calcularSuma(){
    let primerNumero = parseInt(document.getElementById("numero1").value);  
    let segundoNumero = parseInt(document.getElementById("numero2").value);
    let resultado = primerNumero + segundoNumero
    mensaje(`el resultado de la suma es: ${resultado}`);
}

function calcularResta(){
     let primerNumero = parseInt(document.getElementById("numero1").value);  
     let segundoNumero = parseInt(document.getElementById("numero2").value);
     let resultado = primerNumero + segundoNumero
     mensaje(`el resultado de la resta es: ${resultado}`);
}

function calcularDivision(){
     let primerNumero = parseInt(document.getElementById("numero1").value);  
     let segundoNumero = parseInt(document.getElementById("numero2").value);
     if(segundoNumero != 0){
          let resultado = primerNumero / segundoNumero
          mensaje(`el resultado de la suma es: ${resultado}`);
     }else{
          mensaje(`no se puede dividir por ${segundoNumero}`);
     };
 }