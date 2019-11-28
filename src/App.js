import React from 'react';
import Particles from 'react-particles-js';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Cardlist from './Components/Cardlist/Cardlist';
import CardlistFilms from './Components/Cardlist/CardlistFilms';
import SearchBox from './Components/Searchbox/SearchBox';
import Navigation from './Components/Navigation/Navigation';
import CardCategory from './Components/Card/CardCat';
import Attack from './Components/Films/Attack';
import Empire from './Components/Films/Empire';
import Force from './Components/Films/Force';
import NewHope from './Components/Films/NewHope';
import Phantom from './Components/Films/Phantom';
import Return from './Components/Films/Return';
import Revenge from './Components/Films/Revenge';

const particleOptions = {
  particles: {
    number: {
      value: 400
    },
    size: {
      value: 1.5
    },
    line_linked: {
      enable: false
    },
    opacity: {
      random: true,
      value: 1,
      anim : {
        speed: 2.5
      }
    },
    move : {
      speed: 0
    },
    interactivity: {
      detect_on: 'window'
    }
  }
}

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      films: [],
      characters: [],
      species: [],
      planets: [],
      starships: [],
      vehicles: [],
      route: 'home',
      searchfield: ''
    }
  }



  async getData () {

    const urls = [
      'https://swapi.co/api/films/',
     'https://swapi.co/api/people/',
     'https://swapi.co/api/species/',
     'https://swapi.co/api/planets/',
     'https://swapi.co/api/starships/',
     'https://swapi.co/api/vehicles/',
    ]

   try {
     const [films, people, species, planets, starships, vehicles] = 
     await Promise.all(urls.map(async function(url) {
      const response = await fetch(url);
      const result = await response.json();
      return result.results;    
     }
     ));
     this.setState({
        films: films, 
        characters: people,
        species: species,
        planets: planets,
        starships: starships,
        vehicles: vehicles
      })
   }

   catch (err) {
     console.log('Oopsie, something went wrong')
   }
  }

  componentDidMount () {
    this.getData();
  }

  onRoutechange = (route) => {
    switch (route) {
      case 'home':
        return this.setState({route: 'home'})
      case 'characters': 
        return this.setState({route: 'characters'})
      case 'films':
        return this.setState({route: 'films'})
      case 'species':
        return this.setState({route: 'species'})
      case 'planets':
        return this.setState({route: 'planets'})
      case 'starships':
        return this.setState({route: 'starships'})
      case 'verhicles':
          return this.setState({route: 'verhicles'})
      case 'A New Hope':
          return this.setState({route: 'newhope'})
      case 'The Phantom Menace':
          return this.setState({route: 'phantom'})
      case 'Attack of the Clones':
          return this.setState({route: 'attack'})
      case 'Revenge of the Sith':
          return this.setState({route: 'revenge'})
      case 'The Empire Strikes Back':
          return this.setState({route: 'empire'})
      case 'The Force Awakens':
          return this.setState({route: 'force'})
      default:  return route
       
  }
}

  onSearchChange = (event) => {
    this.setState({searchfield: event.target.value});
  }

  render () { 
    const {route, searchfield, characters} = this.state;
    const filteredCharac = characters.filter(character => {
      return character.name.toLowerCase().includes(searchfield.toLowerCase());
    })

    return (
      <div className="App">
        <Particles className="fixed"
            params= {particleOptions}
        />
         <h1 className="title">Star Wars</h1>
         <p className='title_small'>May the force be with you</p>
         <Navigation onRouteChange={this.onRoutechange} />
        { route === 'home' ?
        <div>
          <CardCategory name='characters' onRouteChange={this.onRoutechange} />
          <CardCategory name='films' onRouteChange={this.onRoutechange} />
          <CardCategory name='species' onRouteChange={this.onRoutechange} />
          <CardCategory name='planets' onRouteChange={this.onRoutechange} />
          <CardCategory name='starships' onRouteChange={this.onRoutechange} />
          <CardCategory name='vehicles' onRouteChange={this.onRoutechange} />
        </div>
        :route === 'characters' ?
          <div> 
            <h2 className="title_categor">Characters</h2>
            <SearchBox searchChange={this.onSearchChange} />
            <Cardlist item = {filteredCharac} />
          </div>
        :route === 'films' ?
          <div>
            <h2 className="title_categor">Films</h2>
            <CardlistFilms onRoutechange={this.onRoutechange} films= {this.state.films} />
          </div>
        :route === 'species' ?
          <div>
            <h2 className="title_categor">Species</h2>
            <Cardlist onRoutechange={this.onRoutechange} item = {this.state.species} />
          </div>
        :route === 'planets' ?   
        <div>
          <h2 className="title_categor">Planets</h2>
          <Cardlist onRoutechange={this.onRoutechange} item = {this.state.planets} />
        </div>
        :route === 'starships' ?   
        <div>
          <h2 className="title_categor">Starships</h2>
          <Cardlist onRoutechange={this.onRoutechange} item = {this.state.starships} />
        </div>
        :route === 'vehicles' ?   
        <div>
          <h2 className="title_categor">Vehicles</h2>
          <Cardlist onRoutechange={this.onRoutechange} item = {this.state.vehicles} />
        </div>
        
       : route === 'newhope' ? <NewHope onRouteChange= {this.onRoutechange} films={this.state.films}/> 
       : route === 'phantom' ? <Phantom onRouteChange= {this.onRoutechange} films={this.state.films}/> 
       : route === 'attack' ? <Attack onRouteChange= {this.onRoutechange} films={this.state.films}/> 
       : route === 'empire' ? <Empire onRouteChange= {this.onRoutechange} films={this.state.films}/> 
       : route === 'force' ? <Force onRouteChange= {this.onRoutechange} films={this.state.films}/> 
       : route === 'return' ? <Return onRouteChange= {this.onRoutechange} films={this.state.films}/> 
       : route === 'revenge' ? <Revenge onRouteChange= {this.onRoutechange} films={this.state.films}/> 
       : route === 'home'    
     }
     <footer className='main_footer'>
       <div>
        <p className='p_footer'> Star Wars and all associated names and/or images are copyright Lucasfilm Ltd. Images were freely collected from Wookiepedia.</p>
       </div>
      </footer>
      </div>
      )
  }




}


export default App;
