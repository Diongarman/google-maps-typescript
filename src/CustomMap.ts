//instuctions to every other class on how to
//be an argument to addMarker, or any other method that
//requires the Mappable interface to be implemented
export interface Mappable {
  location: {
    lat: number;
    lng: number;
  };
  colour: string;

  infoWindowContent(): string;
}

export class CustomMap {
  private googleMap: google.maps.Map;

  constructor(divId: string) {
    this.googleMap = new google.maps.Map(document.getElementById(divId), {
      center: { lat: 0, lng: 0 },
      zoom: 1,
    });
  }

  addMarker(mappable: Mappable): void {
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: mappable.location.lat,
        lng: mappable.location.lng,
      },
    });

    marker.addListener('click', () => {
      const infoWindow = new google.maps.InfoWindow({
        content: mappable.infoWindowContent(),
      });

      infoWindow.open(this.googleMap, marker);
    });
  }
}
