import { Component, Host, h, State, Prop } from '@stencil/core';

const QUERY: { [key: string]: string } = {
  xs: '(min-width: 0px)',
  sm: '(min-width: 576px)',
  md: '(min-width: 768px)',
  lg: '(min-width: 992px)',
  xl: '(min-width: 1200px)',
  never: '',
};

@Component({
  tag: 'app-nav',
  styleUrl: 'app-nav.css',
})
export class AppNav {
  @State() mQuery = false;
  @Prop() menuItems;

  componentWillLoad() {
    const mediaQuery = window.matchMedia(QUERY['md']);
    // Update the state with the current value
    this.mQuery = mediaQuery.matches;
    // Create an event listener
    const handler = event => {
      this.mQuery = event.matches;
    };
    // Attach the event listener to know when the matches value changes
    mediaQuery.addEventListener('change', handler);
    // Remove the event listener on cleanup
    return () => mediaQuery.removeEventListener('change', handler);
  }

  render() {
    return (
      <Host>
        <ion-header>
          <ion-toolbar style={{ display: 'flex', minHeight: '100px', alignItems: 'center' }}>
            <ion-title style={{ display: 'flex', textAlign: 'center', justifyContent: 'space-around' }}>
              <img src="/assets/images/logo.png" style={{ display: 'flex', maxWidth: '95px' }} />
            </ion-title>
            <ion-buttons style={{ justifyContent: 'center' }} slot={this.mQuery ? 'end' : 'end'}>
              {this.mQuery ? <app-nav-items menuItems={this.menuItems} /> : <ion-menu-button style={{ fontSize: '56px' }}></ion-menu-button>}
            </ion-buttons>
          </ion-toolbar>
        </ion-header>
        <slot></slot>
      </Host>
    );
  }
}
