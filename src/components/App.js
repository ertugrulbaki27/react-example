import React, { Component }from 'react';
import './App.css';
import News from './News/News';
import Sidenews from './News/Sidenews';

class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
      news1: {
        type: "top-headlines",
        query: "sources=bbc-news"
      },
      news2: {
        type: "everything",
        query: "domains=techcrunch.com&language=en"
      },
      news3: {
        type: "everything",
        query: "domains=comicbookmovie.com&language=en"
      }
    }
  }

  render() {

    return (
    <div className="App">
        <div className="navbar-brand">
          <nav>
            <div className="nav-item">
              <a href="/">My feed</a>
            </div>
          </nav>
        </div>
      <div>
        <div className="row">
          <div className="col-8">
            <News news={this.state.news1}/>
            <News news={this.state.news2}/>
          </div>
          <div className="col-4">
            <Sidenews news={this.state.news3}/>
          </div>
        </div>
      </div>
    </div>
  );

  }

}

export default App;
