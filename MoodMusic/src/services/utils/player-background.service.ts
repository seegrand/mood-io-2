import { Injectable } from '@angular/core';

@Injectable()
export class PlayerBackgroundService {

  // Gradient state
  step: number = 0;

  // Gradient speed
  gradientSpeed: number = 0.01;

  constructor() {}

  swirlBackground(gradientState: number) {
    var colors = new Array(
      [62, 35, 255], [60, 255, 60], [255, 35, 98], [45, 175, 230], [255, 0, 255], [255, 128, 0]);


    if (gradientState) {
      this.step = gradientState;
    }

    //color table indices for:
    // current color left
    // next color left
    // current color right
    // next color right
    var colorIndices = [0, 1, 2, 3];

    function updateGradient(step: number) {

      if (document === undefined) return;

      var c0_0 = colors[colorIndices[0]];
      var c0_1 = colors[colorIndices[1]];
      var c1_0 = colors[colorIndices[2]];
      var c1_1 = colors[colorIndices[3]];

      var istep = 1 - step;
      var r1 = Math.round(istep * c0_0[0] + step * c0_1[0]);
      var g1 = Math.round(istep * c0_0[1] + step * c0_1[1]);
      var b1 = Math.round(istep * c0_0[2] + step * c0_1[2]);
      var color1 = "rgb(" + r1 + "," + g1 + "," + b1 + ")";

      var r2 = Math.round(istep * c1_0[0] + step * c1_1[0]);
      var g2 = Math.round(istep * c1_0[1] + step * c1_1[1]);
      var b2 = Math.round(istep * c1_0[2] + step * c1_1[2]);
      var color2 = "rgb(" + r2 + "," + g2 + "," + b2 + ")";

      document.getElementById('gradient').style.background = "-webkit-gradient(linear, left top, right bottom, from(" + color1 + "), to(" + color2 + "))"; /* Chrome and Safari */
      document.getElementById('gradient').style.background = "-webkit-linear-gradient(left top, " + color1 + ", " + color2 + ")"; /* Chrome and Safari */
      document.getElementById('gradient').style.background = "-moz-linear-gradient(left, " + color1 + " 0%, " + color2 + " 100%)"; /* Firefox */
      document.getElementById('gradient').style.background = "-o-linear-gradient(bottom right, " + color1 + ", " + color2 + ")"; /* For Opera 11.1 to 12.0 */
      document.getElementById('gradient').style.background = "linear-gradient(to bottom right, " + color1 + ", " + color2 + ")"; /* Standard syntax (must be last) */

      // $('#gradient').css({
      //    background: "-webkit-gradient(linear, left top, right top, from("+color1+"), to("+color2+"))"}).css({
      //    background: "-moz-linear-gradient(left, "+color1+" 0%, "+color2+" 100%)"
      //  });
    }

    return setInterval(() => {
      updateGradient(this.step);
      this.step += this.gradientSpeed;

      console.log(this.step);

      if (this.step >= 1) {
        this.step %= 1;
        colorIndices[0] = colorIndices[1];
        colorIndices[2] = colorIndices[3];

        //pick two new target color indices
        //do not pick the same as the current one
        colorIndices[1] = (colorIndices[1] + Math.floor(1 + Math.random() * (colors.length - 1))) % colors.length;
        colorIndices[3] = (colorIndices[3] + Math.floor(1 + Math.random() * (colors.length - 1))) % colors.length;
      }

    }, 100);
  }
}
