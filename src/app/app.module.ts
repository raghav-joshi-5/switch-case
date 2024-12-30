import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TabSwitchComponent } from './shared/component/tab-switch/tab-switch.component';
import { RefactedTabSwitchComponent } from './shared/component/refacted-tab-switch/refacted-tab-switch.component';

@NgModule({
  declarations: [
    AppComponent,
    TabSwitchComponent,
    RefactedTabSwitchComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
