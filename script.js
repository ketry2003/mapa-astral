document.getElementById('horoscope-form').addEventListener('submit', function(e) {
  e.preventDefault(); // Impede o formulário de recarregar a página

  const sign = document.getElementById('sign').value; // Pega o signo selecionado
  const day = document.getElementById('day').value;   // Pega o dia selecionado

  // Faz a requisição para a API com os parâmetros
  fetch('https://aztro.sameerkumar.website/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      sign: sign,   // Envia o signo
      day: day      // Envia o dia
    })
  })
  .then(response => response.json())  // Converte a resposta para JSON
  .then(data => {
    // Exibe o horóscopo na página
    const horoscopeText = document.getElementById('horoscope-text');
    horoscopeText.innerHTML = data.description; // Exibe a descrição do horóscopo
  })
  .catch(error => {
    console.error('Erro ao obter o horóscopo:', error);
  });
});

