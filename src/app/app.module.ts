import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RecordingComponent } from './components/recording/recording.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RecordingsContainerComponent } from './components/recordings-container/recordings-container.component';
import { HttpClientModule } from '@angular/common/http';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { SongRequestComponent } from './components/song-request/song-request.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    RecordingComponent,
    NavbarComponent,
    RecordingsContainerComponent,
    SongRequestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule { 



}
