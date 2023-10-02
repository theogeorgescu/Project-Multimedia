var canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
var incarcaFisier = document.getElementById('fileIN');
var sound = new Audio("media/click.wav");

btnDownload = document.getElementById('btnDownload');

uploadFile = document.getElementById('fileIN');

btnReset = document.getElementById('btnReset');

let image = new Image();

document.querySelector(".animation").classList.toggle("rotation");


uploadFile.addEventListener('change', (e) => {
    const file = document.getElementById('fileIN').files[0];
    const read = new FileReader();
    if (file) {
        fileName = file.name;
        read.readAsDataURL(file);
    }
    read.addEventListener('load', () => {
        image = new Image();
        image.src = read.result;
        image.onload = function() {
            canvas.width = image.width;
            canvas.height = image.height;
            ctx.drawImage(image, 0, 0, image.width, image.height);
            canvas.removeAttribute('data-caman-id');
        };
    }, false);
});

document.addEventListener('click', (e) => {
    if (e.target.classList.contains('addBrightness')) {
        sound.play();
        sound.currentTime = 0;
        Caman("#canvas", image, function() {
            this.brightness(5).render();
        });
    } else if (e.target.classList.contains("lessBrightness")) {
        sound.play();
        sound.currentTime = 0;
        Caman("#canvas", image, function() {
            this.brightness(-5).render();
        });
    } else if (e.target.classList.contains("addContrast")) {
        sound.play();
        sound.currentTime = 0;
        Caman("#canvas", image, function() {
            this.contrast(5).render();
        });
    } else if (e.target.classList.contains("lessContrast")) {
        sound.play();
        sound.currentTime = 0;
        Caman("#canvas", image, function() {
            this.contrast(-5).render();
        });
    } else if (e.target.classList.contains("addSaturation")) {
        sound.play();
        sound.currentTime = 0;
        Caman("#canvas", image, function() {
            this.saturation(5).render();
        });
    } else if (e.target.classList.contains("lessSaturation")) {
        sound.play();
        sound.currentTime = 0;
        Caman("#canvas", image, function() {
            this.saturation(-5).render();
        });
    } else if (e.target.classList.contains("addSepia")) {
        sound.play();
        sound.currentTime = 0;
        Caman("#canvas", image, function() {
            this.sepia().render();
        });
    } else if (e.target.classList.contains("addVintage")) {
        sound.play();
        sound.currentTime = 0;
        Caman("#canvas", image, function() {
            this.vintage().render();
        });
    } else if (e.target.classList.contains("addBW")) {
        sound.play();
        sound.currentTime = 0;
        Caman("#canvas", image, function() {
            this.bw().render();
        });
    }
});

btnReset.addEventListener('click', (e) => {
    sound.play();
    sound.currentTime = 0;
    Caman("#canvas", image, function() {
        this.revert(true);
    });
});

//Download
btnDownload.addEventListener('click', (e) => {
    sound.play();
    sound.currentTime = 0;
    let newNameFile;
    newNameFile = 'edited_photo.jpg';
    download(canvas, newNameFile);
});

function download(canvas, fileName) {
    let event;
    link = document.createElement('a');

    link.download = fileName;
    link.href = canvas.toDataURL('image/jpeg', 0.8);

    event = new MouseEvent('click');
    link.dispatchEvent(event);
}