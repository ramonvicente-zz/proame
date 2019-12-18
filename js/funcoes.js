// Wait for PhoneGap to load
document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
    // alert("deviceready");
    document.getElementById('exitApp').addEventListener('click', function() {
    	console.log("vem tranquilo");
        navigator.app.exitApp();
    });
}

function exitFromApp(){
   console.log("Fechando Aplicação");
   navigator.app.exitApp();
}

