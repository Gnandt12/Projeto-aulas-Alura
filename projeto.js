function encriptar() {
    let texto = document.getElementById("texto").value;
    let tituloMensagem = document.getElementById("titulo-mensagem");
    let paragrafo = document.getElementById("paragrafo");
    let procurandotexto = document.getElementById("procurandotexto");
  
    let textoCifrado = texto
      .replace(/e/gi, "enter")
      .replace(/i/gi, "imes")
      .replace(/a/gi, "ai")
      .replace(/o/gi, "ober")
      .replace(/u/gi, "ufat");
  
    if (texto.length != 0) {
      document.getElementById("texto").value = textoCifrado;
      tituloMensagem.textContent = "Texto encriptado com sucesso";
      paragrafo.textContent = "";
      procurandotexto.src = "encriptado.jpg";
    } else {
      procurandotexto.src = "procurandotexto.jpeg";
      tituloMensagem.textContent = "Nenhuma mensagem foi encontrada";
      paragrafo.textContent = "Digite o texto que deseja encriptar ou desencriptar";
      swal=("Ooops!", "Debes ingresar un texto", "warning");
    }
  }
  
  function desencriptar() {
    let texto = document.getElementById("texto").value;
    let tituloMensagem = document.getElementById("titulo-mensagem");
    let paragrafo = document.getElementById("paragrafo");
    let procurandotexto = document.getElementById("procurandotexto");
  
    let textoCifrado = texto
      .replace(/enter/gi, "e")
      .replace(/imes/gi, "i")
      .replace(/ai/gi, "a")
      .replace(/ober/gi, "o")
      .replace(/ufat/gi, "u");
    
      if (texto.length != 0) {
        document.getElementById("texto").value = textoCifrado;
        tituloMensagem.textContent = "Texto desencriptado com sucesso";
        paragrafo.textContent = "";
        procurandotexto.src = "desencriptado.jpg";
      } else {
        procurandotexto.src = "procurandotexto.jpeg";
        tituloMensagem.textContent = "Nenhuma mensagem foi encontrada";
        paragrafo.textContent = "Digite o texto que deseja encriptar ou desencriptar";
      }}