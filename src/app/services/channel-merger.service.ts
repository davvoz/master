import { Injectable } from '@angular/core';
import { PianoRollComponent } from '../piano-roll/piano-roll.component';

@Injectable()
export class ChannelMergerService {
  instruments = [];
  merger: ChannelMergerNode;
  constructor(public audioContext: AudioContext) {
    this.merger = audioContext.createChannelMerger(this.instruments.length);
  }
  addInstruments(osc: OscillatorNode) {
    this.instruments.push(osc)
  }
  private connectInstrumentToMerger(osc: OscillatorNode) {
    osc.connect(this.merger , 0, 0);
    osc.connect(this.merger , 0, 1);
  }

  private connectMergerToDestination() {
    this.merger.connect(this.audioContext.destination, 0, 0);
  }
}