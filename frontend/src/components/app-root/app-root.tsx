import { Component, h, State, Build, FunctionalComponent } from '@stencil/core';
import { fetchData, categories } from '../../global/app';
//import { menuItems } from '../../global/routes';

const AppRoutes: FunctionalComponent<any> = props =>
  props.routes.map(({ url, children }) => (
    <ion-route url={'/profile/' + url} component="app-profile" key={url}>
      {children && <AppRoutes routes={children} />}
    </ion-route>
  ));

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css',
})
export class AppRoot {
  @State() categories: any[];
  async getCategories() {
    const categories = await fetchData('/categories');
    this.categories = categories;
  }
  async componentWillRender() {
    await this.getCategories();
  }

  async connectedCallback() {
    // Build.isBrowser is true when running in the
    // browser and false when being prerendered

    if (Build.isBrowser) {
      console.log('running in browser');
      //this.getCategories();
    } else {
      await this.getCategories();
      console.log('running in node while prerendering');
    }
  }
  render() {
    return (
      <ion-app>
        <ion-router useHash={false}>
          <ion-route url="/" component="app-home" />
          <ion-route url="/profile/:name" component="app-profile" />
          {categories && <AppRoutes routes={categories} />}
        </ion-router>
        <app-layout paneDisabled={false}>
          <ion-nav />
        </app-layout>
      </ion-app>
    );
  }
}
