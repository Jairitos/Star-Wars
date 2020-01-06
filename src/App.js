import React, { useState, useEffect } from 'react';
import Particles from 'react-particles-js';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import axios from 'axios';
import {
  Characters,
  Planets,
  Species,
  Films,
  Starships,
  Vehicles
} from './Containers';
// import {
//   CardlistCharacDetails,
//   CardlistFilmDetails,
//   CardlistPlanDetails,
//   CardlistSpecDetails
// } from './Components/Cardlist/index.js';

import CardlistCharacDetails from './Components/Cardlist/CardlistCharacDetails';
import CardlistFilmDetails from './Components/Cardlist/CardlistFilmDetails';
import CardlistPlanDetails from './Components/Cardlist/CardlistPlanDetails';
import CardlistSpecDetails from './Components/Cardlist/CardlistSpecDetails';
import CardlistStarshipsDetails from './Components/Cardlist/CardlistStarshipDetails';
import CardlistVehiclesDetails from './Components/Cardlist/CardlistVehiclesDetails';

import Navigation from './Components/Navigation/Navigation';
import CardCategory from './Components/Card/CardCat';
import logo from './img/star.png';
// import Pagination from './Components/Pagination/Pagination';

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

function App() {
  const [films, setFilms] = useState([]);
  const [characters, setCharacters] = useState([]);
  const [species, setSpecies] = useState([]);
  const [planets, setPlanets] = useState([]);
  const [starships, setStarships] = useState([]);
  const [vehicles, setVehicles] = useState([]);
  const [searchfield, setSearchfield] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);

  useEffect(() => {
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

    const arrayFilm = ['https://swapi.co/api/films/'];


// Api call based on curentpage number
    // const getDataChar2 = async (page) => {
    //   try {
    //     let response = await fetch(`https://swapi.co/api/people/?page=${page}`);
    //     let result = await response.json();
    //     let people = [result.results];
    //     console.log(people);
    //     setCharacters(people);
    //     setIsLoading(false);
    //   } catch (err) {
    //     console.log('something went wrong');
    //   }
    // };


    const getDataChar = async () => {
      try {
        const [p1, p2, p3, p4, p5, p6, p7, p8, p9] = await axios.all(
          arrayChar.map(async function(char) {
            let response = await fetch(char);
            const result = await response.json();
            return result.results;
          })
        );

        const people = p1.concat(p2, p3, p4, p5, p6, p7, p8, p9);

        setCharacters(people);
        setIsLoading(false);
      } catch (error) {
        console.log('Something went wrong');
      }
    };

    const getDataPlan = async () => {
      try {
        const [pl1, pl2, pl3, pl4, pl5, pl6, pl7] = await Promise.all(
          arrayPlan.map(async function(plan) {
            const response = await fetch(plan);
            const result = await response.json();
            return result.results;
          })
        );

        const planets = pl1.concat(pl2, pl3, pl4, pl4, pl5, pl6, pl7);

        setPlanets(planets);
        setIsLoading(false);
      } catch (error) {
        console.log('Something went wrong');
      }
    };

    const getDataSpec = async () => {
      try {
        const [sp1, sp2, sp3, sp4] = await Promise.all(
          arraySpec.map(async function(spec) {
            const response = await fetch(spec);
            const result = await response.json();
            return result.results;
          })
        );

        const species = sp1.concat(sp2, sp3, sp4);

        setSpecies(species);
        setIsLoading(false);
      } catch (error) {
        console.log('Something went wrong');
      }
    };

    const getDataStarships = async () => {
      try {
        const [st1, st2, st3, st4] = await Promise.all(
          arrayStarsh.map(async function(star) {
            const response = await fetch(star);
            const result = await response.json();
            return result.results;
          })
        );

        const starships = st1.concat(st2, st3, st4);

        setStarships(starships);
        setIsLoading(false);
      } catch (error) {
        console.log('Something went wrong');
      }
    };

    const getDataVehicles = async () => {
      try {
        const [vh1, vh2, vh3, vh4] = await Promise.all(
          arrayVehic.map(async function(veh) {
            const response = await fetch(veh);
            const result = await response.json();
            return result.results;
          })
        );

        const vehicles = vh1.concat(vh2, vh3, vh4);

        setVehicles(vehicles);
        setIsLoading(false);
      } catch (error) {
        console.log('Something went wrong');
      }
    };

    const getDataFilm = async () => {
      try {
        const [films] = await Promise.all(
          arrayFilm.map(async function(film) {
            const response = await fetch(film);
            const result = await response.json();
            return result.results;
          })
        );

        setFilms(films);
        setIsLoading(false);
      } catch (err) {
        console.log('Oopsie, something went wrong');
      }
    };

    // getDataChar2(currentPage);
    getDataChar();
    getDataFilm();
    getDataPlan();
    getDataSpec();
    getDataStarships();
    getDataVehicles();
  }, [currentPage]);

  const getPage = (item) => {
    const indexOfLastPost = currentPage * itemsPerPage;
    const indexOfFirstPost = indexOfLastPost - itemsPerPage;
    const currentItems = item.slice(indexOfFirstPost, indexOfLastPost);
    return currentItems;
  };

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const onSearchChange = (event) => {
    setSearchfield(event.target.value);
  };

  const clearSearchPageNumber = () => {
    setSearchfield('');
    setCurrentPage(1);
  };

  const filterSearch = (arr) => {
    const searchResult = arr.filter((el) => {
      return el.name.toLowerCase().includes(searchfield.toLowerCase());
    });
    return searchResult;
  };

  const filteredCharac = filterSearch(getPage(characters));

  const filteredPlanets = filterSearch(getPage(planets));

  const filteredSpec = filterSearch(getPage(species));

  const filteredStarships = filterSearch(getPage(starships));

  const filteredVehicles = filterSearch(getPage(vehicles));

  return (
    <div className='App'>
      <Particles className='fixed' params={particleOptions} />
      <div className='container'>
        <img className='logo' src={logo} alt='Star Wars logo'></img>
        <p className='title_small'>May the force be with you</p>
        <Router>
          <Navigation clearSearch={clearSearchPageNumber} />
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
              {isLoading ? (
                <h1 className='loading'>Be Patient, Padawan....</h1>
              ) : (
                <Films films={films} />
              )}
            </Route>
            <Route exact path='/Characters'>
              {isLoading ? (
                <h1 className='loading'>Be Patient, Padawan....</h1>
              ) : (
                <Characters
                  characters={filteredCharac}
                  searchChange={onSearchChange}
                  itemsPerPage={itemsPerPage}
                  paginate={paginate}
                  totalItems={87}
                />
              )}
            </Route>
            <Route exact path='/Planets'>
              {isLoading ? (
                <h1 className='loading'>Be Patient, Padawan....</h1>
              ) : (
                <Planets
                  planets={filteredPlanets}
                  searchChange={onSearchChange}
                  itemsPerPage={itemsPerPage}
                  paginate={paginate}
                  totalItems={planets.length}
                />
              )}
            </Route>
            <Route exact path='/Species'>
              {isLoading ? (
                <h1 className='loading'>Be Patient, Padawan....</h1>
              ) : (
                <Species
                  species={filteredSpec}
                  searchChange={onSearchChange}
                  itemsPerPage={itemsPerPage}
                  paginate={paginate}
                  totalItems={species.length}
                />
              )}
            </Route>
            <Route exact path='/Starships'>
              {isLoading ? (
                <h1 className='loading'>Be Patient, Padawan....</h1>
              ) : (
                <Starships
                  starships={filteredStarships}
                  searchChange={onSearchChange}
                  itemsPerPage={itemsPerPage}
                  paginate={paginate}
                  totalItems={starships.length}
                />
              )}
            </Route>
            <Route exact path='/Vehicles'>
              {isLoading ? (
                <h1 className='loading'>Be Patient, Padawan....</h1>
              ) : (
                <Vehicles
                  vehicles={filteredVehicles}
                  searchChange={onSearchChange}
                  itemsPerPage={itemsPerPage}
                  paginate={paginate}
                  totalItems={vehicles.length}
                />
              )}
            </Route>
            <Route path='/Films/:title'>
              <CardlistFilmDetails films={films} />
            </Route>
            <Route path='/Characters/:name'>
              <CardlistCharacDetails characters={characters} />
            </Route>
            <Route path='/Planets/:name'>
              <CardlistPlanDetails planets={planets} />
            </Route>
            <Route path='/Species/:name'>
              <CardlistSpecDetails species={species} />
            </Route>
            <Route path='/Starships/:name'>
              <CardlistStarshipsDetails starships={starships} />
            </Route>
            <Route path='/Vehicles/:name'>
              <CardlistVehiclesDetails vehicles={vehicles} />
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

// class App extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       films: [],
//       characters: [],
//       species: [],
//       planets: [],
//       starships: [],
//       vehicles: [],
//       searchfield: '',
//       done: false,
//       currentPage: 1,
//       itemsPerPage: 10

//     };
//   }

// }

export default App;
