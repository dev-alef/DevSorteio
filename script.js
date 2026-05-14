function generateNumber() {

    const min = Math.ceil(document.querySelector('.input-min').value)
    const max = Math.floor(document.querySelector('.input-max').value)

    const result = Math.floor(Math.random() * (max - min + 1)) + min;



    

}


const button = document.getElementById('button-sortear');
const numeroSorteado = document.getElementById('numeroSorteado');

button.addEventListener('click', () => {
  // Pega os inputs pelo seletor de classe
  const inputMin = document.querySelector('.input-min');
  const inputMax = document.querySelector('.input-max');

  const min = Number(inputMin.value);
  const max = Number(inputMax.value);

  // Validação simples para garantir que os valores são números e min < max
  if (!min || !max || min >= max) {
    numeroSorteado.textContent = 'Por favor, insira valores válidos (min < max).';
    return;
  }

  // Função para gerar número aleatório inteiro entre min e max (inclusive)
  const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

  // Atualiza o texto do parágrafo com o número sorteado
  numeroSorteado.textContent = `Número sorteado: ${randomNumber}`;
});