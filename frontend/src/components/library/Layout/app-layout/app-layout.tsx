import { Component, Host, h, Prop } from '@stencil/core';
//import { fetchData } from '../../../../global/app';
// import { menuItems } from '../../../../global/routes';

@Component({
  tag: 'app-layout',
  styleUrl: 'app-layout.css',
})
export class AppLayout {
  //@Prop() pageName: string;
  @Prop() paneDisabled;
  render() {
    let categories = (window as any).__CATEGORIES__;

    return (
      <Host>
        <ion-split-pane contentId="main-page" disabled={this.paneDisabled}>
          <ion-menu contentId="main-page" type="overlay" side="start">
            <ion-header>
              <ion-toolbar color="primary">
                <ion-title>Start Menu</ion-title>
              </ion-toolbar>
            </ion-header>
            <ion-content> {categories && <app-menu-items menuItems={categories} />}</ion-content>
          </ion-menu>
          <div class="ion-page" id="main-page">
            {categories && <app-nav menuItems={categories}></app-nav>}
            <ion-content scrollX={false} scrollY={false}>
              <slot></slot>
            </ion-content>
          </div>
        </ion-split-pane>
      </Host>
    );
  }
}
