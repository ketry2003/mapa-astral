// Exemplo de chamada fictícia à API — substitua pela real depois
document.addEventListener("DOMContentLoaded", () => {
  const mapaDiv = document.getElementById("mapa");

  // Exemplo básico — simulação de resposta da API
  const exemplo = {
    signo: "Áries",
    ascendente: "Leão",
    lua: "Sagitário"
  };

  mapaDiv.innerHTML = `
    <p><strong>Signo:</strong> ${exemplo.signo}</p>
    <p><strong>Ascendente:</strong> ${exemplo.ascendente}</p>
    <p><strong>Lua:</strong> ${exemplo.lua}</p>
  `;
});

  