/*
function exe1a(){

const aPrimeiroNumero = Number(prompt("Informe o primeiro número"));
const aSegundoNumero = Number(prompt("Informe outro número, diferente do primeiro"))

if(aPrimeiroNumero === aSegundoNumero) {
  console.log ("Erro. É preciso inserir números diferentes.")
} else if(aPrimeiroNumero > aSegundoNumero) {
  console.log (aPrimeiroNumero);
  console.log (aSegundoNumero);
} else if(aPrimeiroNumero < aSegundoNumero) {
  console.log (aSegundoNumero);
  console.log (aPrimeiroNumero);
}

}
exe1a();
*/

function exe1b(){

    const bPrimeiroNumero = Number(prompt("Informe o primeiro número"));
    const bSegundoNumero = Number(prompt("Informe um número diferente do anterior."))
    const bTerceiroNumero = Number(prompt("Informe mais um número, diferente dos outros."))
    
    if(bPrimeiroNumero === bSegundoNumero) { 
      console.log ("Erro. É preciso inserir números diferentes.")
    } else if(bPrimeiroNumero === bTerceiroNumero) {
      console.log ("Erro. É preciso inserir números diferentes.")
    } else if(bSegundoNumero === bTerceiroNumero) {
      console.log ("Erro. É preciso inserir números diferentes.")
    
    } else if(bPrimeiroNumero > bSegundoNumero) {
      if(bPrimeiroNumero > bTerceiroNumero) {
        if(bSegundoNumero > bTerceiroNumero) {
          console.log (bPrimeiroNumero);
          console.log (bSegundoNumero);
          console.log (bTerceiroNumero);
        } else {
          console.log (bPrimeiroNumero);
          console.log (bTerceiroNumero);
          console.log (bSegundoNumero);
        }
      }
    } else if(bSegundoNumero > bPrimeiroNumero) {
      if(bSegundoNumero > bTerceiroNumero) {
        if(bPrimeiroNumero > bTerceiroNumero) {
          console.log (bSegundoNumero);
          console.log (bPrimeiroNumero);
          console.log (bTerceiroNumero);
        } else {
          console.log (bSegundoNumero);
          console.log (bTerceiroNumero);
          console.log (bPrimeiroNumero);
        }
      }
    } else if(bTerceiroNumero > bPrimeiroNumero) {
      if(bTerceiroNumero > bSegundoNumero) {
        if(bPrimeiroNumero > bSegundoNumero) {
          console.log (bTerceiroNumero);
          console.log (bPrimeiroNumero);
          console.log (bSegundoNumero);
        } else {
          console.log (bTerceiroNumero);
          console.log (bSegundoNumero);
          console.log (bPrimeiroNumero);
        }
      }
    }
    
    }
    exe1b();
    