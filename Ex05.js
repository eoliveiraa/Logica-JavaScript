function removeEspacosRepetidos(frase) {
   
    let palavras = frase.split(" ");
  

    let palavrasFiltradas = palavras.filter(palavra => palavra !== "");
  
    
    let fraseFinal = palavrasFiltradas.join(" ");
  
    return fraseFinal;
  }
  

  let fraseOriginal = "   chocolate   eh    bom";
  let fraseCorrigida = removeEspacosRepetidos(fraseOriginal);
  
  console.log(fraseCorrigida); 

  //join = retorna nova string
  