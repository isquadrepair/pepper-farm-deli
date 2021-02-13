import { Component, h, State } from '@stencil/core';
import { apiUrl, fetchData } from '../../global/app';
@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css',
})
export class AppHome {
  @State() restaurant: any;
  getRestaurant() {
    fetchData('/pages/1').then(data => (this.restaurant = data));
  }
  componentWillLoad() {
    setTimeout(() => {
      this.getRestaurant();
    }, 1000);
  }
  render() {
    return [
      <ion-header>
        <ion-toolbar color="primary">
          <ion-title>Pepper Farm Deli</ion-title>
        </ion-toolbar>
      </ion-header>,

      <ion-content class="ion-padding">
        {this.restaurant && (
          <ion-card>
            <ion-card-header>
              <app-img src={apiUrl + this.restaurant.featured.url} />
              <ion-card-title>{this.restaurant.title}</ion-card-title>
            </ion-card-header>

            <ion-card-content>{this.restaurant.description}</ion-card-content>
          </ion-card>
        )}

        <ion-button href="/profile/ionic" expand="block">
          Profile page
        </ion-button>
      </ion-content>,
    ];
  }
}
