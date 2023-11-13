import React from "react";
import Name from "./components/Name";
import Welcome from "./components/welcome/Welcome";
import Student from "./components/student/Student";


function App() {
  return(
  <React.Fragment>
    <h1>Hello ReactJS</h1>
    <Welcome/>
    <Name fnm="Stefan" lnm="Kepinski"/>
    <Student college="George Brown College"/>
  </React.Fragment>
  );
}

export default App;
