import "./style.css";
import React from "react";
import { Link } from "react-router-dom";
import Typography from "@material-ui/core/Typography";


const UpcomingWorkCard = (props) => {
  return (
    <div key={props.id} className="Card-Post">
      <div className="Card-Container">
        <Link to={`/${props.type}/${props.id}`}>
          <div className="Card-Wrapper">
            <Typography variant="h2" component="h2" className="Card-Title">
              {props.title}
            </Typography>
            <span className="Card-Date">{props.date}</span>
          </div>
          <Typography
            variant="h6"
            component="h6"
            className="Card-Excerpt"
            dangerouslySetInnerHTML={{
              __html: String(props.description).slice(0, 100),
            }}
          ></Typography>
        </Link>
      </div>
    </div>
  );
};

export default UpcomingWorkCard;
