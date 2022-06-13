const robotron = document.querySelector("#robotron");
const controle = document.querySelectorAll(".controle-ajuste");
const estatistica = document.querySelectorAll("[data-estatistica]");


const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos":{
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas":{
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes":{
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}



controle.forEach((element) => {
  element.addEventListener("click", (event) => {
    manipulaDados(event.target.dataset.controle, event.target.parentNode);
    
    atualizaEstatisticas(event.target.dataset.peca);
  });
});

function manipulaDados(operacao, controle) {
  let peca = controle.querySelector("[data-contador]");


  if (operacao === "+") {
    peca.value = parseInt(peca.value) + 1;
  } else if (operacao === "-") {
    if (peca.value > 0) {
      peca.value = parseInt(peca.value) - 1;
    } else {
      alert("Não é possível subtrair mais do que zero");
    }
  }
  return peca;
}


function atualizaEstatisticas(peca) {
//actualize the stats of each piece of the robotron
    estatistica.forEach((element) => {
       element.textContent= parseInt(element.textContent) + pecas[peca][element.dataset.estatistica];
       
        
        
    })
   
};
