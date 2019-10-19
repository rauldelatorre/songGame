/*
 * Demo of https://github.com/isuttell/sine-waves
 */

var waves = new SineWaves({
  el: document.getElementById('waves'),
  
  speed: 5,
  
  width: function() {
    return ($(window).width());
  },
  
  height: function() {
    return ($(window).height())*0.2;
  },
  
  ease: 'Sine',
  
  wavesWidth: '120%',
  
  waves: [
    {
      timeModifier: 1,
      lineWidth: 1.5,
      amplitude: -25,
      wavelength: 200
	  
    },
    {
      timeModifier: 1,
      lineWidth: 1.5,
      amplitude: -25,
      wavelength: 400
    },
    {
      timeModifier: 2.5,
      lineWidth: 1.5,
      amplitude: -20,
      wavelength: 200
    }
  ],
 
  // Called on window resize
  resizeEvent: function() {
    var gradient = this.ctx.createLinearGradient(0, 0, this.width, 0);
    gradient.addColorStop(0,"rgba(255, 255, 255, 0.8)");
    gradient.addColorStop(0.5,"rgba(255, 255, 255, 0.6)");
    gradient.addColorStop(1,"rgba(255, 255, 255, 0.8)");
    
    var index = -1;
    var length = this.waves.length;
	  while(++index < length){
      this.waves[index].strokeStyle = gradient;
    }
    
    // Clean Up
    index = void 0;
    length = void 0;
    gradient = void 0;
  }
});