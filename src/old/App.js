import React from 'react';

import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.numbers = [1, 2, 3, 4, 5];



  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }



   render() {

    return (

      <form className="p-2 application-container"  method="post">

            <div className="row ">
                <div className="form-group col-md-5">
                    <label htmlFor=""><i className="material-icons md-48">create_new_folder</i><span>Search Location:</span></label>
                    <input type="text" name="Input" value="/Users/matt/Desktop" className="form-control"/>
                </div>

                <div className="form-group col-md-2">
                    <i className="material-icons arrow-icn">arrow_forward</i>
                </div>

                <div className="form-group col-md-5">
                    <label htmlFor=""><i className="material-icons md-48">create_new_folder</i><span>Sorting Location:</span></label>
                    <input type="text" name="Output" value="/Users/matt/Public" className="form-control"/>

                </div>
            </div>
        <hr/>

        <div className="row">
            <div className="col-md-4">
                <label htmlFor=""><i className="material-icons md-48">filter_1</i><span>Number of Copies to Move:</span><i className="material-icons" data-toggle="modal" data-target="#openModal">help_outline</i></label>
            </div>

            <div className="col-md-1">

                <select name="Recursive" className="form-control">

                </select>
            </div>
        </div>
        <hr/>
        <div className="row">
            <div className="form-group col-md-4">
                <label htmlFor=""><i className="material-icons md-48">code</i><span> Powershell or Shell Script?</span></label>
            </div>

            <div className="col-md-2">
                <select className="form-control" name="script-type">
                    <option>Powershell</option>
                    <option selected>Shell Script</option>
                </select>
            </div>

        </div>
        <hr/>
        <div className="row">
        <div className="form-group col-md-12">
          <input type="submit" name="" value="Create Script" className="btn btn-primary btn-lg btn-block mt-5"/>
        </div>
        </div>
        </form>

    );
  }
}



export default App;
