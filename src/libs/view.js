export class View {

  constructor(el, data) {
    this.el = el;
    this.data = data;
    this.hide();
    this.render();
  }

  show() {
    this.el.hidden = false;
  }

  hide() {
    this.el.hidden = true;
  }
  
  /**
   * @override
   */
  render() {
    console.warn('need override');
  }
}
