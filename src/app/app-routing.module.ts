import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RecordingsContainerComponent } from './components/recordings-container/recordings-container.component';

const routes: Routes = [
  {path: '', component: NavbarComponent, children:[
    {path: '', component: RecordingsContainerComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
