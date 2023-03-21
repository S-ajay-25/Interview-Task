import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import BasicProgramming from './components/BasicProgramming';
import ComplexPrograms from './components/ComplexPrograms';
import CourseDetails from './components/CourseDetails';
import DataStructure from './components/DataStructure';
import HomePage from './components/HomePage';
// import ProgrammingLanguage from './components/ProgrammingLanguage';
import Java from './Route/Java';
import JavaScript from './Route/JavaScript';
import Python from './Route/Python';
import SimplePrograms from './components/SimplePrograms';
import Programmingpy from './components/Programmingpy';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Routes>
        <Route path='/' element  = {<HomePage />} />
        <Route path='/coursedetails' element  = {<CourseDetails />} />
        <Route path='/basicprogramming' element  = {<BasicProgramming />} />
        <Route path='/programmingpy' element  = {<Programmingpy />} />
        {/* <Route path='/programminglanguage' element  = {<ProgrammingLanguage />} /> */}
        <Route path='/datastructure' element  = {<DataStructure />} />
        <Route path='/simpleprograms' element  = {<SimplePrograms />} />
        <Route path='/complexprograms' element  = {<ComplexPrograms />} />
        <Route path='/python' element  = {<Python />} />
        <Route path='/java' element  = {<Java />} />
        <Route path='/javascript' element  = {<JavaScript />} />
        
      </Routes>
      </BrowserRouter>
      
      

    </div>
  );
}

export default App;
