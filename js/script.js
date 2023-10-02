
function mostrarId(elemento) {
    if (document.getElementById("pantallaVideo").hasChildNodes()) {
        document.getElementById("videoActual").remove();
        muestraVideo(elemento);
    }
    else {
        document.getElementById("fondoNeutro").remove();
        muestraVideo(elemento);
    }
}
    
function muestraVideo(atributo) {
    let contenidoVideo = "";
    let identificador = atributo.id;

    contenidoVideo = document.createElement("VIDEO");
    contenidoVideo.setAttribute("class", "muestraVideo");
    contenidoVideo.setAttribute("id", "videoActual");

    if (contenidoVideo.canPlayType("video/mp4")) {
        let ubicacion = encontrarUbicacion(identificador);
        contenidoVideo.setAttribute("src", ubicacion);
        contenidoVideo.setAttribute("onmouseover", "playVideo(this)");
        contenidoVideo.setAttribute("onmouseout", "stopVideo(this)");
    } 
    else 
    {
        contenidoVideo.setAttribute("src", "movie.ogg");
    }

    contenidoVideo.setAttribute("width", "720");
    contenidoVideo.setAttribute("height", "400");
    contenidoVideo.setAttribute("controls", "controls");
    document.getElementById("pantallaVideo").appendChild(contenidoVideo);
    //document.getElementById("videoActual").muted = true;
}

function encontrarUbicacion(id) {
    let ruta = "";

    switch (id) {
        case "video1":
            ruta = "videos/videos1/movie.mp4";
            break;
        case "video2":
            ruta = "videos/videos2/pexels-yogendra-singh-15135149.mp4";
            break;
        case "video3":
            ruta = "videos/videos3/pexels-ricardo-perez-18092718.mp4";
            break;
        case "video4":
            ruta = "videos/videos4/pexels-swapnil-sharma-14916652.mp4";
            break;
    }

    return ruta;
}

function playVideo(idVideo) {
    let videoId = idVideo.id;
    document.getElementById(videoId).play();
    document.getElementById(videoId).muted = true;
}

function stopVideo(idVideo) {
    let videoId = idVideo.id;
    document.getElementById(videoId).pause();
    document.getElementById(videoId).muted = false;
}