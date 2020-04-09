import { View } from '../libs/view.js';

export class ContactView extends View {

  render() {
    this.el.innerHTML = `
      Контакты !!!
    `;
  }
}