import React, { Component } from 'react';
import './App.css';

import Validation from './Validation/Validation'
import CharComponent from './CharComponent/CharComponent';

class App extends Component {
  // state
  state = {
    uInput: ''
  }

  // event handler methods

  // onChange event handler to output inputed text
  inputChangeHandler = (event) => {
    
    this.setState({uInput: event.target.value});

  }

  // onClick event handler to delete letters from inputed text
  charDeleteHandler = (index) => {
      const text = this.state.uInput.split('');
      text.splice(index, 1);
      const updatedText = text.join('');
      this.setState({uInput: updatedText});
  }

  render() {

    // this will the letters inputed as an array of letters
    // then it will put (map) each letter into CharComponent components.
    const charList = this.state.uInput.split('').map((char, index) => {
      return <CharComponent 
        ch={char} 
        key={index} 
        click={() => this.charDeleteHandler(index)}
        />
    })

    return (
      <div className="App">
        <ol>
          {/* <li>Create an input field (in App component) with a change listener which outputs the length of the entered text below it (e.g. in a paragraph).</li> */}
          {/* <li>Create a new component (=> ValidationComponent) which receives the text length as a prop</li>
          <li>Inside the ValidationComponent, either output "Text too short" or "Text long enough" depending on the text length (e.g. take 5 as a minimum length)</li> */}
          <li>Create another component (=> CharComponent) and style it as an inline box (=> display: inline-block, padding: 16px, text-align: center, margin: 16px, border: 1px solid black).</li>
          <li>Render a list of CharComponents where each CharComponent receives a different letter of the entered text (in the initial input field) as a prop.</li>
          <li>When you click a CharComponent, it should be removed from the entered text.</li>
        </ol>
        <p>Hint: Keep in mind that JavaScript strings are basically arrays!</p>
        <input type="text" 
        
        // the event handler connection
        onChange={this.inputChangeHandler} 

        // pulling down from the state
        value={this.state.uInput} />

        {/* this displays the inputed text */}
        <p>{this.state.uInput}</p>

        {/* this calls the validation component in-order 
        to validate if the text is too short or long */}
        <Validation inputLength = {this.state.uInput.length}/>

        {charList}
      </div>
    );
  }
}

export default App;
