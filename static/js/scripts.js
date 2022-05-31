ResTemp=0;
ResPeso=0;
ResAltura=0;
ResImc=0;
ResO2Sat=0;

// Create a client instance
client = new Paho.MQTT.Client("test.mosquitto.org", 8080, "myclientid_" + parseInt(Math.random() * 100, 10))
client.onConnectionLost = onConnectionLost;
client.onMessageArrived = onMessageArrived;
client.connect({ onSuccess: onConnect });

function onConnect() {
    console.log("CONECTADO")
    console.log("onConnect");
    client.subscribe("Cabina/IoMT/Datos");
    message = new Paho.MQTT.Message("SE HA ESTABLECIDO LA CONEXIÓN");
    console.log("SE HA ESTABLECIDO LA CONEXIÓN")
    message.destinationName = "Cabina/IoMT/Conexion";
    client.send(message);
	
}

// called when the client loses its connection
function onConnectionLost(responseObject) {
    if (responseObject.errorCode !== 0) {
        console.log("Conexión Perdida:" + responseObject.errorMessage);
    }
}

// called when a message arrives
function onMessageArrived(message) {
	sms=(message.payloadString);
	console.log(sms);
	VectorDatos=sms.split(";")
	ResTemp=VectorDatos[0];
	ResPeso=VectorDatos[1];
	ResAltura=VectorDatos[2];
	ResImc=VectorDatos[3];
	ResO2Sat=VectorDatos[4];
}
	  


//EXPORTAR
//----------------------------------------------------------------------------------
//----------------------------------------------------------------------------------
//EXPORTAR
//----------------------------------------------------------------------------------
//----------------------------------------------------------------------------------
function Exportar()
{      
    var textToWrite = document.getElementById("historial").innerHTML;
    var textFileAsBlob = new Blob([textToWrite], {type:'text/plain'});
    var NombreGuardar = "Embebidos - Historial de Sensores.txt";
    var downloadLink = document.createElement("a");
	
    downloadLink.download = NombreGuardar;
    downloadLink.innerHTML = "My Hidden Link";

    window.URL = window.URL || window.webkitURL;
    downloadLink.href = window.URL.createObjectURL(textFileAsBlob);
    downloadLink.onclick = destroyClickedElement;
    downloadLink.style.display = "none";
    document.body.appendChild(downloadLink);
    downloadLink.click();
}
/*     function Capturar()///////////////////
{
    var obtenernombre= document.getElementById("nombre").value; 
    var obtenerapellido= document.getElementById("apellido").value; 
    var obtenercurso= document.getElementById("curso").value; 
    var ruta=(obtenernombre +"/"+ obtenerapellido +"/"+"obtenercurso");
    var ruta1=("https://github.com/daniels36999/IoMT-BD/blob/main/Datos%20Almacenados/"+obtenercurso+"/"+obtenernombre+"%20"+obtenerapellido+".xlsx?raw=true");
	document.getElementById("sensor1").value=ruta1;


	const downloadInstance = document.createElement('a');
	downloadInstance.href = ruta1;
	downloadInstance.download = 'siuuu';
	document.body.appendChild(downloadInstance)
	downloadInstance.click();
	document.body.removeChild(downloadInstance);
      

		} */

jQuery(function($){

'use strict';


    /* ---------------------------------------------- /*
     * Countdown
    /* ---------------------------------------------- */

    (function () {
      // Countdown
    	// To change date, simply edit: var endDate = January 26, 2016 20:39:00";
    	$(function() {
    	  var endDate = "January 26, 2050 20:39:00";
    	  $('.tk-countdown .row').countdown({
    		date: endDate,
    		render: function(data) {
    		  $(this.el).html('<div><div class="days"><span>' + this.leadingZeros(ResTemp, 4) + '</span><span>Temperatura [°C]</span></div><div class="hours"><span>' + this.leadingZeros(ResPeso, 4) + '</span><span>Peso [Kg]</span></div></div><div class="tk-countdown-ms"><div class="minutes"><span>' + this.leadingZeros(ResAltura, 4) + '</span><span>Estatura [m]</span></div><div class="seconds"><span>' + this.leadingZeros(ResImc, 4) + '</span><span>IMC [Kg/m^2]</span></div></div><div><div class="days"><span>' + this.leadingZeros(ResO2Sat, 4) + '</span><span>O2Sat [%]</span></div>');
    		}
    	  });
    	});	
    }());


    /* ---------------------------------------------- /*
     * Preloader
    /* ---------------------------------------------- */
    
    (function () {
        $(window).load(function() {
            $('#pre-status').fadeOut();
            $('#st-preloader').delay(350).fadeOut('slow');
        });
    }());



    /* ---------------------------------------------- /*
     * Ajax Forms
    /* ---------------------------------------------- */

    (function () {
        // E-mail validation via regular expression
        function isValidEmailAddress(emailAddress) {
          var pattern = new RegExp(/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i);
          return pattern.test(emailAddress);
        };

    	// Ajax mailchimp
        // Example MailChimp url: http://xxx.xxx.list-manage.com/subscribe/post?u=xxx&id=xxx
        $('#subscribe').ajaxChimp({
          language: 'es',
          url: 'http://xxx.xxx.list-manage.com/subscribe/post?u=xxx&id=xxx'
        });

        // Mailchimp translation
        //
        // Defaults:
        //'submit': 'Submitting...',
        //  0: 'We have sent you a confirmation email',
        //  1: 'Please enter a value',
        //  2: 'An email address must contain a single @',
        //  3: 'The domain portion of the email address is invalid (the portion after the @: )',
        //  4: 'The username portion of the email address is invalid (the portion before the @: )',
        //  5: 'This email address looks fake or invalid. Please enter a real email address'

        $.ajaxChimp.translations.es = {
          'submit': 'Submitting...',
          0: '<i class="fa fa-check"></i> We will be in touch soon!',
          1: '<i class="fa fa-warning"></i> You must enter a valid e-mail address.',
          2: '<i class="fa fa-warning"></i> E-mail address is not valid.',
          3: '<i class="fa fa-warning"></i> E-mail address is not valid.',
          4: '<i class="fa fa-warning"></i> E-mail address is not valid.',
          5: '<i class="fa fa-warning"></i> E-mail address is not valid.'
        }

    }());

	
});