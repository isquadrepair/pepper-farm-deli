import { Component, Host, h, Prop, State } from '@stencil/core';
import { fetchData } from '../../../../global/app';
// import { menuItems } from '../../../../global/routes';

@Component({
  tag: 'app-layout',
  styleUrl: 'app-layout.css',
})
export class AppLayout {
  @State() categories;
  async getCategories() {
    const categories = await fetchData('/categories');
    this.categories = categories;
  }
  componentWillLoad() {
    this.getCategories();
  }
  //@Prop() pageName: string;
  @Prop() paneDisabled;
  render() {
    return (
      <Host>
        <ion-split-pane contentId="main-page" disabled={this.paneDisabled}>
          <ion-menu contentId="main-page" type="overlay" side="start">
            <ion-header>
              <ion-toolbar color="primary">
                <ion-title>Start Menu</ion-title>
              </ion-toolbar>
            </ion-header>
            <ion-content>{this.categories && <app-menu-items menuItems={this.categories} />}</ion-content>
          </ion-menu>
          <div class="ion-page" id="main-page">
            {this.categories && <app-nav menuItems={this.categories}></app-nav>}
            <ion-content scrollX={false} scrollY={false}>
              <slot></slot>
            </ion-content>
          </div>
        </ion-split-pane>
      </Host>
    );
  }
}
