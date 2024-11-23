import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  map!: L.Map; // Aquí usamos el operador !

  constructor(public logout:AuthService) { }
  user:any;
  async ngOnInit() {
    this.loadMap();
     this.user=await this.logout.getUser();
  }

  loadMap() {
    // Inicializar el mapa centrado en San Bernardo, Chile
    this.map = L.map('map').setView([-33.593, -70.699], 13);
  
    // Añadir un tile layer de OpenStreetMap
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors'
    }).addTo(this.map);
  
    // Agregar un marcador en San Bernardo
    L.marker([-33.593, -70.699]).addTo(this.map)
      .bindPopup('San Bernardo, Chile.')
      .openPopup();
  }

  startRoute() {
    console.log('Ruta iniciada');
    // Lógica para iniciar la ruta
  }

  searchRoute() {
    console.log('Buscar ruta');
    // Lógica para buscar la ruta
  }
  async cerrarsesion(){
    await this.logout.logOut();
  }
}
