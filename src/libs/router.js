import { View } from './view.js';
 
export class Router {

  constructor() {
    this.routes = {};
  }
  
  route(url, view) {
    if (url instanceof View) {
      this.routes.defaultView = url;
    } else if (view instanceof View) {
      this.routes[url] = view;
    } else {
      throw new Error('view is not valid object!');
    }

    console.log(view)
  }

  onRoute() {
    const url = location.hash.replace('#', '');
    const view = this.routes[url] || this.routes.defaultView;

    console.log(url, view);

    if (this.current) {
      this.current.hide();
    }

    this.current = view;
    view.show();
  }

  start() {
    window.addEventListener('hashchange', () => this.onRoute());
    this.onRoute();
  }

}

// бинрные, унарные, тренарны 