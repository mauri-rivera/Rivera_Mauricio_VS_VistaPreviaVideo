import * as fs from 'node:fs';

const cors = require('cors');
const app = express();
app.use(cors({ 
    origin: 'http://localhost:5500'
}));

let contenidoVideo = "";

/*function identificarVideo(elemento) {
    let identificador = elemento.id;
    return identificador;
}*/

document.getElementsByClassName("video").onclick = function () {
    let identificador = document.getElementsByClassName("video").id;
    console.log(identificador);
    /*document.getElementById(identificador).onclick = function () {
        if (document.getElementById("pantallaVideo").hasChildNodes()) {

            document.getElementById("videoActual").remove();
            contenidoVideo = document.createElement("VIDEO");
            contenidoVideo.setAttribute("class", "muestraVideo");
            contenidoVideo.setAttribute("id", "videoActual");

            if (contenidoVideo.canPlayType("video/mp4")) {
                //let src = `videos/${identificador}/`;
                let src = `videos/${identificador}/`
                let ubicacion = leerCarpeta(src);
                contenidoVideo.setAttribute("src", `videos/${identificador}/${ubicacion}`);
            } else {
                contenidoVideo.setAttribute("src", "movie.ogg");
            }

            contenidoVideo.setAttribute("width", "720");
            contenidoVideo.setAttribute("height", "400");
            contenidoVideo.setAttribute("controls", "controls");
            document.getElementById("pantallaVideo").appendChild(contenidoVideo);
        }
        else {
            document.getElementById("fondoNeutro").remove();
            contenidoVideo = document.createElement("VIDEO");
            contenidoVideo.setAttribute("class", "muestraVideo");
            contenidoVideo.setAttribute("id", "videoActual");

            if (contenidoVideo.canPlayType("video/mp4")) {
                let src = `videos/${identificador}/`;
                let ubicacion = leerCarpeta(src);
                contenidoVideo.setAttribute("src", `videos/${identificador}/${ubicacion}`);
            } else {
                contenidoVideo.setAttribute("src", "movie.ogg");
            }

            contenidoVideo.setAttribute("width", "720");
            contenidoVideo.setAttribute("height", "400");
            contenidoVideo.setAttribute("controls", "controls");
            document.getElementById("pantallaVideo").appendChild(contenidoVideo);
        }
    }*/
}

function leerCarpeta(src) {
    const files = fs.readdirSync(src);

    let archivo = files.toString();
    return archivo;
}





