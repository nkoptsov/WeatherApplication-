// import App from '../App';
import { Component } from '../framework';

// const form = document.querySelector('.weather-form');
class LocationSearchForcast extends Component {
  constructor(props) {
    super();
    this.props = props;
    this.state = {
      // date inside thsi components
      isValid: true,
    };
    // bind this
    this.eventHandler = this.eventHandler.bind(this);
    this.host = document.createElement('div');
    this.host.classList.add('search-form');
    this.host.addEventListener('submit', this.eventHandler);
  }
  // updateState(nextState) {
  //   this.state = Object.assign({}, this.state, nextState);
  //   this.render();
  // }
  // update(nextProps) {
  //   this.props = nextProps;
  //   return this.render();
  // }
  // updateState() {}
  eventHandler(event) {
    event.preventDefault();
    const sitySearch = event.target.elements.nameCity.value.trim();
    if (!!sitySearch) {
      this.props.onSubmit(sitySearch);
    }
  }
  render() {
    const { city } = this.props;
    return `<form class="weather-form">
      <label for="city">City</label>
      <input type="text" name="nameCity" id="city" required value="${city}">
      <button class="weather-search-submit">find</button>
    </form>`;
  }
}

export default LocationSearchForcast;
