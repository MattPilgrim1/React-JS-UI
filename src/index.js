import React from 'react';
import ReactDOM from 'react-dom';


import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        input:'/Users/matt/Desktop',
        output:'/Users/matt/Public',
        moveCopiesArray:[1, 2, 3, 4, 5],
        error: null,
        isLoaded: false,
        fileExtensionListing: []
    };



  }


  componentDidMount() {

fetch("http://api.mattpilgrim.co.uk")
     .then(res => res.json())
     .then(
       (result) => {
         this.setState({
           isLoaded: true,
           fileExtensionListing: result
         });
       },
       // Note: it's important to handle errors here
       // instead of a catch() block so that we don't swallow
       // exceptions from actual bugs in components.
       (error) => {
         this.setState({
           isLoaded: true,
           error
         });
       }
     )

 }


  render() {

      console.log(this.state.fileExtensionListing);

const numbers = this.state.moveCopiesArray;

const moveCopiesArray = numbers.map((numbers) =>
  <option>{numbers}</option>
);





    return (
        <form className="p-2 application-container"  method="post" >

              <div className="row ">
                  <div className="form-group col-md-5">
                      <label htmlFor=""><i className="material-icons md-48">create_new_folder</i><span>Search Location:</span></label>
                      <input type="text" name="Input" value={this.state.input} className="form-control"/>
                  </div>

                  <div className="form-group col-md-2">
                      <i className="material-icons arrow-icn">arrow_forward</i>
                  </div>

                  <div className="form-group col-md-5">
                      <label htmlFor=""><i className="material-icons md-48">create_new_folder</i><span>Sorting Location:</span></label>
                      <input type="text" name="Output"  value={this.state.output} className="form-control"/>

                  </div>
              </div>
          <hr/>

          <div className="row">
              <div className="col-md-4">
                  <label htmlFor=""><i className="material-icons md-48">filter_1</i><span>Number of Copies to Move:</span><i className="material-icons" data-toggle="modal" data-target="#openModal">help_outline</i></label>
              </div>

              <div className="col-md-1">
              <select className="Recursive form-control">
                {moveCopiesArray}
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
                      <option >Shell Script</option>
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

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
