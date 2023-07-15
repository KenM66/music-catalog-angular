import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RecordingsContainerComponent } from './components/recordings-container/recordings-container.component';
import { SongRequestComponent } from './components/song-request/song-request.component';

const routes: Routes = [
  {path: '', component: NavbarComponent, children:[
    {path: '', component: RecordingsContainerComponent},
    {path: 'request', component: SongRequestComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
