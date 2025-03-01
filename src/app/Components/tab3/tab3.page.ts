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
    personajes_episodio: any[] = [];
    episodiosImagenes: any[] = [];

    constructor(private data: RickyMortyServiceService) {}

    ngOnInit() {
        this.cargarEpisodios();
    }

    async cargarEpisodios() {
        //  Cargar JSON con las imágenes primero
        this.data.getEpisodiosConImagenes().subscribe((resp: any) => {
            console.log('JSON de imágenes cargado:', resp);
            this.episodiosImagenes = resp.episodes; //el json pasa a ser arreglo

            


            // Ahora que el JSON está listo, cargar los episodios de la API
            this.data.getEpisodios().toPromise().then(async (resp: any) => {
                this.episodios = resp.results;
                console.log('Episodios cargadosjj:', this.episodios);

                // Asignar imágenes a los episodios
            
                for (let i = 0; i < this.episodios.length; i++) {
                  const episodio = this.episodios[i];
                  const imagenData = this.episodiosImagenes.find(img => img.name === episodio.name); //img.name nombre del episodio de episodiosImagenes
                  console.log('ImagenData:', imagenData);
                  
                                         
                  if (imagenData) { //si no es indefinido entonces asignar la imagen
                      episodio.image_url = imagenData.image_url; //si hay conincidencia entonces de imagenData se toma su image_url y se le asigna al episodio
                      episodio.overview = imagenData.overview;
                      console.log('Imagen asignada:', episodio); 
                  } else {
                      episodio.image_url = 'assets/img/default-image.jpg';
                  }
              
                  console.log(`Imagen asignada a ${episodio.name}: ${episodio.image_url}`);
              }


              

                // Asignar personajes a cada episodio
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
