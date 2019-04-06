import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.scss']
})
export class BuscarComponent implements OnInit {

  artistas:any [] = [];

  constructor( private spotifyservice:SpotifyService) { }

  ngOnInit() {
  }

  buscar(termino:string){ // metodo para buscar artistas en la data que envia el servcio(enviar termino)
   console.log(termino)
    this.spotifyservice.getArtista(termino)
      .subscribe( (data:any) => {
        console.log(data);
        this.artistas = data;
        
      })
    
  }

}
