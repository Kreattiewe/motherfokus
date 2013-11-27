/*

Kreattiewe Inc - 2013

El equipo de desarrolladores de Kreattiewe estaba cansado de perder tiempo
en facebook, asi que creamos esta pendejada para simplemente bloquear la pagina 
principal de facebook, y enfocarnos en programar.

Programming, Motherfucker
Do you speak it?
http://programming-motherfucker.com/

*/
if (window.location.hostname == "www.facebook.com") {
	chrome.storage.local.get("status_data", function(r){
	  if(!r.status_data){
	    window.location = 'http://kreattiewe.co/motherfokus';
	  }
	  
	  if(r.status_data!="not-enabled"){
	  	window.location = 'http://kreattiewe.co/motherfokus';
	  }  
	});
}

