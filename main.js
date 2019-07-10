/*let unoRay='Hola ';
let dosRay='Ray';
console.log(unoRay+dosRay);
let arreglo=[1,2,3,4];
let objeto={dosRay:'Ray',unoRay:'Compañ'};
let objetoArreglo={data:[1,2,3]};
let arregloObjeto=[{dosRay:'Ray',unoRay:'Compañ'},{dosRay:'Scom',unoRay:'Ray'}];
let nombre=prompt('Ingresa tu nombre');
alert(unoRay+nombre);
let nombreMascota1='Pedrito';
let nombreMascota2='Rufo';
let nombreMascota3='Chancla';
console.log('Mis mascotas son '+nombreMascota1+', '+nombreMascota2+', '+nombreMascota3+'. Les quiero mucho.');
let nombreMascota4=prompt('Ingresa el nombre de tu mascota');
let nombreMascota5=prompt('Ingresa el nombre de tu otra mascota');
console.log('Quiero mucho a mis mascotas '+nombreMascota4+' y '+nombreMascota5+'.');
let cadenaTexto="100";
console.log(cadenaTexto);
console.log(typeof cadenaTexto);
cadenaTexto=parseInt(cadenaTexto);
console.log(typeof cadenaTexto);
console.log(cadenaTexto);
let texto=document.getElementById('caja');
texto.innerHTML='Hola mundo';
let nombre=document.getElementById('nombre');
nombre.innerHTML='Ray';
alert(nombre);
function sumar(n1,n2){
    n1=document.getElementById('n1').value;
    n2=document.getElementById('n2').value;
    let result=n1+n2;
    document.getElementById('op').innerHTML=result;
    return result;
};*/
let aleatorio=Math.round(Math.random()*100);
console.log(aleatorio);
function westTheNumber(){
    let num=Number(document.getElementById('number').value);
    if(num==aleatorio){
        document.getElementById('resultado').innerHTML='Los números son iguales!';
    }else{
    if(num>aleatorio){
        document.getElementById('resultado').innerHTML=num+' es mayor';
    }else{
        document.getElementById('resultado').innerHTML=num+' es menor';
    };
    };
};