/*document.getElementById("video1").onclick = function () {
    if (document.getElementById("pantallaVideo").hasChildNodes()) {
        document.getElementById("videoActual").remove();
        contenidoVideo = document.createElement("VIDEO");
        contenidoVideo.setAttribute("class", "muestraVideo");
        contenidoVideo.setAttribute("id", "videoActual");

        if (contenidoVideo.canPlayType("video/mp4")) {
            contenidoVideo.setAttribute("src", "videos/pexels-yogendra-singh-15135149 (Original).mp4");
        } else {
            contenidoVideo.setAttribute("src", "movie.ogg");
        }

        contenidoVideo.setAttribute("width", "720");
        contenidoVideo.setAttribute("height", "400");
        contenidoVideo.setAttribute("controls", "controls");
        document.getElementById("pantallaVideo").appendChild(contenidoVideo);
    }
    else{
        document.getElementById("fondoNeutro").remove();
        contenidoVideo = document.createElement("VIDEO");
        contenidoVideo.setAttribute("class", "muestraVideo");
        contenidoVideo.setAttribute("id", "videoActual");

        if (contenidoVideo.canPlayType("video/mp4")) {
            contenidoVideo.setAttribute("src", "videos/pexels-yogendra-singh-15135149 (Original).mp4");
        } else {
            contenidoVideo.setAttribute("src", "movie.ogg");
        }

        contenidoVideo.setAttribute("width", "720");
        contenidoVideo.setAttribute("height", "400");
        contenidoVideo.setAttribute("controls", "controls");
        document.getElementById("pantallaVideo").appendChild(contenidoVideo);
    }
}

document.getElementById("video2").onclick = function () {
    if (document.getElementById("pantallaVideo").hasChildNodes()) {
        document.getElementById("videoActual").remove();
        contenidoVideo = document.createElement("VIDEO");
        contenidoVideo.setAttribute("class", "muestraVideo");
        contenidoVideo.setAttribute("id", "videoActual");

        if (contenidoVideo.canPlayType("video/mp4")) {
            contenidoVideo.setAttribute("src", "videos/pexels-ricardo-perez-18092718 (1080p).mp4");
        } else {
            contenidoVideo.setAttribute("src", "movie.ogg");
        }

        contenidoVideo.setAttribute("width", "720");
        contenidoVideo.setAttribute("height", "400");
        contenidoVideo.setAttribute("controls", "controls");
        document.getElementById("pantallaVideo").appendChild(contenidoVideo);
    }
    else {
        document.getElementById("fondoNeutro").remove();
        contenidoVideo = document.createElement("VIDEO");
        contenidoVideo.setAttribute("class", "muestraVideo");
        contenidoVideo.setAttribute("id", "videoActual");

        if (contenidoVideo.canPlayType("video/mp4")) {
            contenidoVideo.setAttribute("src", "videos/pexels-ricardo-perez-18092718 (1080p).mp4");
        } else {
            contenidoVideo.setAttribute("src", "movie.ogg");
        }

        contenidoVideo.setAttribute("width", "720");
        contenidoVideo.setAttribute("height", "400");
        contenidoVideo.setAttribute("controls", "controls");
        document.getElementById("pantallaVideo").appendChild(contenidoVideo);
    }
}

document.getElementById("video3").onclick = function () {
    if (document.getElementById("pantallaVideo").hasChildNodes()) {
        document.getElementById("videoActual").remove();
        contenidoVideo = document.createElement("VIDEO");
        contenidoVideo.setAttribute("class", "muestraVideo");
        contenidoVideo.setAttribute("id", "videoActual");

        if (contenidoVideo.canPlayType("video/mp4")) {
            contenidoVideo.setAttribute("src", "videos/pexels-emanuel-panarello-18126060 (Original).mp4");
        } else {
            contenidoVideo.setAttribute("src", "movie.ogg");
        }

        contenidoVideo.setAttribute("width", "720");
        contenidoVideo.setAttribute("height", "400");
        contenidoVideo.setAttribute("controls", "controls");
        document.getElementById("pantallaVideo").appendChild(contenidoVideo);
    }
    else {
        document.getElementById("fondoNeutro").remove();
        contenidoVideo = document.createElement("VIDEO");
        contenidoVideo.setAttribute("class", "muestraVideo");
        contenidoVideo.setAttribute("id", "videoActual");

        if (contenidoVideo.canPlayType("video/mp4")) {
            contenidoVideo.setAttribute("src", "videos/pexels-emanuel-panarello-18126060 (Original).mp4");
        } else {
            contenidoVideo.setAttribute("src", "movie.ogg");
        }

        contenidoVideo.setAttribute("width", "720");
        contenidoVideo.setAttribute("height", "400");
        contenidoVideo.setAttribute("controls", "controls");
        document.getElementById("pantallaVideo").appendChild(contenidoVideo);
    }
}

document.getElementById("video4").onclick = function () {
    if (document.getElementById("pantallaVideo").hasChildNodes()) {
        document.getElementById("videoActual").remove();
        contenidoVideo = document.createElement("VIDEO");
        contenidoVideo.setAttribute("class", "muestraVideo");
        contenidoVideo.setAttribute("id", "videoActual");

        if (contenidoVideo.canPlayType("video/mp4")) {
            contenidoVideo.setAttribute("src", "videos/pexels-swapnil-sharma-14916652 (1080p).mp4");
        } else {
            contenidoVideo.setAttribute("src", "movie.ogg");
        }

        contenidoVideo.setAttribute("width", "720");
        contenidoVideo.setAttribute("height", "400");
        contenidoVideo.setAttribute("controls", "controls");
        document.getElementById("pantallaVideo").appendChild(contenidoVideo);
    }
    else {
        document.getElementById("fondoNeutro").remove();
        contenidoVideo = document.createElement("VIDEO");
        contenidoVideo.setAttribute("class", "muestraVideo");
        contenidoVideo.setAttribute("id", "videoActual");

        if (contenidoVideo.canPlayType("video/mp4")) {
            contenidoVideo.setAttribute("src", "videos/pexels-swapnil-sharma-14916652 (1080p).mp4");
        } else {
            contenidoVideo.setAttribute("src", "movie.ogg");
        }

        contenidoVideo.setAttribute("width", "720");
        contenidoVideo.setAttribute("height", "400");
        contenidoVideo.setAttribute("controls", "controls");
        document.getElementById("pantallaVideo").appendChild(contenidoVideo);
    }
}*/