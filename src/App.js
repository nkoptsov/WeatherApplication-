// main components who run all files
import allBind from './utils/ulils';
import { Component } from './framework';
import { getWeatherOnDay } from './utils/api';
// import form from './components/LocationSearchForcast';
import RenderTodayForcast from './components/TodayForcast';
import LocationSearchForcast from './components/LocationSearchForcast';

class App extends Component {
  constructor(root) {
    super();
    this.state = {
      city: '',
      todayForcast: null,
      // new URLSearchParams(window.location.search).get('city'),
    };
    this.host = root;
    this.host.classList.add('host');
    // bind function for this
    allBind(this, 'getCity', 'getForcast', 'updateState');

    this._locationSearchForcast = new LocationSearchForcast({
      city: this.state.city,
    });
    this._renderTodayForcast = new RenderTodayForcast();
  }

  getCity(city) {
    this.getForcastOnDay({ city });
  }
  getForcast(value) {
    // this.state.todayForcast = value;
    // return value;
    return {
      city: value.name,
      todayForcast: value,
    };
  }
  getForcastOnDay(newCity) {
    // const { city } = newCity;

    return getWeatherOnDay(newCity)
      .then(this.getForcast)
      .then(this.updateState);
  }
  render() {
    const { city, todayForcast } = this.state;
    console.log(this.host);
    const obj = [];

    obj.push(
      this._locationSearchForcast.update({ city, onSubmit: this.getCity }),
    );
    if (!!todayForcast) {
      obj.push(this._renderTodayForcast.update({ forcast: todayForcast }));
    }
    // this.host.appendChild(
    //   this._locationSearchForcast.update({ city, onSubmit: this.getCity }),
    // );
    // if (!!forcast) {
    //   this.host.appendChild(this._renderTodayForcast.update({ forcast }));
    // }
    // return [
    //   this._locationSearchForcast.update({ city, onSubmit: this.getCity }),
    //   this._renderTodayForcast.udate({ forcast }),
    // ];
    return obj;
  }
}
export default App;
