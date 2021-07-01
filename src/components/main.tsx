import React from "react";
import HelloWorld from './HelloWorld'
import Skills from './Skills';
import Team from './Team'
import  About  from "./About";
import Projects from './Project';
import Header from './Header';




function Main() {
  return (
    <div className="root">

      <HelloWorld />
      <Team />
      <Skills />
      <About />
      <Projects />
 </div>
  );
}
export default Main;