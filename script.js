document.getElementById('astroForm').addEventListener('submit', async function(e) {
    e.preventDefault();
  
    const name = document.getElementById('name').value;
    const birthDate = document.getElementById('birthDate').value;
    const birthTime = document.getElementById('birthTime').value;
    const location = document.getElementById('location').value;
  
    const response = await fetch('https://api.myastrodatabase.com/api/chart', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer SEU_TOKEN_AQUI'
      },
      body: JSON.stringify({
        name,
        birth_date: birthDate,
        birth_time: birthTime,
        location
      })
    });
  
    const resultDiv = document.getElementById('result');
  
    if (!response.ok) {
      const error = await response.text();
      resultDiv.innerText = `Erro: ${error}`;
      return;
    }
  
    const data = await response.json();
    resultDiv.innerText = JSON.stringify(data, null, 2);
  });
  