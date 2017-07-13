// const Codemirror = require('../src/Codemirror');
import React from 'react';
const CodeMirror = require('react-codemirror');
import { Link } from 'react-router-dom';

require('codemirror/mode/javascript/javascript')
require('codemirror/mode/xml/xml');
require('codemirror/mode/markdown/markdown');


export default class Home extends React.Component {

  constructor(props) {
    super(props);
    console.log(props)
    this.code = props.code;
    this._updateCode = props.update;
    this._fetchPuzzle = props.fetch;
    this._testFunc = this._fetchPuzzle.bind(this);
  }

  call_fetchPuzzle() {
    let puzzleElement = document.getElementById("puzzles");
    let puzzleName = puzzleElement.options[puzzleElement.selectedIndex].value;
    if (puzzleName != "none") this._fetchPuzzle(puzzleName);
  }

  render() {
    const options = {
      lineNumbers: true,
      theme: 'abcdef'
    };

    let test = 'ok'

    return (
      <div>
        <h1>First page bro</h1>
        <select onChange={this._testFunc} id="puzzles">
          <option value="none">None</option>
          <option value="FizzBuzz">FizzBuzz</option>
        </select>
        <button onClick={this._testFunc}> click me</button>
        <CodeMirror value={test} onChange={this._updateCode} options={options} />
      </div>);
  }
}