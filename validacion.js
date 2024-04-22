

function enviarMensaje() {
    var from = document.getElementById('from').value||'';
  var subject = document.getElementById('subject').value||'';
  var message = document.getElementById('message').value||'';
  var name_form = document.getElementById('name_form').value||'';
if(!from||!subject||!message||!name_form){
    return;
}
    Email.send({
    Host : "smtp.elasticemail.com",
    Username : "",
    Password : "",
    To : 'raquelmoreno_g@hotmail.com',
    From : from,
    Subject : subject,
    Body : message+'<br/>'+name_form
}).then(
  message => alert("Gracias por contactarme !")
);
}