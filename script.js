function encriptar(){
document.getElementById('cont-BtnCopiar').style.display = 'block';
document.getElementById('btn-Copiar').style.display = 'block';
document.getElementById('imgMuñeco').style.display='none';
document.getElementById('txtAviso').style.display='none';
document.getElementById('txtResultado').style.display='block';
 let str=document.querySelector('#TextoOriginal').value;
 const resultado = str.replaceAll("e","enter");
 const str1 = resultado;
 const resultado2 = str1.replaceAll("i","imes");
 const str2 = resultado2
 const resultado3 = str2.replaceAll("a","ai");
 const str3 = resultado3
 const resultado4 = str3.replaceAll("o","ober");
 const str4 = resultado4
 const resultado5 = str4.replaceAll("u","ufat");
 console.log(resultado5);
 document.querySelector('#ResultProcess').innerHTML=resultado5;
}

function desecriptar(){
document.getElementById('cont-BtnCopiar').style.display = 'block';
document.getElementById('btn-Copiar').style.display = 'block';
document.getElementById('imgMuñeco').style.display='none';
document.getElementById('txtAviso').style.display='none';
document.getElementById('txtResultado').style.display='block';
 let str=document.querySelector('#TextoOriginal').value;
 const resultado = str.replaceAll("enter","e");
 const str1 = resultado;
 const resultado2 = str1.replaceAll("imes","i");
 const str2 = resultado2
 const resultado3 = str2.replaceAll("ai","a");
 const str3 = resultado3
 const resultado4 = str3.replaceAll("ober","o");
 const str4 = resultado4
 const resultado5 = str4.replaceAll("ufat","u");
 console.log(resultado5);
 document.querySelector('#ResultProcess').innerHTML=resultado5;
}

const button= document.getElementById('btn-Copiar');
const msj=document.getElementById('ResultProcess');

const copiar = async mst =>{
    try{
        await navigator.clipboard.writeText(mst);
        console.log("copiado");
    } catch (error){
        console.log(error);
    }
};

button.addEventListener("click",() =>{
    copiar(ResultProcess.textContent);
});
