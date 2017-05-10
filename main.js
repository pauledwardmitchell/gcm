$(document).ready(function(){

  var controller = new ScrollMagic.Controller();

  var ourScene = new ScrollMagic.Scene({
    triggerElement: '#program002',
    duration: '80%',
    triggerHook: .4,
    reverse: true
  })
  .setClassToggle('#program002', 'visible')
  .addIndicators({
    name: 'fade-square',
    colorTrigger: 'black',
    colorStart: 'black',
    colorEnd: 'red'
  })
  .addTo(controller);

});
