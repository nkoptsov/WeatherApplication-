// const todayForcast = document.querySelector('.today-forcast');
import { Component } from '../framework';
// const renderTodayForcast = data => {
//   const element = document.createElement('h1');
//   element.innerText = `Temperatura = ${data.main.temp - 273.15}`;
//   //  const element = `<h4>Temperatura = ${data.main.temp}</h4>`;
//   todayForcast.appendChild(element);
// };

class RenderTodayForcast extends Component {
  constructor() {
    super();

    this.host = document.createElement('div');
    this.host.classList.add('today-foracst');
  }

  // update(newProps) {
  //   this.props = newProps;
  //   return this.render();
  // }
  render() {
    return `<h1>Temperatura = ${this.props.forcast.main.temp} </h1>`;
    // return this.root;
    // - 273.15
  }
}
export default RenderTodayForcast;
