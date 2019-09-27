import { Injectable } from "@angular/core";
import { TimerService } from "./timer.service";

@Injectable()
export class AnalizerService {
  analyser;
  bufferLength;
  dataArray;
  drawVisual;
  constructor(public myTimer: TimerService) {
    this.analyser = this.myTimer.audioContext.createAnalyser();
    this.analyser.fftSize = 2048;
    this.bufferLength = this.analyser.frequencyBinCount;
    this.dataArray = new Uint8Array(this.bufferLength);
    this.analyser.getByteTimeDomainData(this.dataArray);
  }

  draw(canvasCtx) {
    this.drawVisual = requestAnimationFrame(this.draw);

    this.analyser.getByteTimeDomainData(this.dataArray);

    canvasCtx.fillStyle = "rgb(200, 200, 200)";
    canvasCtx.fillRect(0, 0, 10, 10);

    canvasCtx.lineWidth = 2;
    canvasCtx.strokeStyle = "rgb(0, 0, 0)";

    canvasCtx.beginPath();

    var sliceWidth = (10 * 1.0) / this.bufferLength;
    var x = 0;

    for (var i = 0; i < this.bufferLength; i++) {
      var v = this.dataArray[i] / 128.0;
      var y = (v * 10) / 2;

      if (i === 0) {
        canvasCtx.moveTo(x, y);
      } else {
        canvasCtx.lineTo(x, y);
      }

      x += sliceWidth;
    }

    canvasCtx.lineTo(100, 20 / 2);
    canvasCtx.stroke();
  }
}
