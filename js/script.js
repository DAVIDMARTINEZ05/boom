let contadorPantalla = document.getElementById("countdown");
    let resultadoPantalla = document.getElementById("result");
    let NumeroUsuario;
    let contador = 5;

    document.getElementById("userInput").addEventListener("input", function () {
      NumeroUsuario = parseInt(document.getElementById("userInput").value, 10);

      if (!isNaN(NumeroUsuario) && NumeroUsuario >= 1 && NumeroUsuario <= 3) {
        let numeroAleatorio = Math.floor(Math.random() * 3) + 1; 

        resultadoPantalla.textContent = ""; 
        contador = 5; 

        let interval = setInterval(function () {
          contadorPantalla.textContent = `Cuenta atrás: ${contador}`;
          contador--;

          if (contador < 0) {
            clearInterval(interval); 

            if (NumeroUsuario === numeroAleatorio) {
              resultadoPantalla.textContent = `¡Has salvado el mundo! 
              Tu número: ${NumeroUsuario} | Número correcto: ${numeroAleatorio}`;
            } else {
              resultadoPantalla.textContent = `La bomba ha estallado. 
              Tu número: ${NumeroUsuario} | Número correcto: ${numeroAleatorio}`;
            }
          }
        }, 1000);
      } else {
        resultadoPantalla.textContent = "Por favor, ingresa un número válido entre 1 y 3.";
      }
    });