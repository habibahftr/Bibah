import React, { Component } from 'react';
import Display from "./template/display";
// import Form from "./template/form";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <>
      {/* <Form></Form> */}
      <Display></Display>
      </>
     );
  }
}
 
export default App;