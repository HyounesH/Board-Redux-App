import React from "react";
import ProjectBoard from "./components/ProjectBoard";
import Navbar from "./components/Navbar";
import {BrowserRouter as Router,Route } from "react-router-dom";
import AddPT from "./components/ProjectTask/AddPT";
import {Provider} from "react-redux";
import store from "./store";
function App() { 
  return (
    <Provider store={store}>
    <Router>
    <div>
      <Navbar />
      <Route exact path="/" component={ProjectBoard }/>
      <Route exact path="/addPT" component={AddPT}/>
    </div>
    </Router>
    </Provider>
  );
}

export default App;
