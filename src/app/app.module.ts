import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RecordingComponent } from './components/recording/recording.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RecordingsContainerComponent } from './components/recordings-container/recordings-container.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    RecordingComponent,
    NavbarComponent,
    RecordingsContainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 



}
