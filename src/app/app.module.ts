import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SoundService } from './services/sound.service';
import { TimerService } from './services/timer.service';
import { TimerMonitorComponent } from './timer-monitor/timer-monitor.component';
import { SpeedControlComponent } from './speed-control/speed-control.component';
import { PianoRollComponent } from './piano-roll/piano-roll.component';
import { StartStopComponent } from './start-stop/start-stop.component';
import { SamplesLibraryService } from './services/samples-library.service';
import { PianoRollSamplerComponent } from './piano-roll-sampler/piano-roll-sampler.component';
import { SamplerService } from './services/sampler.service';
import { ChannelMergerService } from './services/channel-merger.service';
import { AnalizerService } from './services/analizer.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, TimerMonitorComponent, SpeedControlComponent, PianoRollComponent, StartStopComponent, PianoRollSamplerComponent ],
  bootstrap:    [ AppComponent ],
  providers: [SoundService, TimerService, SamplesLibraryService, SamplerService, ChannelMergerService, ChannelMergerService, AnalizerService]
})
export class AppModule { }
