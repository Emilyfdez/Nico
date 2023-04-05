document.querySelector("#btnSorpresa").addEventListener('click', mostrarSorpresa);


function mostrarSorpresa() {

    var miGif = document.getElementById("miGif");
    var btnSorpresa = document.getElementById("btnSorpresa");
    var sonido = document.getElementById("miSonido");

    miGif.style.display = 'block';
    btnSorpresa.style.display = "none";

    sonido.play();
    sonido.onended = function () {
        miGif.style.display = 'none';
        btnSorpresa.style.display = "block";
    };
}