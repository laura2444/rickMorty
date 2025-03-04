import { Component } from '@angular/core';
import { RickyMortyServiceService } from 'src/app/services/ricky-morty-service.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  standalone: false,
})
export class Tab3Page {


  
  episodios: any[] = [];
  episodiosImagenes: any[] = [];

  // Opciones del carrusel
  slideOpts = {
    initialSlide: 0,
    speed: 400,
    spaceBetween: 10,
    slidesPerView: 1,  // Ajusta según el tamaño de pantalla
    breakpoints: {
      768: { slidesPerView: 2 }, // En tablets se muestran 2 episodios
      1024: { slidesPerView: 3 } // En pantallas más grandes, 3 episodios
    }
  };

  constructor(private data: RickyMortyServiceService) {}

  ngOnInit() {
    this.cargarEpisodios();
  }

  async cargarEpisodios() {
    this.data.getEpisodiosConImagenes().subscribe((resp: any) => {
      this.episodiosImagenes = resp.episodes;
      this.data.getEpisodios().toPromise().then(async (resp: any) => {
        this.episodios = resp.results;

        // Asignar imágenes a los episodios
        this.episodios.forEach((episodio) => {
          const imagenData = this.episodiosImagenes.find(img => img.name === episodio.name);
          episodio.image_url = imagenData ? imagenData.image_url : 'assets/img/imagen-predeterminada.jpg';
          episodio.overview = imagenData ? imagenData.overview : 'Descripción no disponible';
        });

        // Cargar personajes de cada episodio
        for (let episodio of this.episodios) {
          episodio.personajes_episodio = [];
          for (let personaje of episodio.characters) {
            const personajeResp: any = await this.data.getPersonajeEpisodio(personaje).toPromise();
            episodio.personajes_episodio.push(personajeResp);
          }
        }
      });
    });
  }
}
