const React = require('react');
const ReactRouter = require('react-router-dom');
const Router = ReactRouter.BrowserRouter;
const Route = ReactRouter.Route;
const Switch = ReactRouter.Switch;
import { CSSTransitionGroup } from 'react-transition-group'

import Nav from './partials/Nav';
import Home from './views/Home';
import About from './views/About';
import Portfolio from './views/Portfolio';
import PortfolioView from './views/PortfolioView';
import PortfolioNew from './views/PortfolioNew';
import Blog from './views/Blog';
import BlogView from './views/BlogView';
import BlogNew from './views/BlogNew';
import Contact from './views/Contact';
import Footer from './partials/Footer';


class App extends React.Component {

  render() {
    return (
      <Router>
        <div className="app-container">
          <Nav />
          <Route render={({ location }) => (
            <CSSTransitionGroup
              transitionName="page-transition"
              transitionEnterTimeout={2000}
              transitionLeaveTimeout={1}
            >
              <Switch key={location.key} location={location}>
                <Route exact path='/portfolio/new' component={PortfolioNew} />
                <Route exact path='/blog/new' component={BlogNew} />
                <Route exact path='/portfolio/:id' component={PortfolioView} />
                <Route exact path='/' component={Home} />
                <Route path='/about' component={About} />
                <Route exact path='/portfolio' component={Portfolio} />
                <Route exact path='/blog' component={Blog} />
                <Route exact path='/blog/:title' component={BlogView} />
               
                <Route path='/contact' component={Contact} />
                 <Route render={function () {
                  return <p>Not Found</p>
                }} />
              </Switch>
            </CSSTransitionGroup>
          )}
          />
          <Footer />
        </div>
      </Router>
      
    );
  }
}

module.exports = App;