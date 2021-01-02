import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import MyDropzone from './DropZone';

class AddNew extends Component {
    render() {
      return (
        <form>
            <h1>Adding a New Recipe</h1>
            <p>please fill out the form or use the camera icon to add a new recipe</p>
          <p>Enter the Name of recipe:</p>
          <input type="text"/>
          <p>Enter Ingredients:</p>
          <input type="list"/>
          <p>Enter</p>
          <MyDropzone/>
        </form>
      );
    }
  }
  ReactDOM.render(<AddNew />, document.getElementById('root'));

  export default AddNew;