import { Component, HostListener, ElementRef, ViewChild, AfterViewInit, NgZone } from '@angular/core';
import { TimerService } from './services/timer.service';
import { AnalizerService } from './services/analizer.service';


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 @ViewChild('canvas', { static: false }) analizer: ElementRef<HTMLCanvasElement>;
  pianoRolls = ['pR'];
  constructor(public myTimer: TimerService,public analizerService) {

  }
  add() {
    this.myTimer.addTrack();
    this.myTimer.steps = 0;
    this.pianoRolls.push('pR');
  }
  remove(index) {
    this.myTimer.removeTrack(index);
    this.pianoRolls.splice(index,1);
  }
  onSearchChange(val){
    this.myTimer.volume.gain.setValueAtTime(val,this.myTimer.audioContext.currentTime);
  }
  drawAnalizer(){

  }
}
