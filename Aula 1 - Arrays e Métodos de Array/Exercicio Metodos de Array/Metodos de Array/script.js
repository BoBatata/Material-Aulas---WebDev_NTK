function executarPush() {
  const array = ['🍎', '🍌'];
  array.push("🍇");
  const resultado = array;
  document.getElementById('resultado-push').textContent = resultado;
  //Push adiciona no final do array.
}

function executarPop() {
  const array = ['🍎', '🍌', '🍇'];
  array.pop();
  const resultado = array;
  document.getElementById('resultado-pop').textContent = resultado;
  //Remove o último item.
}

function executarShift() {
  const array = ['🍎', '🍌', '🍇'];
  array.shift();
  const resultado = array;
  document.getElementById('resultado-shift').textContent = resultado;
  //Remove o primeiro item.
}

function executarUnshift() {
  const array = ['🍌', '🍇'];
  array.unshift("🍓");
  const resultado = array;
  document.getElementById('resultado-unshift').textContent = resultado;
  //Adiciona em primeiro o item no array.  
}

function executarIncludes() {
  const array =  ['🍎', '🍌', '🍇'];
  const resultado = array.includes("🥝");
  document.getElementById('resultado-includes').textContent = resultado;
  //Verifica se o array inclue certo objeto.
}

function executarReverse() {
  const array = ['🍎', '🍌', '🍇'];
  array.reverse();
  const resultado = array;
  document.getElementById('resultado-reverse').textContent = resultado;
  //Reverte a ordem dos itens.
}

function executarSort() {
  const array = [3, 1, 4, 2, 11];
  const array2 = ["Brasil", "Argentina", "Noruega", "Italia"];

  const resultado = array.sort((a,b) => a - b);
  document.getElementById('resultado-sort').textContent = resultado;
  const resultado2 = array2.sort();
  document.getElementById('resultado-sort2').textContent = resultado2;
  //Sort em números entende q 1 vem na frente mesmo se for 11.
  //Precisa ser usado uma função para fazer ele ordenar de forma correta.
  //Inverter pode ser usado b - a além de a - b.

  //Ordena os itens do array, string em ordem alfabetica/lexica.
  //Pode usar sort().reverse(); para inverter e ordenar.
}

function executarSlice() {
  const array = ['🍎', '🍌', '🍇', '🍓'];
  const resultado = array;
  document.getElementById('resultado-slice').textContent = resultado;
}

function executarSplice() {
  const array = ['🍎', '🍌', '🍇'];
  const resultado = array;
  document.getElementById('resultado-splice').textContent = resultado;
}


function executarIndexOf() {
  const array = ['🍎', '🍌', '🍇'];
  const resultado = array;
  document.getElementById('resultado-indexof').textContent = resultado;
}

function executarJoin() {
  const array = ['🍎', '🍌', '🍇'];
  const resultado = array;
  document.getElementById('resultado-join').textContent = resultado;
}

/* Loops de array */

function executarForEach() {
  const array = ['🍎', '🍌', '🍇'];
  const resultado = array.forEach((pegaItem) => console.log(pegaItem));
  document.getElementById('resultado-foreach').textContent = resultado;
  //Passa por cada item no array. For each item.
}

function executarMap() {
  const array = ['🍎', '🍌', '🍇'];
  const resultado = array.map(pegaItem => `✅ ${pegaItem}`);
  document.getElementById('resultado-map').textContent = resultado;
  //O mesmo que o ForEach mas retorna o mesmo com modificação.
}

 function executarMapHTML() {
    const dispositivos = ['🎮', '🕹️', '💻'];
    const resultado = dispositivos.map((pegaItem, index) => {
      return `<h1> Item em promoção</h1>
      <p> ${pegaItem}</p>`
    });
    document.getElementById('resultado-map-html').innerHTML = resultado.join('<br>');
    //Posso usar pra criar cards inteiros e pode ser pego mais de um parametro para pegar o index por exemplo.
  }

function executarFilter() {
  const array = ['🍎', '🍌', '🍇' ,'🍎', '🍌', '🍇'];
  const resultado = array.filter(pegaItem => pegaItem ==='🍎');
  document.getElementById('resultado-filter').textContent = resultado;
  //Retorna um novo array com algum tipo de filtro ou condição
}

function executarFind() {
  const array =  ['🍎', '🍌', '🍇'];
  const resultado = array.find(pegaItem => pegaItem === '🍎');
  document.getElementById('resultado-find').textContent = resultado;
  //Procura algo dentro de um array, retorna um True ou False, quase um includes mas pode fazer procuras mais complexas
}

function executarFindIndex() {
  const array =  ['🍎', '🍌', '🍇'];
  const resultado = array.findIndex(pegaItem => pegaItem === '🍎');
  document.getElementById('resultado-findIndex').textContent = resultado;
  //Retorna a posição do objeto
}

function executarReduce() {
  const array = [1, 2, 3, 4];
  const resultado = array.reduce((totalAcumulado, valorAtual) => {
    return totalAcumulado + valorAtual
  },0);
  document.getElementById('resultado-reduce').textContent = resultado;
  //Vai somar tudo que tem dentro, útil para um carrinho de compras por exemplo.

  //,0 é para ter certeza q ele comece em 0 a conta.
}

function executarEvery() {
  const array = [10, 20, 30, 40];
  const resultado = 'Resultado da operação every';
  document.getElementById('resultado-every').textContent = resultado;
  //Checa se todos os itens são de um tipo, como string ou int.
}

function executarSome() {
  const array = ['🍎', '🍌', '🥝'];
  const resultado = 'Resultado da operação some';
  document.getElementById('resultado-some').textContent = resultado;
  //Se algum item segue algum tipo de método.
}

/* Encadeamento */

function executarEncadeamento() {
  const jogos = ['Zelda', 'Mario', 'Elden Ring', 'Fortnite', 'Minecraft'];
  const resultado = 'Resultado da operação encadeada';
  document.getElementById("resultado-encadeamento").textContent = resultado.join(', ') || 'Nenhum jogo encontrado';
}

const ordernar = (a) => a - 2
// //Exemplo de Arrow Fuction q é a mesma coisa q:
function ordernar2(a){
  return a - 2
}
