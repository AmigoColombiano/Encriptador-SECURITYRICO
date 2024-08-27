// SELECCION DE ELEMENTOS 

const btnEncriptar = document.querySelector(".btn-encriptar");
const txtEncriptar = document.querySelector(".encriptar");
const aviso = document.querySelector(".texto-aviso");
const respuesta = document.querySelector(".evaluar");
const contenido = document.querySelector(".tarjeta-contenedor");
const btnCopiar = document.querySelector(".btn-copiar");
const btnDesencriptar= document.querySelector(".btn-desencriptar");


// BOTON DE ENCRIPTAR

btnEncriptar.addEventListener("click",e=>{
    e.preventDefault();
    let texto = txtEncriptar.value;
    let txt = texto.normalize("NFD")
               .replace(/[\u0300-\u036f]/g, "") // Elimina los acentos
               .replace(/[^a-zA-Z0-9\s]/g, "") // Elimina símbolos especiales y deja letras, números y espacios
               .replace(/\s+/g, ""); // Elimina los espacios en blanco
    // console.log(txt);

    if (texto == ""){
        aviso.style.background = "#0A3871";
        aviso.style.color= "#FFFFFF";
        aviso.style.fontWeight = "800";
        aviso.textContent = "El Campo De Texto No Debe Estar Vacio";

        setTimeout(()=>{
            aviso.removeAttribute("style");
        },1500)
    }
    else if (texto !== txt){
            aviso.style.background = "#0A3871";
            aviso.style.color= "#FFFFFF";
            aviso.style.fontWeight = "800";
            aviso.textContent = "No Debe Tener Acentos Ni Caracteres Especiales";

            setTimeout(()=>{
                aviso.removeAttribute("style");
            },1500)
        }
        else if (texto !== texto.toLowerCase()){
                aviso.style.background = "#0A3871";
                aviso.style.color= "#FFFFFF";
                aviso.style.fontWeight = "800";
                aviso.textContent = "El Texto Debe Ser Todo En Minúscula";

                setTimeout(()=>{
                    aviso.removeAttribute("style");
                },1500)      
            }
            else{
                texto = texto.replace(/e/mg, "enter");
                texto = texto.replace(/i/mg, "imes");
                texto = texto.replace(/a/mg, "ai");
                texto = texto.replace(/o/mg, "ober");
                texto = texto.replace(/u/mg, "ufat");
                // console.log(texto);
                respuesta.innerHTML = texto;
                btnCopiar.style.visibility = "inherit";
                contenido.remove();
            }
})

// BOTON DE DESENCRIPTAR

btnDesencriptar.addEventListener("click",e=>{
    e.preventDefault();
    let texto = txtEncriptar.value;
    let txt = texto.normalize("NFD")
               .replace(/[\u0300-\u036f]/g, "") // Elimina los acentos
               .replace(/[^a-zA-Z0-9\s]/g, "") // Elimina símbolos especiales y deja letras, números y espacios
               .replace(/\s+/g, ""); // Elimina los espacios en blanco
    // console.log(txt);

    if (texto == ""){
        aviso.style.background = "#0A3871";
        aviso.style.color= "#FFFFFF";
        aviso.style.fontWeight = "800";
        aviso.textContent = "El Campo De Texto No Debe Estar Vacio";

        setTimeout(()=>{
            aviso.removeAttribute("style");
        },1500)
    }
    else if (texto !== txt){
            aviso.style.background = "#0A3871";
            aviso.style.color= "#FFFFFF";
            aviso.style.fontWeight = "800";
            aviso.textContent = "No Debe Tener Acentos Ni Caracteres Especiales";

            setTimeout(()=>{
                aviso.removeAttribute("style");
            },1500)
        }
        else if (texto !== texto.toLowerCase()){
                aviso.style.background = "#0A3871";
                aviso.style.color= "#FFFFFF";
                aviso.style.fontWeight = "800";
                aviso.textContent = "El Texto Debe Ser Todo En Minúscula";

                setTimeout(()=>{
                    aviso.removeAttribute("style");
                },1500)      
            }
            else{
                texto = texto.replace(/enter/mg, "e");
                texto = texto.replace(/imes/mg, "i");
                texto = texto.replace(/ai/mg, "a");
                texto = texto.replace(/ober/mg, "o");
                texto = texto.replace(/ufat/mg, "u");
                // console.log(texto);
                respuesta.innerHTML = texto;
                btnCopiar.style.visibility = "inherit";
                contenido.remove();
            }
})

// BOTON DE COPIAR

btnCopiar.addEventListener("click",e=>{
    e.preventDefault();
    let copiar = respuesta;
    copiar.select();
    document.execCommand("copy")
});
