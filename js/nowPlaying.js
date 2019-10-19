var artistAnterior = "";
var songAnterior = "";
var canciones = ["TE ELIGES PORQUE HAY CAMINO, TE DIGO HAY OTRAS COSAS (MIKI NUÑEZ)",
"LO PARÓ CON UNA MANO, LO PARÓ QUE YO LA VI (OSMANI GARCIA)",
"SIGO VIENDO AQUEL MOMENTO, SE DESVANECIÓ, DESAPARECIÓ (ÁLVARO SOLER)",
"DESDE HACE TIEMPO LE PUSE PUNTO FINAL (BAD BUNNY & J BALVIN)",
"A MARIA MOÑITO SE LE PARTIÓ LA CAMA QUE CHAWA LE DIO (MR BLACK)",
"ERES COMO LA CLAVE DE MI CELULAR, NO ES NECESARIO DECIRTE QUE… (DALEX)",
"SI TU NOVIO TE TERMINA, MEZCLA GUARO CON TEQUILA (SEBASTIAN YATRA, MAU & RICKY)",
"DISCÚLPAME, MI AMOR, POR ESTA INVITACIÓN (ENRIQUE IGLESIAS & BAD BUNNY)",
"DESDE QUE ME DEJASTE, NO HAGO MÁS NADA QUE EXTRAÑARTE CORAZÓN (GARIBALDI)",
"Y AHORA ESTOY PERDIDO SIN TENER RAZÓN Y YO TAN SOLO TE SUPLICO (DAVID CIVERA)",
"SI ES VERDAD QUE EXISTE UN DIOS QUE TRABAJE DE SOL A SOL (MAGO DE OZ)",
"YO TENGO MI VOZ, TÚ NO TIENES NADA (DVICIO, MAU & RICKY)",
"LAS BALAS PERDIDAS DE ESTE AMOR, PREFIERO NO VERLAS EN MI PIEL (MORAT)",
"ME CONFORMARÉ Y ME SERVIRÁ BESARLE LOS LABIOS NADA MÁS. (CAMELA)",
"NO HAY QUE SERLE FIEL CUANDO YA NO HAY AMOR, NO HAY AMOR (LUIS FONSI & OZUNA)",
"UN SEAT PANDA SE ME CRUZÓ Y SE COMIÓ EL PARACHOQUES DE MI FORD ESCORT (ESTOPA)",
"PREGÚNTALE AL DÍA QUÉ VAMOS A HACER HOY PA' DARLE COLOR (BONGO BOTRAKO)",
"DIME QUE SIENTES LO MISMO QUE YO, DIME QUE ME QUIERES, DÍMELO (CAMELA)",
"MI GATA NO PARA DE JANGUEAR, PORQUE (DADDY YANKEE)",
"EN ESTA NOCHE SI ME LA DAS A MÍ TE SACAS LA LOTERÍA (CNCO)",
"YO ME OBLIGARÉ A OLVIDARTE O MUERO EN EL INTENTO (DAVID BISBAL)",
"YO VINE A ESTE MUNDO PARA COMPLACERTE (EFECTO PASILLO)",
"AY, AMOR, ME DUELE TANTO QUE TE FUERAS SIN DECIR ADONDE (SHAKIRA)",
"ESTO LO SEGUIMO' EN EL AFTER PARTY (DADDY YANKEE)",
"PORQUE AHORA SOY YO LA QUE QUIERE ESTAR SIN TI (PIMIPINELA)",
"MAÑANA TE DEJO OTRA VEZ (MORAT)",
"TENGO CLARO QUE NO ME VOY A FIJAR (AITANA & ANA GUERRA)",
"NO ME PIENSO QUITAR, TÚ ERES MI VICIO (DADDY YANKEE & ANUEL AA)",
"CÓMPLICE LA NOCHE DE NOSOTROS DOS (SILVESTRE DANGOND & NATTI NATASHA)",
"PERO EN BAJITA, ELLA NO ES DE FRONTEAR (BAD BUNNY)",
"NO LO HA CONFESADO, ESO LO SÉ YO (AMARAL)",
"QUE SE VENGA EL VERANO (AITANA)",
"EN EL MÁS ALLÁ NUNCA DAN DE BEBER (MAGO DE OZ)",
"Y SI TÚ Y YO YA ESTAMOS AQUÍ (CNCO)",
"SI APARECE EL DESEO TOCÁNDOME A LA PUERTA (DADDY YANKEE, WISIN & YANDEL)",
"HACE MUCHO TIEMPO QUE ME CUESTA SONREÍR (AMARAL)",
"ME HAN OBLIGADO A MUTILAR EN UN INFIERNO TERRENAL (SKA-P)",
"DURO QUIEREN QUE LE DEN (FUEGO)",
"HACERLE CASO AL PRESENTIMIENTO Y ASÍ DEJARNOS LLEVAR (AITANA)",
"IGUAL QUE TÚ, MARES IGUAL QUE TÚ (AMARAL)",
"UN TRECE DE DIEZ CUANDO ESTAMOS EN LA CAMA (JENNIFER LOPEZ)",
"QUIERO GRITARTE A TODO PULMÓN (MORAT)",
"BABY CONMIGO TÚ TE VAS (WISIN)",
"ÚNETE A ESTE SALAO’ A MI LAO’ (LA FIESTA)",
"OLVIDARTE FUE MUY FÁCIL (ANA GUERRA)",
"Y A LA PISTA ME ARRASTRO (CHOCOLATE)",
"Y BESAR A MI AMOR COMO NO LO HICE NUNCA (RAPHAEL)",
"QUE NOS HAN HECHO DAÑO, QUE TODO ES MENTIRA (DAVID CIVERA)",
"PORQUE TU ERROR SOLO FUE CONOCERME (LUIS FONSI & DEMI LOVATO)",
"HOY TE ESCRIBO SIN PENSAR Y SIN ORTOGRAFÍA (MORAT)",
"NO, SOBRAN, SI YO VINE CON UGE (DON PATRICIO & CRUZ CAFUNÉ)",
"VOY CERRANDO MIS HERIDAS (LA FUGA)",
"POR TENERTE, PORQUE VUELVAS (REIK, OZUNA & WISIN)",
"ENAMORÁNDOME ASÍ SOLO CON UNA MIRADA (DE MARCO FLAMENCO)",
"PARA UNIRME A TU MIRADA DIME (CHAYANNE)",
"PASA QUE USTEDES NOS ODIAN (LA RAIZ)",
"TODOS USTEDES LO SABÍAN (MALUMA)",
"ME ACERCO A TÍ BAILEMOS, JUGUEMOS, ACÉRCATE (ÁLVARO SOLER)",
"CUANDO POR DENTRO YO TE GRITABA (CARLOS VIVES & SEBASTIAN YATRA)",
"DESDE HACE MUCHO TIEMPO LA APRENDÍ A ENAMORAR (SEBASTIAN YATRA)",
"FANTASMA QUE APARECE Y NO VUELVE A APARECER (BYTRIAGO & DARELL)",
"NI A QUIÉN LE TOCA AHORA PEDIR PERDÓN (PLATERO Y TU)",
"PORQUE EN EL AMOR PASA IGUAL QUE EN LA GUERRA (MORAT)",
"CON MI CUERPO UN EGOÍSTA (SHAKIRA & MALUMA)",
"QUEMA POR DENTRO Y LENTO TE CONVIERTE EN FIERA (DON OMAR & LUCENZO)",
"LO QUE SON ES ACTORES PORQUE LES ENCANTA EL DRAMA (PITBULL)",
"SI ES POR ESOS LIBROS NUNCA APRENDO (FITO Y LOS FITIPALDIS)",
"LE PIDO VÁMONOS MÁS LEJOS (DESCEMER BUENO & ENRIQUE IGLESIAS)",
"YO NO LA PARO Y A VECES MIRA RARO (JHAY CORTEZ, J BALVIN & BAD BUNNY)",
"HUBIERA JURADO QUE NO CAERÍA EN TUS MANOS (DANI FERNANDEZ)",
"PORQUE NUNCA NOS QUISIMOS AMARRAR (PABLO ALBORAN & PISO 21)",
"PEQUEMOS ABRAZADITOS HASTA EL AMANECER (RICKY MARTIN)",
"QUE MALA SUERTE PARA TÍ, YA NO ME VOY (AITANA & LOLA INDIGO)",
"MIS OJOS SE EMPIEZAN A INUNDAR DE LÁGRIMAS DE AMOR (CAMELA)",
"AHORA QUIERES VOLVER PORQUE NO SE TE DIÓ (OZUNA & DARELL)",
"TÚ ERAS FLOR DESARROPADA (ESTOPA)",
"QUE IMPORTAN UNOS AÑOS DE MÁS (BECKY G & BAD BUNNY)",
"LLEGÓ EL TIBURÓN Y CON EL TE FUISTE (HENRY MENDEZ & PROYECTO UNO)",
"CAMINANDO SOLO ME LA ENCONTRÉ A ELLA (WOLFINE & MALUMA)",
"PERO ES ELLA MÍA QUERIENDO SALIR DEL DAÑO (MALUMA)",
"QUIERO EMBORRACHARME CON TUS BESOS PRONTO (EFECTO PASILLO)",
"ESCÚCHAME COSA BELLA LO QUE YO SIENTO POR TI (JOSE DE RICO & HENRY MENDEZ)",
"SI ESTE DOLOR ME HACE SENTIR VIVO (MORAT)",
"FUI TIRANDO MIGAS DE PAN (MELENDI)",
"MUITO OBRIGADO PA' TI YA NO HAY (MALUMA)",
"SI ME QUIERES HABLAR YO TE PREGUNTARÉ (LUIS FONSI)",
"YO TE PILLO, TE VOY A ATRAPAR (LA FIESTA)",
"SUDAR PA’ GANAR NUESTRO PAN (SKA-P)",
"TIENES TODO EN ESTA VIDA PA' GOZAR (CHAYANNE)",
"DALE HASTA ABAJO SIN PARAR (LUNAY)",
"AHORA SOY UN HOMBRE MUY DIFERENTE (JUAN MAGÁN & MALA RODRIGUEZ)",
"ADMITO QUE QUIERO VOLVERTE A VER (MORAT & AITANA)",
"ESA MELODÍA QUE ROMPE EL SILENCIO (CNCO)",
"YA NO TIENES QUE CUIDARME PORQUE (MORAT)",
"YO TE DIRÉ LO QUE QUIERO (LUIS FONSI & STEFFLON DON)",
"MIENTRAS MÁS TE ACERCAS MÁS AUMENTAS MI ANSIEDAD (SHAKIRA & MALUMA)",
"VEN Y SÁCAME DE ESTE BAR (MANÁ)",
"TE LLAMO, PERO ME SALE OCUPADO (NATTI NATASHA & OZUNA)",
"CON UNA Y MIL CANCIONES TENGO ALGO QUE PREGUNTARTE (SILVESTRE DANGONG & NICKY JAM)",
"PERDÓNAME TE LO TENÍA QUE DECIR (DADDY YANKEE)",
"CUANDO ME MIRAS EL MUNDO GIRA PA’ ATRÁS (LESLIE GRACE & NORIEL)",
"LO TENGO CLARO SI PREGUNTAN POR TI DIRÉ (PISO 21)",
"FALTA UN HOMBRE QUE SABE CÓMO AMARTE (JUAN MAGAN, BELINDA, MANUEL TURIZO…)",
"Y YO TENGO CLARO QUE TÚ PRENDISTE LA LLAMA (LALO EBRATT, SEBASTIÁN YATRA & YERA)",
"ASÍ ME CONVIRTIÓ EL PASADO Y PREFIERO HABLARTE CLARO (MALUMA)",
"SE PRENDE COMO FUEGO CHICA ABUSADORA (JUAN MAGAN & DON OMAR)",
"LA VIDA ES SOLO UNA Y HAY QUE VIVIRLA (CEKY VICINY)",
"NO ME IMPORTA UN CARAJO PORQUE SÉ QUE VOLVERÁS (MALUMA)",
"EL MUNDO SE ESTÁ SUMANDO A LA FIESTA DE LOS LATINOS (GENTE DE ZONA & MARC ANTHONY)",
"A ELLA NUNCA TE VAS A PARECER, TE LO DIGO (DADDY YANKEE)",
"TENERTE CERCA ES UNA LOCURA, NO ME DESPEGO DE TU CINTURA (CNCO)",
"VALE LA PENA ESTAR JUNTO A TI, CONTIGO Y NADIE MÁS (ALVARO SOLER)",
"A TODOS LES GUSTA IR HABLANDO DE MÍ, A VECES LOS OIGO DECIR (LOLA INDIGO & MALA RODRIGUEZ)",
"SABER QUE ESTUVE CON OTRO VAMOS A DECIR QUE SÍ (THALIA & NATTI NATASHA)",
"TÚ FIEL ADMIRADOR Y AUNQUE NO ME CONOCÍAS (WISIN & YANDEL)",
"PERO SE COMPLICA, YO NO ENTIENDO PORQUE ES TAN (JOEY MONTANA)",
"TUS OJOS REFLEJAN UN MAR DE BELLEZA DIFÍCIL DE OLVIDAR (JOSE DE RICO, HENRY MENDEZ & JAY SANTOS)",
"QUE NOS VUELVAN A PONER LA CANCIÓN DE AQUEL DÍA (WISIN & YANDEL)",
"DIME MAMI HASTA DONDE QUIERES LLEGAR (MAIKEL DE LA CALLE)",
"Y SIEMPRE LO HACEMOS RICO EN MI CUARTO (ANUEL AA & KAROL G)",
"SI PASA UN MAL RATO ENROLA UNO Y SE LE VA (MIKE TOWERS & FARRUKO)",
"BABY HOY NO VAMOS A DORMIR (BECKY G & NATTI NATASHA)",
"MI INTENCIÓN NO VOY A DECIR, VEN A DESCUBRIR (ANITTA & MALUMA)",
"CUANDO CONTIGO QUIERES QUE SEA MALO (NICKY JAM & OZUNA)",
"UNA NOCHE OSCURA SIN MIRAR ATRÁS (BOMBA ESTEREO)",
"PORQUE SÉ QUE TE PERDÍ (GENTE DE ZONA & MARC ANTHONY)",
"TU PIEL TIENE UNA GRAN TEXTURA BRONCEADA POR EL SOL (CHINO, NACHO & GENTE DE ZONA)",
"VOY DETRÁS DE TI, NO TE VOY A MENTIR (MANUEL TURIZO)",
"YO SÉ QUE LO BUENO TOMA TIEMPO BABY (FUEGO)",
"QUE EL DESTINO CUMPLIÓ SU MISIÓN (MORAT & ALVARO SOLER)",
"Y ESO QUE TÚ TANTO DICES QUE TE DEBO, SE LO LLEVÓ (MORAT)",
"DEJAMOS LA EMOCIÓN DE LADO Y DECIDIMOS VOLAR (TABURETE)",
"MI CIELO, MI SUELO SE ME VA (DAVID CIVERA)",
"NO HAY CHINAS, NO HAY CHINAS HOY (SKA-P)",
"DESPUÉS SE METE EN MI CAMA, ESO ES MUCHO PARA MÍ (M-CLAN)",
"TODA MI NOCHE Y MI LUZ QUE SENTIRÁS SOLO TÚ (MALÚ)",
"PARA LEVANTAR TU FALDA CADA DÍA DE POR MEDIO (MORAT)",
"NO RECES SI LA FE YA NO TE IMPORTA (VANESA MARTIN)",
"A ELLA NI TÚ NI NADIE LE PARA LOS PIES (MELENDI, ALEJANDRO SANZ & ARKANO)",
"QUE DIGAN LO QUE QUIERAN QUE NO ME IMPORTA NADA (ANTONIO ORZOCO & KAROL G)",
"QUE NOS HAN HECHO DAÑO, QUE TODO ES MENTIRA (DAVID CIVERA)",
"PASA TEMPORADAS LARGAS SORDO, CIEGO Y MUDO (MELENDI)",
"EL SOL SE PERDERÁ SIGUIENDO TU COMPÁS (SINSINATI)",
"LO QUE YO ESTOY ES UN POQUITO NERVIOSO (EL CANTO DEL LOCO)",
"A VECES NO HAY QUE TENER LA RAZÓN (LA CASA AZUL)",
"Y EN LA JURA DE BANDERA DEL MUCHACHO SE LA DIO CON DOS AMIGOS (LOS DEL RIO)",
"UNA VOZ EN LA ESCALERA, ALGUIEN CRUZANDO EL PASILLO (ROSALIA)",
"NADA TE AYUDA A OLVIDARLA (MORAT)",
"PERO QUÉ BIEN ESTOY AHORA (PEREZA)",
"MALDITO SEA EL EMBRUJO QUE ME CEGÓ LA RAZÓN (DAVID CIVERA)",
"UNA Y OTRA VEZ VUELVE A CASTIGARME (DAVID CIVERA & DAVID BISBAL)",
"ME LLAMAN TOMÁS NA MÁS (LOLITA)",
"AUNQUE SEA EN CÁMARA LENTA, ERAS TÚ LO QUE QUERÍA (DANI FERNANDEZ)",
"MI BOCA DIRÁ QUE SI TÚ REGRESAS (AITANA)",
"AMANECERÁS CANTANDO ESTA CANCIÓN (MOMBAI)",
"EL TREN PASA UNA VEZ Y PROMETO QUE (BLAS CANTÓ)"];
function initSMO() {

    LogUtils.write("(initSMO) Carga de SMO", LogUtils.LEVEL_INFO);
    document.body.style.opacity = 0;
    defaultVars();

    //Inicializo el SMO y registramos los callbacks
    SMO.init({smoStart: StartSMO, smoDS: setDatasourceToSMO});
    SmoEvent.raise(SmoEvent.ON_READY);
    //iniciamos valores del diseño
    //no hace falta y no debe hacerse, al usarse viewports
    //document.body.style.width=SMO.vars["ancho"]+"px";
    //document.body.style.height=SMO.vars["alto"]+"px";

    if (SMO.vars["BackVisible"] == 0) {
        document.body.style.backgroundColor = "rgba(255,255,255,0)";
    }

    //Para que se vea algo al ejecutar
    if (SMO.vars['ModoPresentacion'] != 5) {

        var data = {};
        data.xml = "<?xml version='1.0' encoding='utf-8'?><datasource><item id='673721'> <artist><![CDATA[Chris Zabriskie]]></artist><song><![CDATA[The temperature of the air on the bow of the kaleetan]]></song></item></datasource>";
        setDatasourceToSMO();
        //var intervalFlashDatasource = setInterval(setDatasourceToSMO, 5000);
    } else {
        
        LogUtils.write('SMO Iniciado. Params: ' + window.location.href, LogUtils.LEVEL_INFO);
        getLocalData();
    }

    //Solicitamos el fichero a procesar cada 5 segundos, por ejemplo, a la Salida_Pantalla.
}

