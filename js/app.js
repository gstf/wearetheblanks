document.addEventListener("DOMContentLoaded", function() {
  if ((new URL(window.location)).searchParams.get('code')) {

  } else {
    let listen = document.getElementById('listen');
    listen.parentNode.removeChild(listen);
  }
});