function save_options() {
  var select_option = document.getElementById("status");
  if(select_option.checked){
    status_data = "enabled";
  }
  else{
    status_data ="not-enabled";
  }
  
  chrome.storage.local.set({"status_data": status_data}, function() {
    alert("MotherFokus saved..");
  });
  
}

function restore_options() {
  var status_motherfokus = localStorage.statusmotherfokus;
  
  chrome.storage.local.get("status_data", function(r){
    var select_option = document.getElementById("status");
    if(!r.status_data){
      select_option.checked = true;
    }
    if(r.status_data=="not-enabled"){
      select_option.checked = false;
    }
    else{
      select_option.checked = true;
    }
  });
  
}

document.querySelector('#status').addEventListener('click', save_options);
document.addEventListener('DOMContentLoaded', restore_options);