function defaultVars() {
    SMO.vars["ModoPresentacion"] = 4;
    SMO.vars["alto"] = 1080;
    SMO.vars["ancho"] = 1920;
    SMO.vars["Lang"] = 'ES';
	SMO.vars["BackVisible"] = 1;
    SMO.vars["BackgroundColor"] = "#D17979";
    SMO.vars["RelojMaestro"] = 0;
    SMO.vars["editmode"] = 0;
	if(navigator.platform.substring(0, 3) == "Win" ){
		SMO.vars['LocalData'] = "C:/Deneva/resources/DenevaWeb/Static/NowPlaying.xml"
	} else {
		SMO.vars['LocalData'] = "NowPlaying.xml"
	}
}

function StartSMO() {

    LogUtils.write("Iniciado", LogUtils.LEVEL_DEBUG);

    if (SMO.vars['RelojMaestro'] == 1) {

        setInterval(function(){
            SmoEvent.raise(SmoEvent.ON_NEXT);
        }, 3600000);

    } else {
        //infinito
    }

}

function dataLoaded(nowPlaying) {

    LogUtils.write("(dataLoaded) Datos recargados", LogUtils.LEVEL_INFO);
	
    drawData(nowPlaying);

    SmoEvent.raise(SmoEvent.ON_READY);

}

