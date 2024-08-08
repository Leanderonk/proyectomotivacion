let messages = [
    "eres increible",
    "Detrás de cada ingeniero hay noches interminables de desvelo, lágrimas de frustración y comidas frías.",
    "Pero también un corazón intrépido y una mente brillante, colmada de metas por construir.",
    "El éxito no se mide por lo rápido que llegues, sino por tu persistencia.",
    "Es imposible vivir sin fallar en algo, a menos que vivas tan cuidadosamente que podrías no haber vivido en absoluto.",
    "Descubri que si soy esquisofrenico pero normal, por la bendita ing. xd",
    "Tú puedes lograrlo.",
    "Las estrellas no brillan por gusto, las estrellas brillan por el intento de ser como tú :)",
    "Confía en ti misma.",
];
let currentMessageIndex = 0;

function showCard() {
    document.getElementById('showCardButton').style.display = 'none';
    let card = document.getElementById('card');
    card.style.display = 'block';
    setTimeout(() => {
        card.style.opacity = 1;
    }, 100);
}

function changeMessage() {
    let mensajeElement = document.getElementById('mensaje');
    currentMessageIndex++;

    if (currentMessageIndex < messages.length) {
        mensajeElement.textContent = messages[currentMessageIndex];
    } else {
        document.getElementById('changeMessageButton').style.display = 'none';
        let card = document.getElementById('card');
        card.innerHTML = `<img src="flor.jpg" alt="Rose">
                          <h3>PARA TI <br><br>NO TE DESANIMES :) </h3>`;
        card.style.textAlign = 'center';
    }
}
