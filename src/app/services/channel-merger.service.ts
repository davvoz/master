import { Injectable } from '@angular/core';
import { TimerService } from '../services/timer.service';


@Injectable()
export class ChannelMergerService {
  instruments = [];
  merger: ChannelMergerNode;
  constructor(public ts: TimerService) {
    this.merger = this.ts.audioContext.createChannelMerger(16);
  }
  addInstruments(osc: OscillatorNode) {
    this.instruments.push(osc)
  }
  private connectInstrumentToMerger(osc: OscillatorNode) {
    osc.connect(this.merger, 0, 0);
    osc.connect(this.merger, 0, 1);
  }

  private connectMergerToDestination() {
    this.merger.connect(this.ts.audioContext.destination, 0, 0);
  }
}