function drawData(nowPlaying){
	
	//document.body.style.display = "block";
/*var timeoutDisplay = setTimeout(function(){
		console.log("Escondo la pagina");
		//document.body.removeAttribute("style");
		fadeOut(document.getElementsByClassName('fila1')[0]);
		//document.body.removeAttribute("style");
        //document.body.style.display = "none";
		
	}, 5000);*/
	
    LogUtils.write("(drawData) Pintando datos",LogUtils.LEVEL_INFO);
    document.getElementById("artist").innerHTML = "<span>&nbsp;" + nowPlaying.artist.toUpperCase() + "&nbsp; </span>";
    document.getElementById("song").innerHTML = nowPlaying.song.toUpperCase();
    document.getElementById("artist1").innerHTML = "<span>&nbsp;" + nowPlaying.artist.toUpperCase() + "&nbsp; </span>";
    document.getElementById("song1").innerHTML = nowPlaying.song.toUpperCase();
	fadeIn(document.getElementsByClassName('fila1')[0]);
    LogUtils.write("(drawData) Datos pintados",LogUtils.LEVEL_INFO);
	
}

function fadeIn(element) {
    if(element.style.opacity == 0){
		document.body.style.opacity = "";
		
		var color = hex2rgba(SMO.vars["BackgroundColor"]);
        var op = 0.1;  // initial opacity
        element.style.display = 'block';
        var timer = setInterval(function () {
            if (op >= 1){
                clearInterval(timer);
				op = 1;
            }
            element.style.opacity = op;
			if (SMO.vars["BackVisible"] == 1) {
				document.body.style.backgroundColor = "rgba(" + color.r + "," + color.g + "," + color.b + "," + op +")";
			}
			
            //element.style.filter = 'alpha(opacity=' + op * 100 + ")";
            op += op * 0.1;
        }, 50);
    }
}

