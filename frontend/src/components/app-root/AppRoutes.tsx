import { h, FunctionalComponent } from '@stencil/core';

export const AppRoutes: FunctionalComponent<any> = (props, children) =>
  props.routes.map(({ url, children: catChildren }) => (
    <ion-route url={'/' + url} component="app-profile" key={url}>
      {catChildren && <AppRoutes routes={catChildren} />}
      {children}
    </ion-route>
  ));
