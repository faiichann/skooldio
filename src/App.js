import './App.css';
import React, { Component } from "react";
import axios from 'axios';
import eng from './engi@2x.png';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: []
    }
  }
  async componentDidMount() {
    axios.get("https://tcas-assets.skooldio.com/tmp/mock_tcaster_api.json")
    .then(res=>{
      console.log(res);
      this.setState({list:res.data});
  });
  }

render() {
  return (
    <div className="App">
      <div className="contariner">
            {this.state.list.map(list=>(
                    <div key={list.id} className="card">
                       <div className="row">
                         <img src={list.logo}/>
                       <h1 className="title">{list.name}</h1> 
                         </div>
                       <div className="line"/>
                       <div className="row">
                         <p>รอบที่เปิด </p>
                        <div className="Oval-2 ">
                          1
                       </div>
                    </div>
                    </div>
                ))}
      </div>
    </div>
  );
  } 

}

export default App;
