import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-recording',
  templateUrl: './recording.component.html',
  styleUrls: ['./recording.component.css']
})
export class RecordingComponent {
  @Input()
  song!: string;
}
