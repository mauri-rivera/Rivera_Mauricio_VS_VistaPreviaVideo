
function mostrarId(elemento) {
    let contenidoVideo = "";
    let identificador = elemento.id;
 
    if (document.getElementById("pantallaVideo").hasChildNodes()) {

        document.getElementById("videoActual").remove();
        contenidoVideo = document.createElement("VIDEO");
        contenidoVideo.setAttribute("class", "muestraVideo");
        contenidoVideo.setAttribute("id", "videoActual");

        if (contenidoVideo.canPlayType("video/mp4")) {
            let src = `videos/${identificador}`;
            let ubicacion = encontrarUbicacion(identificador);
            contenidoVideo.setAttribute("src", `${src}/${ubicacion}`);
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
            let src = `videos/${identificador}`;
            let ubicacion = encontrarUbicacion(identificador);
            contenidoVideo.setAttribute("src", `${src}/${ubicacion}`);
        } else {
            contenidoVideo.setAttribute("src", "movie.ogg");
        }

        contenidoVideo.setAttribute("width", "720");
        contenidoVideo.setAttribute("height", "400");
        contenidoVideo.setAttribute("controls", "controls");
        document.getElementById("pantallaVideo").appendChild(contenidoVideo);
    }
}

function encontrarUbicacion(id) {
    try{
        let ruta = "";
        switch (id) {
            case "video1":
                ruta = "video.mp4";
                break;
            case "video2":
                ruta = "pexels-yogendra-singh-15135149.mp4";
                break;
            case "video3":
                ruta = "pexels-ricardo-perez-18092718.mp4";
                break;
            case "video4":
                ruta = "pexels-swapnil-sharma-14916652.mp4";
                break;
        }

        return ruta;
    }
    catch(err){}
}