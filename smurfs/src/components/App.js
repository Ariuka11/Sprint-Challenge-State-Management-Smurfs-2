import React, { useEffect } from "react";
import {connect} from 'react-redux'
import "./App.css";
import Smurfs from "./Smurfs";
import {fetchingData} from '../action'
import SmurfForm from "./SmurfForm";

const App = (props) => {
  
    useEffect(() => {
      props.fetchingData()
    },[])

    return (
      <div className="App">
       <Smurfs smurfs = {props.smurfs}/>
       <SmurfForm />
      </div>
    );
  
}

const mapStateToProps = state => {
  return {
    smurfs : state.smurfs
  }
}

export default connect(mapStateToProps, {fetchingData})(App);
