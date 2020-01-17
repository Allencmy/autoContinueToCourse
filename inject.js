function autoClick () {
  var btn = document.querySelector('#dvWarningView .btnok');
  console.log('btn', btn);

  btn && btn.click();
}


setInterval(function() {
  autoClick();
}, 3000);
