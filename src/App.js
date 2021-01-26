import './App.scss';
import { Route, Switch} from 'react-router-dom';

import Navbar from './js/navbar';

import Home from './js/home/Home';
import Skills from './js/skills-page/skills-page';
import AboutMe from './js/aboutMe/aboutMe';
import Projects from './js/projects/projects';
import Contact from './js/contact/contact';

import Footer from './js/footer';

import Aux from './js/HOC/aux';

function App() {
  return (
      <Aux>
        <Navbar></Navbar>

        <Switch>
          <Route path='/' exact component={Home}></Route>
          <Route path='/skills' exact component={Skills}></Route>
          <Route path='/about-me' exact component={AboutMe}></Route>
          <Route path='/projects' exact component={Projects}></Route>
          <Route path='/contact' exact component={Contact}></Route>
        </Switch>
        
        <Footer></Footer>
      </Aux>
  );
}

export default App;
