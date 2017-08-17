declare const google: any;
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss']
})
export class LocationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.initMap();
  }

  initMap() {
    const uluru = {lat: -0.201561, lng: -78.4310699};
    const map = new google.maps.Map(document.getElementById('map'), {
      zoom: 18,
      center: uluru
    });
    const marker = new google.maps.Marker({
      animation: google.maps.Animation.DROP,
      position: uluru,
      map: map,
      icon: './mapicon.png',
      title: 'El Palacio de la Fritada'
    });
    const contentString = '<h3 id="firstHeading" class="firstHeading">El Palacio de la Fritada</h3>' +
                                          '<p>Encuentranos en Salinas y Maria Angelica Hidrobo, cerca del Parque de Cumbaya.</p>' +
                                          '<p>Te Esperamos!</p>';
    const infowindow = new google.maps.InfoWindow({
      content: contentString,
      maxWidth: 200
    });
    marker.addListener('click', () => {
      if (marker.getAnimation() !== null) {
        marker.setAnimation(null);
      } else {
        marker.setAnimation(google.maps.Animation.BOUNCE);
      }
      infowindow.open(map, marker);
    });
  }

}
