import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { Recording } from 'src/app/classes/Recording';
import { RecordingService } from 'src/app/services/recording.service';

@Component({
  selector: 'app-recordings-container',
  templateUrl: './recordings-container.component.html',
  styleUrls: ['./recordings-container.component.css']
})
export class RecordingsContainerComponent implements OnInit {

 
  recordings!: Recording[] | any;
  isFiltered!: boolean;

  value!: string|any;

  searchBy!: string;

  constructor(
    private recordingService: RecordingService
  ){}

  ngOnInit(): void {
    this.recordings= [];
    this.getAllRecordings(0);
    this.searchBy= "title";
    this.isFiltered= false;
    
  }


  checkStatus(event:any){

    if(event.target.checked=== true){
        this.searchBy= event.target.value;
        console.log(this.searchBy);
    }

  }


   

   filterSearch=  (event: any)=>{
    
    console.log(event.target.value);
    if(event.target.value.length===0){
      this.isFiltered=false;
      this.getAllRecordings(0);
    }
    else{
      this.isFiltered=true;
      console.log(this.isFiltered);
      console.log(this.recordings);
      

      
      
    }

   

    if(this.searchBy==="title" && event.target.value.length > 0){
      (this.recordingService.getRecordingsByTitle(event.target.value))
      .subscribe((response: any)=>{

       

        console.log(response);
        
        this.recordings= response;

        this.sortByTitle();
        
      });

    
      

    }
    else if(this.searchBy==="artist" && event.target.value.length>0){

      console.log("Searching by artist");

      this.recordingService.getRecordingsByArtist(event.target.value)
      .subscribe((response: any)=>{
          console.log(response);

          this.recordings= response;

          this.sortByTitle();
      })

    }
    else if(this.searchBy==="genre" && event.target.value.length>0){
      console.log("searching by genre")

      this.recordingService.getRecordingsByGenre(event.target.value)
      .subscribe((response: any)=>{
          console.log(response);

          this.recordings= response;

          this.sortByTitle();
      })


    }
   

    
   
    
  }



  getAllRecordings(number: number){
   
    this.recordingService.getAllRecordings()
    .subscribe(
      response=>{
        console.log(response);
        this.recordings= response;
       
    
       
     
         if(number===0){
          this.recordings.sort((a:any, b:any)=>
          a.title.localeCompare(b.title)
        )
        }
        

         if(number===1){
          this.recordings.sort((a:any, b:any)=>
          a.artist.localeCompare(b.artist)
        )

        }
      

        if(number==2){
          this.recordings.sort((a:any, b:any)=>
          a.genre.localeCompare(b.genre)
        )
     
         }
       
      } 
      
    )
    
   
  
  }

  sortByTitle(){
    console.log(this.recordings);
    if(!this.isFiltered){
      this.getAllRecordings(0);
    }
    else{
      //console.log("You are filtered");
      
      this.recordings.sort((a:any, b:any)=>
          a.title.localeCompare(b.title)
        )
     // this.getAllRecordings(0);
    }
   


  }

  sortByArtist(){
    if(!this.isFiltered){
      this.getAllRecordings(1);
    }
    else{
      this.recordings.sort((a:any, b:any)=>
          a.artist.localeCompare(b.artist)
        )
    }
   

    
  }

  sortByGenre(){
    if(!this.isFiltered){
      this.getAllRecordings(2);
    }
    else{
      this.recordings.sort((a:any, b:any)=>
      a.genre.localeCompare(b.genre)
    )
 
    }
   
  }

 

}
