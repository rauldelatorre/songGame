var SMO = {

    version: "1.0.0",

    vars: [],

    id: "0",

    width: 0,

    height: 0,

    start: function () { },

    setDatasource: function (data) { },

    init: function init(obj) {

        //Lee las variables
        var hash;
        var hashes = window.location.href.slice(window.location.href.indexOf("?") + 1).split("&");
        for (var i = 0; i < hashes.length; i++) {
            hash = hashes[i].split("=");
            this.vars.push(hash[0]);
            this.vars[hash[0]] = decodeURIComponent(hash[1]);
        }

        this.id = (this.vars.hasOwnProperty("idSmo")) ? this.vars["idSmo"] : "";
        this.width = (this.vars.hasOwnProperty("ancho")) ? this.vars["ancho"] : 0;
        this.height = (this.vars.hasOwnProperty("alto")) ? this.vars["alto"] : 0;

        //Registra los callback
        for (var property in obj) {
            switch (property) {
                case "smoStart": this.start = obj[property]; break;
                case "smoDS": this.setDatasource = obj[property]; break;
            };
        }

        //Inicializo la interfaz de llamadas externas
        ExternalInterface.init();

        //Escribe las variables a log
        LogUtils.writeVars();
    }
};

var ExternalInterface = {

    init: function init() {
        window.onmessage = function (e) {

            

            if (e.data.target) {
                try {
                    var targets = e.data.target.split('.');
                    var fn = window;
                    var obj = window;
                    for (var i = 0; i < targets.length; i++) {
                        obj = fn;
                        fn = obj[targets[i]];
                    }
                    fn.call(obj, e.data.objData); // conservamos el valor de this
                } catch (e) {
                    //Si no ha podido llamar es porque no existe el entorno
                }
            }
        };
    },

    call: function call(target, objData) {
        try {
            parent.postMessage({ target: target, objData: objData, idSmo: SMO.id }, "*");
        } catch (e) {
            //Si no ha podido llamar es porque no existe el entorno
        }
    }
};

var SmoEvent = {

    ON_READY: "onSmoReady",
    ON_LOAD: "onSmoLoad",

    raise: function raise(type) {
        ExternalInterface.call('Dnv.smoCallbacks.' + type);
    }
};

//Función donde solicitamos el fichero que tengamos que procesar.
function getLocalData() {
    LogUtils.write("(getLocalData) Solicitando datos. Fichero=" + SMO.vars['LocalData'], LogUtils.LEVEL_INFO);
    ExternalInterface.call("Dnv.smoCallbacks.getFile", SMO.vars['LocalData']);
}

//Función donde solicitamos el fichero que tengamos que procesar.
function getFlashDatasource() {
    LogUtils.write("(getFlashDatasource) Solicitando datos. Fichero=" + SMO.vars['url'], LogUtils.LEVEL_INFO);
    ExternalInterface.call("Dnv.smoCallbacks.getFile", SMO.vars['url']);
}

//Función donde solicitamos el fichero que tengamos que procesar.
function urlNext() {
    LogUtils.write("(urlNext) urlNext", LogUtils.LEVEL_INFO);
    ExternalInterface.call("Dnv.smoCallbacks.urlNext");
}



var LogUtils = {

    LEVEL_DEBUG: 0,
    LEVEL_INFO: 1,
    LEVEL_WARN: 2,
    LEVEL_ERROR: 3,
    LEVEL_FATAL: 4,

    //Sólo se puede llamar tras escribir en las vars
    writeVars: function writeVars() {
        var out = "";
        for (var id in SMO.vars)
            out += id + "-" + SMO.vars[id] + "&";
        if (out != "")
            this.write(out);
    },

    write: function write(msg, level) {
        if (SMO.vars["ModoPresentacion"] == "5") {
            level = typeof level !== 'undefined' ? level : this.LEVEL_DEBUG;

            msg = document.title + "][" + msg; //Agrego el nombre del SMO
            ExternalInterface.call("Dnv.smoCallbacks.smoLog", { txt: msg, level: level });
        } else { }
    }
};