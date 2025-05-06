<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8">
  <title>Horóscopo Diário</title>
</head>
<body>
  <h1>Veja seu horóscopo diário</h1>
  <form id="formulario">
    <label for="signo">Escolha seu signo:</label>
    <select id="signo" name="signo">
      <option value="aries">Áries</option>
      <option value="taurus">Touro</option>
      <option value="gemini">Gêmeos</option>
      <option value="cancer">Câncer</option>
      <option value="leo">Leão</option>
      <option value="virgo">Virgem</option>
      <option value="libra">Libra</option>
      <option value="scorpio">Escorpião</option>
      <option value="sagittarius">Sagitário</option>
      <option value="capricorn">Capricórnio</option>
      <option value="aquarius">Aquário</option>
      <option value="pisces">Peixes</option>
    </select>
    <button type="submit">Ver horóscopo</button>
  </form>

  <div id="resultado"></div>

  <script>
    const form = document.getElementById('formulario');
    const resultado = document.getElementById('resultado');

    form.addEventListener('submit', async function(e) {
      e.preventDefault();

      const signo = document.getElementById('signo').value;

      const response = await fetch(`https://aztro.sameerkumar.website/?sign=${signo}&day=today`, {
        method: 'POST'
      });

      const data = await response.json();

      resultado.innerHTML = `
        <h2>Horóscopo para ${signo.charAt(0).toUpperCase() + signo.slice(1)}</h2>
        <p><strong>Data:</strong> ${data.current_date}</p>
        <p><strong>Compatibilidade:</strong> ${data.compatibility}</p>
        <p><strong>Cor:</strong> ${data.color}</p>
        <p><strong>Número da Sorte:</strong> ${data.lucky_number}</p>
        <p><strong>Resumo:</strong> ${data.description}</p>
      `;
    });
  </script>
</body>
</html>
