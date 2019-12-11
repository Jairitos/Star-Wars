import React from 'react';
import Particles from 'react-particles-js';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
// Different pages
import Characters from './Containers/Characters';
import Films from './Containers/Films';
import Planets from './Containers/Planets';
import Species from './Containers/Species';
import Starships from './Containers/Starships';
import Vehicles from './Containers/Vehicles';

import Navigation from './Components/Navigation/Navigation';
import CardCategory from './Components/Card/CardCat';
import logo from './img/star.png';
import CardlistFilmDetails from './Components/Cardlist/CardlistFilmDetails';
import CardlistCharacDetails from './Components/Cardlist/CardlistCharacDetails';
import CardlistSpecDetails from './Components/Cardlist/CardlistSpecDetails';
import CardlistPlanDetails from './Components/Cardlist/CardlistPlanDetails';

const particleOptions = {
  particles: {
    number: {
      value: 400,
      density: {
        enable: true,
        value_area: 250
      }
    },
    size: {
      value: 1.5,
      random: true
    },
    line_linked: {
      enable: false
    },
    opacity: {
      random: true,
      value: 1,
      anim: {
        speed: 5
      }
    },
    move: {
      speed: 0
    },
    interactivity: {
      detect_on: 'window'
    }
  }
};

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      films: [],
      characters: [],
      species: [],
      planets: [],
      starships: [],
      vehicles: [],
      searchfield: '',
      done: false
    };
  }

  async getData() {
    const arrayChar = [
      'https://swapi.co/api/people/?page=1',
      'https://swapi.co/api/people/?page=2',
      'https://swapi.co/api/people/?page=3',
      'https://swapi.co/api/people/?page=4',
      'https://swapi.co/api/people/?page=5',
      'https://swapi.co/api/people/?page=6',
      'https://swapi.co/api/people/?page=7',
      'https://swapi.co/api/people/?page=8',
      'https://swapi.co/api/people/?page=9'
    ];

    const arrayPlan = [
      'https://swapi.co/api/planets/?page=1',
      'https://swapi.co/api/planets/?page=2',
      'https://swapi.co/api/planets/?page=3',
      'https://swapi.co/api/planets/?page=4',
      'https://swapi.co/api/planets/?page=5',
      'https://swapi.co/api/planets/?page=6',
      'https://swapi.co/api/planets/?page=7'
    ];

    const arraySpec = [
      'https://swapi.co/api/species/?page=1',
      'https://swapi.co/api/species/?page=2',
      'https://swapi.co/api/species/?page=3',
      'https://swapi.co/api/species/?page=4'
    ];

    const arrayStarsh = [
      'https://swapi.co/api/starships/?page=1',
      'https://swapi.co/api/starships/?page=2',
      'https://swapi.co/api/starships/?page=3',
      'https://swapi.co/api/starships/?page=4'
    ];

    const arrayVehic = [
      'https://swapi.co/api/vehicles/?page=1',
      'https://swapi.co/api/vehicles/?page=2',
      'https://swapi.co/api/vehicles/?page=3',
      'https://swapi.co/api/vehicles/?page=4'
    ];

    const urls = [
      'https://swapi.co/api/films/',
      'https://swapi.co/api/species/',
      'https://swapi.co/api/starships/',
      'https://swapi.co/api/vehicles/'
    ];

    try {
      const [p1, p2, p3, p4, p5, p6, p7, p8, p9] = await Promise.all(
        arrayChar.map(async function(char) {
          const response = await fetch(char);
          const result = await response.json();
          return result.results;
        })
      );

      const [pl1, pl2, pl3, pl4, pl5, pl6, pl7] = await Promise.all(
        arrayPlan.map(async function(plan) {
          const response = await fetch(plan);
          const result = await response.json();
          return result.results;
        })
      );

      const [sp1, sp2, sp3, sp4] = await Promise.all(
        arraySpec.map(async function(spec) {
          const response = await fetch(spec);
          const result = await response.json();
          return result.results;
        })
      );

      const [st1, st2, st3, st4] = await Promise.all(
        arrayStarsh.map(async function(star) {
          const response = await fetch(star);
          const result = await response.json();
          return result.results;
        })
      );

      const [vh1, vh2, vh3, vh4] = await Promise.all(
        arrayVehic.map(async function(veh) {
          const response = await fetch(veh);
          const result = await response.json();
          return result.results;
        })
      );

      const people = p1.concat(p2, p3, p4, p5, p6, p7, p8, p9);

      const planets = pl1.concat(pl2, pl3, pl4, pl4, pl5, pl6, pl7);

      const species = sp1.concat(sp2, sp3, sp4);

      const starships = st1.concat(st2, st3, st4);

      const vehicles = vh1.concat(vh2, vh3, vh4);

      const [films] = await Promise.all(
        urls.map(async function(url) {
          const response = await fetch(url);
          const result = await response.json();
          return result.results;
        })
      );

      this.setState({
        films: films,
        characters: people,
        species: species,
        planets: planets,
        starships: starships,
        vehicles: vehicles,
        done: true
      });
    } catch (err) {
      console.log('Oopsie, something went wrong');
    }
  }

  componentDidMount() {
    this.getData();
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value });
  };

  clearSearch = () => {
    this.setState({ searchfield: '' });
  };

  filterSearch = (arr) => {
    const { searchfield } = this.state;
    const searchResult = arr.filter((el) => {
      return el.name.toLowerCase().includes(searchfield.toLowerCase());
    });
    return searchResult;
  };

  render() {
    const { characters, planets, species, starships, vehicles } = this.state;

    const filteredCharac = this.filterSearch(characters);

    const filteredPlanets = this.filterSearch(planets);

    const filteredSpec = this.filterSearch(species);

    const filteredStarships = this.filterSearch(starships);

    const filteredVehicles = this.filterSearch(vehicles);

    return (
      <div className='App'>
        <Particles className='fixed' params={particleOptions} />
        <div className='container'>
          <img className='logo' src={logo} alt='Star Wars logo'></img>
          <p className='title_small'>May the force be with you</p>
          <Router>
            <Navigation clearSearch={this.clearSearch} />
            <Switch>
              <Route exact path='/'>
                <div>
                  <CardCategory name='Characters' />
                  <CardCategory name='Films' />
                  <CardCategory name='Planets' />
                  <CardCategory name='Species' />
                  <CardCategory name='Starships' />
                  <CardCategory name='Vehicles' />
                </div>
              </Route>

              <Route exact path='/Films'>
                {
                  !this.state.done ? (
                    <h1 className='loading'>Be Patient....</h1>
                  ) : (
                    <Films films={this.state.films} />
                  )
                }
              </Route>
              <Route exact path='/Characters'>
                {!this.state.done ? (
                  <h1 className='loading'>Be Patient....</h1>
                ) : (
                  <Characters
                    characters={filteredCharac}
                    searchChange={this.onSearchChange}
                  />
                )}
              </Route>
              <Route exact path='/Planets'>
                {!this.state.done ? (
                  <h1 className='loading'>Be Patient....</h1>
                ) : (
                  <Planets
                    planets={filteredPlanets}
                    searchChange={this.onSearchChange}
                  />
                )}
              </Route>
              <Route exact path='/Species'>
                {!this.state.done ? (
                  <h1 className='loading'>Be Patient....</h1>
                ) : (
                  <Species
                    species={filteredSpec}
                    searchChange={this.onSearchChange}
                  />
                )}
              </Route>
              <Route exact path='/Starships'>
                {!this.state.done ? (
                  <h1 className='loading'>Be Patient....</h1>
                ) : (
                  <Starships
                    starships={filteredStarships}
                    searchChange={this.onSearchChange}
                  />
                )}
              </Route>
              <Route exact path='/Vehicles'>
                {!this.state.done ? (
                  <h1 className='loading'>Be Patient....</h1>
                ) : (
                  <Vehicles
                    vehicles={filteredVehicles}
                    searchChange={this.onSearchChange}
                  />
                )}
              </Route>
              <Route path='/Films/:title'>
                <CardlistFilmDetails films={this.state.films} />
              </Route>
              <Route path='/Characters/:name'>
                <CardlistCharacDetails characters={this.state.characters} />
              </Route>
              <Route path='/Species/:name'>
                <CardlistSpecDetails species={this.state.species} />
              </Route>
              <Route path='/Planets/:name'>
                <CardlistPlanDetails planets={this.state.planets} />
              </Route>
            </Switch>
          </Router>

          <footer className='main_footer'>
            <p className='p_footer'>
              {' '}
              Star Wars and all associated names and/or images are copyright
              Lucasfilm Ltd. Images were freely collected from Wookiepedia, Star
              Wars Fandom, Starwars.com & Disney Fandom.
            </p>
          </footer>
        </div>
      </div>
    );
  }
}

export default App;