function fadeOut(element) {
    if(element.style.opacity >= 1 ){

		var color = hex2rgba(SMO.vars["BackgroundColor"]);
        var op = 1;  // initial opacity
        
        var timer = setInterval(function () {
            if (op <= 0.01){
				element.style.display = 'none';
				op = 0;
				document.body.style.backgroundColor = "rgba(" + color.r + "," + color.g + "," + color.b + ",0)";
                clearInterval(timer);
            }
            element.style.opacity = op;
			document.body.style.backgroundColor = "rgba(" + color.r + "," + color.g + "," + color.b + "," + op +")";
            element.style.filter = 'alpha(opacity=' + op * 100 + ")";
            op -= op * 0.1;
        }, 30);
    }
}

function hex2rgba(c) {
  if (c[0] === '#') c = c.substr(1);
  var r = parseInt(c.slice(0,2), 16),
      g = parseInt(c.slice(2,4), 16),
      b = parseInt(c.slice(4,6), 16);
  var color = {};
  color.r = r;
  color.g = g;
  color.b = b;
  return color;
}

function setIdioma () {
	var idioma;
	var intIdioma;
	intIdioma = parseInt(SMO.vars["Lang"], 10);
	if (isNaN(intIdioma)) {
	    return SMO.vars["Lang"].toUpperCase();
	} else {
	    switch (intIdioma) {
	        case 5:
	            idioma = "AR";
	            break;
	        case 17:
	            idioma = "CA";
	            break;
	        case 22:
	            idioma = "DE";
	            break;
	        case 25:
	            idioma = "EN";
	            break;
	        case 27:
	            idioma = "ES";
	            break;
	        case 34:
	            idioma = "FR";
	            break;
	        case 51:
	            idioma = "IT";
	            break;
	        case 90:
	            idioma = "PT";
	            break;
	        case 156:
	            idioma = "PT-BR";
	            break;
	    }
	    return idioma;
	}
}

