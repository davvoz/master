import {
  Component,
  HostListener,
  ElementRef,
  ViewChild,
  AfterViewInit,
  NgZone
} from "@angular/core";
import { TimerService } from "./services/timer.service";
import { AnalizerService } from "./services/analizer.service";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements AfterViewInit {
  @ViewChild("analizer", { static: false }) analizer: ElementRef<
    HTMLCanvasElement
  >;
  private ctx: CanvasRenderingContext2D;

  pianoRolls = ["pR"];
  constructor(
    public myTimer: TimerService,
    public myAnalizer: AnalizerService
  ) {}
  ngAfterViewInit() {
    this.myAnalizer = new AnalizerService(this.myTimer);
    this.ctx = this.analizer.nativeElement.getContext("2d");
    //this.drawAnalizer();
  }
  add() {
    this.myTimer.addTrack();
    this.myTimer.steps = 0;
    this.pianoRolls.push("pR");
    this.drawAnalizer();
  }
  remove(index) {
    this.myTimer.removeTrack(index);
    this.pianoRolls.splice(index, 1);
  }
  onSearchChange(val) {
    this.myTimer.volume.gain.setValueAtTime(
      val,
      this.myTimer.audioContext.currentTime
    );
  }
  drawAnalizer() {
    this.myAnalizer.canvasCtx = this.ctx;
    this.myAnalizer.draw();
  }
}
