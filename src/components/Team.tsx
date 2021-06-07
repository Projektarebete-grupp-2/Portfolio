import React from "react";
import { teammembers } from "../data/data";
import TeamCard from "./TeamCard";
import "./Team.css";




function Team() {
  return (
    <section className="section--exp" id="experience">
      <div className="inner">
        <div className="exp-title">
          <p>{teammembers.title}</p>
        </div>

        <div className="exp-cards">
          {teammembers.lists.map((list, i) => {
            return <TeamCard teammembers={list} key={i} />;
          })}
        </div>
      </div>
    </section>
  );
}
export default Team;
