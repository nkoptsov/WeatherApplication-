class Component {
  constructor(props) {
    this.state = {};
    this.props = props || {};
    this.host = null;
  }
  update(newProps) {
    this.props = newProps;
    return this._render();
  }
  updateState(newState) {
    const nextState = Object.assign({}, this.state, newState);
    this.state = nextState;
    this._render();
    // return nextState;
  }
  // array or string
  _render() {
    const element = this.render();
    console.log(typeof element);
    if (!element && this.host) {
      this.host;
    }
    switch (typeof element) {
      case 'string':
        this.host.innerHTML = element;
        break;
      default:
        this.host.append(...element);
    }
    return this.host;
  }
  render() {}
}
export default Component;
