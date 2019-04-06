import { Component, OnInit } from '@angular/core';
import  { SpotifyService } from '../../services/spotify.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent  {

  nuevasCanciones : any[] = [];

  constructor( private spotifyservice:SpotifyService) { 

    this.spotifyservice.getNewReleases()
     .subscribe( (data: any ) => {
      this.nuevasCanciones = data;
    }); 
  } 
  

}
