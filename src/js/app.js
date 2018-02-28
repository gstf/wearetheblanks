let code = (new URL(window.location)).searchParams.get('code');

document.addEventListener("DOMContentLoaded", function() {
  if (code) {
    let listenAll = document.getElementById('listen-all');
    listenAll.parentNode.removeChild(listenAll);
  } else {
    let listen = document.getElementById('listen');
    listen.parentNode.removeChild(listen);
  }
});


(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

if (location.hostname !== 'localhost' && location.hostname !== '127.0.0.1') {
  ga('create', 'UA-114748144-1', 'auto');
  ga('send', 'pageview');
}
