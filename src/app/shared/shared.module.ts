import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TwimpCardComponent } from './twimp/twimp-card/twimp-card.component';
import { TweempusTwimpListComponent } from './twimp/twimp-list/tweempus-twimp-list.component';


@NgModule({
  declarations: [ TwimpCardComponent,TweempusTwimpListComponent ],
  imports: [
    CommonModule,
  ],
  exports: [TwimpCardComponent,TweempusTwimpListComponent]
})
export class SharedModule { }
