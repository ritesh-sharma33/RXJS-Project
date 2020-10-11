import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HeaderComponent } from './includes/header/header.component';
import { PromiseComponent } from './promise/promise.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { ObservableComponent } from './observable/observable.component';
import { FromEventComponent } from './observable/from-event/from-event.component';
import { ListComponent } from './observable/list/list.component';
import { DesignUtilityService } from './appServices/design-utility.service';
import { IntervalComponent } from './observable/interval/interval.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, AppRoutingModule ],
  declarations: [ AppComponent, HelloComponent, HeaderComponent, PromiseComponent, ObservableComponent, FromEventComponent, ListComponent, IntervalComponent ],
  bootstrap:    [ AppComponent ],
  providers: [DesignUtilityService]
})
export class AppModule { }