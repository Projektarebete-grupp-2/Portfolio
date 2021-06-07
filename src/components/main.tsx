import React from "react";
import HelloWorld from './HelloWorld'
import Skills from './Skills';
import Team from './Team'
import  About  from "./About";

function Main() {
  return <div className="root">
    <HelloWorld />
    <Team />
    <Skills />
    <About />
    </div>;
}
export default Main;