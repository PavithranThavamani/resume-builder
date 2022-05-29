import React from "react";
import EducationalDetails from "./LinkPages/EducationalDetails";
import PersonalDetails from "./LinkPages/PersonalDetails";
import { BrowserRouter, Link, Route } from "react-router-dom";
import ProjectDeveloped from "./LinkPages/ProjectDeveloped";
import ExperienceDetails from "./LinkPages/ExperienceDetails";
import ExtraDetails from "./LinkPages/ExtraDetails";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Link to="/"></Link>
      </div>
      <Route path="/" component={PersonalDetails} exact />
      <Route path="/educationaldetails" component={EducationalDetails} />
      <Route path="/projectdetails" component={ProjectDeveloped} />
      <Route path="/experiencedetails" component={ExperienceDetails} />
      <Route path="/extradetails" component={ExtraDetails} />
    </BrowserRouter>
  );
}

export default App;
