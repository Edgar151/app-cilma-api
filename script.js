document.getElementById("btnClima").addEventListener("click", obtenerClima);

async function obtenerClima() {
  const ciudad = document.getElementById("ciudades").value;
  const resultado = document.getElementById("resultado");

  if (!ciudad) {
    resultado.innerText = "Por favor selecciona una ciudad.";
    return;
  }

  const apiKey = "612635c44cea9a04bd8ec43b406778d1";
 
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&units=metric&lang=es`;

  try {
    const respuesta = await fetch(url);
    const data = await respuesta.json();

    console.log(data); // por si quieres ver la respuesta

    if (data.cod !== 200) {
      resultado.innerText = "Error: " + data.message;
      return;
    }

    resultado.innerText =
      `Clima en ${ciudad}: ${data.main.temp}°C — ${data.weather[0].description}`;

  } catch (error) {
    resultado.innerText = "Error conectando a la API.";
  }
}
