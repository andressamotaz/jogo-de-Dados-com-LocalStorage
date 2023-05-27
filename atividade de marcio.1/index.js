let reiniciar = [];
let jogada = 0;
let jogada1 = 0;
let jogada2 = 0;

function atualizarLocalStorage() {
    localStorage.setItem('jogada', jogada);
    localStorage.setItem('jogada1', jogada1);
    localStorage.setItem('jogada2', jogada2);
  }
  window.addEventListener('load', function() {
    if (localStorage.getItem('jogada') !== null) {
      jogada = JSON.parse(localStorage.getItem('jogada'));
    }
    if (localStorage.getItem('jogada1') !== null) {
      jogada1 = JSON.parse(localStorage.getItem('jogada1'));
      resultado1.innerHTML = `Pontos: <strong>${jogada1}</strong>`;
    }
    if (localStorage.getItem('jogada2') !== null) {
      jogada2 = JSON.parse(localStorage.getItem('jogada2'));
      resultado2.innerHTML = `Pontos: <strong>${jogada2}</strong>`;
    }
  });


let Btreiniciar = document.getElementById("bt");
let bt1 = document.getElementById("bt1");
let bt2 = document.getElementById("bt2");
let resultado1 = document.getElementById("res1");
let resultado2 = document.getElementById("res2");
let rodadas = document.getElementById("rodadas");
let vencedor = document.getElementById("vencedor");

//atribui valores para bt1 e bt2
bt1.addEventListener('click', function () {
  let numAleatorio = Math.floor(Math.random() * 6) + 1;
  resultado1.innerHTML = `Pontos :  <strong> ${(jogada1 +=
    numAleatorio)} <\strong> `;
  // jogada++;

  document.getElementById("bt1").textContent = numAleatorio;
  bt1.disabled = true;
  bt2.disabled = false;
  // campeao();
 atualizarLocalStorage()
});

bt2.addEventListener("click", function () {
  let numAleatorio = Math.floor(Math.random() * 6) + 1;
  resultado2.innerHTML = `Pontos :  <strong> ${(jogada2 +=
    numAleatorio)} <\strong> `;
  jogada++;

  document.getElementById("bt2").textContent = numAleatorio;
  bt1.disabled = false;
  bt2.disabled = true;
  campeao();
atualizarLocalStorage()
});

let objetos = {
  bt: Btreiniciar,
  bt1: bt1,
  bt2: bt2,
  res1: resultado1,
  res2: resultado2,
};
reiniciar.push(objetos);

//limpar
Btreiniciar.addEventListener("click", function () {
  reiniciar.forEach((objeto) => {
    //pecorre todo o vetor "reiniciar" e atualiza ele

    let campeao = document.getElementById("campeao");
    objeto.res1.innerHTML = "";
    objeto.res2.innerHTML = "";
    campeao.innerHTML = "";
    vencedor.innerHTML = "";
    rodadas.innerHTML = "";
    objeto.bt1.innerHTML = "Jogar dado 1";
    objeto.bt2.innerHTML = "Jogar dado 2";
    objeto.jogador = 1; //jogador 1 vai jogar ao reiniciar
  });
  jogada = 0;
  jogada1 = 0;
  jogada2 = 0;
  bt1.disabled = false;
  bt2.disabled = true;
atualizarLocalStorage()
});

//verificar o campeão da partida

function campeao() {
  // let cont = Math.floor(jogada / 2) + 1;

    if (jogada1 > jogada2) {
        rodadas.innerHTML = `O jogador <strong> 1  </strong> venceu a rodada <strong> ${
        jogada
        } </strong>`;
    } else if (jogada1 < jogada2) {
        rodadas.innerHTML = `O jogador <strong> 2  </strong> venceu a rodada <strong> ${
        jogada
        } </strong>`;
    } else if (jogada1 === jogada2) {
        rodadas.innerHTML = `Empate na rodada <strong>  ${jogada} </strong> ! `;
    }
    if (jogada === 10) {
        let campeao = document.getElementById("campeao");
        if (jogada1 > jogada2) {
        vencedor.innerHTML = "Jogador 1 ganhou o jogo! 🏆";
        campeao.innerHTML = "Você é muito sortudo jogador 1!";
        campeao.style.color = "red";
        } else if (jogada2 > jogada1) {
        vencedor.innerHTML = "Jogador 2 ganhou o jogo! 🏆";
        campeao.innerHTML = "Você é muito sortudo jogador 2!";
        campeao.style.color = "red";
        } else if (jogada1 == jogada2) {
        vencedor.innerHTML = "Empate. Vamos de novo?";
        campeao.innerHTML = "Vocês não tem sorte?";
        campeao.style.color = "red";
        }
        bt1.disabled = true;
        bt2.disabled = true;
        atualizarLocalStorage()
    }
}