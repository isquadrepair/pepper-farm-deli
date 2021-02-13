import { Component, h } from '@stencil/core';
import { AppRoutes } from './AppRoutes';

//import { menuItems } from '../../global/routes';
@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css',
})
export class AppRoot {
  render() {
    let pages = (window as any).__PAGES__;

    return (
      <ion-app>
        <ion-router useHash={false}>
          <ion-route url="/:slug" component="app-home" />
          <ion-route url="/profile/:name" component="app-profile" />
         {/* {pages&&  <AppRoutes routes={pages} />} */}
        </ion-router>
        <app-layout paneDisabled={false}>
          <ion-nav />
        </app-layout>
      </ion-app>
    );
  }
}
