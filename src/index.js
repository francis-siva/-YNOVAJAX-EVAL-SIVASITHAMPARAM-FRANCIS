import React from 'react';
import ReactDOM from 'react-dom';

//Import des images
import mainLogo from './img/imgFBvod.jpg';
import bruceLee from "./img/bruceLee.jpg";
import ff1 from "./img/ff1.jpg";
import jsuislegend from "./img/je-suis-une-legende.jpg";
import mi4 from "./img/mi4.jpg";
import parrain from "./img/parrain.jpg";
import rambo from "./img/rambo.jpg";
import scarymovie from "./img/scary-movie.jpg";
import taxi5 from "./img/taxi5.jpg";
import deadpool from "./img/deadpoo2.jpg";
import ocean8 from "./img/ocean8.jpg";
import thepassenger from "./img/thePassenger.jpg";
import wonderwheel from "./img/wonder-wheel.jpg";
import sw8 from "./img/sw8.jpg";

//Import de bootstrap et feuille de style css
import './bootstrap/css/bootstrap.min.css';
import './style.css';

function Header() {
    return (
      <header className="App-Header">
        <center>
          <img src={mainLogo} className="App-logo" alt="logo" />
        </center>
        <h1 className="App-title">Welcome to FbVod</h1>
      </header>
    );
}

function Movie() {
  return (
    <footer>
      <table className="table table-striped table-bordered table-hover table-sm table-responsive">
        <tr>
          <td>New Releases</td>
          <td><img className="movie" src={thepassenger} alt="the-passenger" /></td>
          <td><img className="movie" src={wonderwheel} alt="wonder-wheel" /></td>
          <td><img className="movie" src={sw8} alt="sw8" /></td>
        </tr>
        <tr>
          <td>Top Picks</td>
          <td><img className="movie" src={mi4} alt="mission-impossible4" /></td>
          <td><img className="movie" src={ff1} alt="fast-and-furious1" /></td>
          <td><img className="movie" src={scarymovie} alt="scary-movie3" /></td>
        </tr>
        <tr>
          <td>Preorder</td>
          <td><img className="movie" src={deadpool} alt="deadpool2" /></td>
          <td><img className="movie" src={ocean8} alt="ocean8" /></td>
          <td><img className="movie" src={taxi5} alt="taxi5" /></td>
        </tr>
        <tr>
          <td>Last Chance</td>
          <td><img className="movie" src={bruceLee} alt="bruce-lee" /></td>
          <td><img className="movie" src={parrain} alt="parrain1" /></td>
          <td><img className="movie" src={rambo} alt="rambo1" /></td>
        </tr>
      </table>
    </footer>
  );
}

function Footer() {
  return (
    <footer>
      <p>&#169; 2018 francis.sivasithamparam@ynov.com</p>
    </footer>
  );
}

function HomePresentation() {
  return (
    <div className="container">
      <Header />
      <p className="App-intro">
        Watch the latest movies right now !
      </p>
      <section><Movie /></section>
      <Footer />
    </div>
  );
}
ReactDOM.render(<HomePresentation />, document.getElementById('root'));
