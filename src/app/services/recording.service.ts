import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RecordingService {

  URL: string= 'http://localhost:8080/'
  constructor(
    private http: HttpClient
  ) { }

  getAllRecordings(){
    return this.http.get("https://music-catalog-production.up.railway.app/api/recordings")
  }

  getRecordingsByTitle= (title: string)=>{
    return this.http.get(`https://music-catalog-production.up.railway.app/api/recordings-by-title/${title}`);
  }

  getRecordingsByArtist(artist: string){
    return this.http.get(`https://music-catalog-production.up.railway.app/api/recordings-by-artist/${artist}`)
  }

  getRecordingsByGenre(genre: string){
    return this.http.get(`https://music-catalog-production.up.railway.app/api/recordings-by-genre/${genre}`)
  }
  
}
