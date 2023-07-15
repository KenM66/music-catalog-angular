import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RequestService } from 'src/app/services/request.service';

@Component({
  selector: 'app-song-request',
  templateUrl: './song-request.component.html',
  styleUrls: ['./song-request.component.css']
})
export class SongRequestComponent {

  form!: FormGroup;

  email!: string;
  title!: string;
  artist!: string;
  message!: string;

  constructor(private formBuilder: FormBuilder, private requestService: RequestService, private router: Router){
    
  }

  ngOnInit(){
    this.form= this.formBuilder.group({
      email:[null, [Validators.required, Validators.email]],
      title:[null, [Validators.required]],
      artist:[null, [Validators.required]],
      message:[null, [Validators.required]],
     
      
    })
  }

  onSubmit(){
    var email= (<HTMLInputElement>document.getElementById('senderEmail')).value;
    var title=  (<HTMLInputElement>document.getElementById('title')).value;
    var artist= (<HTMLInputElement>document.getElementById('artist')).value;
    var message= (<HTMLInputElement>document.getElementById('message')).value;

    console.log(email+" "+title+" "+artist+" "+message)

    this.requestService.sendRequest(title, artist, message, email).subscribe(
      data=>{
        (console.log(data));
        alert(data);
        this.router.navigate(['/']);
      }
      
    );


   }



}