function setDatasourceToSMO() {

    //LogUtils.write("(setDatasourceToSMO) Datos recibidos: "+data,LogUtils.LEVEL_INFO);

    LogUtils.write("(setDatasourceToSMO) Recargando datos", LogUtils.LEVEL_INFO);

    var xmlDoc;

    var nowPlaying = {};
    nowPlaying.idioma = "ES"
    SMO.vars["Lang"] = nowPlaying.idioma;
    try {

        // busco el nombre del artista y la cancion
        var cancion = canciones[Math.floor(Math.random()*(canciones.length-1))]
		nowPlaying.infoText = textoInfo(nowPlaying.idioma);
        nowPlaying.artist = cancion.split("(")[1].split(")")[0];
        nowPlaying.song = cancion.split("(")[0];
        if (nowPlaying.artist != artistAnterior || nowPlaying.song != songAnterior){
            var i = 0;
            artistAnterior = nowPlaying.artist; 
            songAnterior = nowPlaying.song;
        }
        

    dataLoaded(nowPlaying);
	
    } catch (e) {
        LogUtils.write("(setDatasourceToSMO) Error al recargar datos", LogUtils.LEVEL_ERROR);
        LogUtils.write(e.message, LogUtils.LEVEL_ERROR);
    }
}

function loadCover(nowPlaying) {

    var urlWS = 'https://ws.audioscrobbler.com/2.0/?method=track.getInfo&api_key=b2846a3e0df7d35e0532f94ad1a4f967';
    var artistWS = nowPlaying.artist.split(' / ')[0].split(' ').join('%20').split('&').join('%26');
    var songWS = nowPlaying.song.split(' / ')[0].split(' ').join('%20').split('&').join('%26');
	var urlApi = urlWS+'&artist=' + artistWS + '&track=' + songWS;
	var urlCover = "img/album.svg";
	
	try{
		
		var xhttp = new XMLHttpRequest();
		
		
		xhttp.onreadystatechange = function () {
			if (xhttp.readyState == 4 && xhttp.status == 200)
			{
				try{
				var Covers = xhttp.responseXML.getElementsByTagName("album")[0].getElementsByTagName("image");
				var i;
				for (i = Covers.length -1; i >= 0; i--) {
					if (Covers[i].attributes.size.value == "extralarge" || Covers[i].attributes.size.value == "large") {
					urlCover = Covers[i].textContent;
					i=-1;
					}
				}
				
				nowPlaying.cover = urlCover;
				} catch (e) {
					urlCover = "img/album.svg";
				}
								
			}
		};
		
		xhttp.open("GET", urlApi , true);
		xhttp.send(null);
		
		
		
		
	} catch (e) {
		urlCover = "img/album.svg";
	}
	
	return urlCover;
}

function textoInfo(idioma){

    var salida;

    
            switch(idioma) {
                case "ES":
                    salida = "Está Sonando:";
                break;
                case "CA":
                    salida = "Està Sonant:";
                break;
                case "EN":
                    salida = "Now Playing:";
                break;
                case "PT":
                    salida = "Soando Agora:";
                break;
                case "PT-BR":
                    salida = "Soando Agora:";
                break;
                case "FR":
                    salida = "Sonnant Maintenant:";
                break;
                case "AR":
                    salida = "السبر الآن";
                break;
                case "DE":
                    salida = "Kling Jetzt:";
                    break;
                case "IT":
                    salida = "Suonando Ora:";
                    break;
                default:
                    salida = "Now Playing:";
                }
            
            return salida;
}
