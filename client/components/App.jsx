import { BrowserRouter as Router, HashRouter, Route, Switch } from 'react-router-dom';
import Link from 'react-router';
import React from 'react';

import Home from './Home.jsx';
import Nav from './Nav.jsx';
import Progress from './Progress.jsx';
import Test from './Test.jsx';



export default class App extends React.Component {

  constructor() {
    super();

    this.state = {
      code:"select a puzzle"
    }

    this._fetchPuzzle = this._fetchPuzzle.bind(this);
    this._increment = this._increment.bind(this);
    this._updateCode = this._updateCode.bind(this);
  }

  _fetchPuzzle(e){
    fetch('http://localHost:3000/puzzles')
    .then(response => response.json())
    .then(puzzle => {
      // console.log(`the puzzle is ${puzzle.name}`)
      // console.log(`the puzzle is ${puzzle.pDesc}`)
      this.setState({code:puzzle.pDesc})
      console.log(this.state.code)
    })        
  }

  _updateCode(newCode) {    
    console.log(this.state.code)
    this.setState({
      code: newCode,
    });
  }

  _increment(){
    console.log(`counter is ${this.state.counter}`)
    this.setState({counter: this.state.counter + 1})
    console.log(`but now it's ${this.state.counter}`)
  }

  render() {    
    return (
      <Router>
        <div>
          <Nav />
          <Switch>
             <Route path="/" exact render={() => (<Home code={this.state.code} update={this._updateCode} fetch={this._fetchPuzzle}/>)} />
            {/*<Route path="/" exact test="hi" component={Home} />*/}
            <Route path="/progress" test="hi" component={Progress} />             
             <Route path="/test" exact render={() => (<Test test="hi"/>)} />
            {/*<Route path="/test" render={(props) => <Test {...props} test="hi"/>} />*/}
            {/*<Route path="/test" test="hi" component={Test} />*/}
            <Route render={() => <p>Page not found!</p>} />
          </Switch>
        </div>
      </Router>
    );
  }
}

