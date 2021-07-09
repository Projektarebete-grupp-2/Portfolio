import React from "react";
import './Poststyle.css';
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";

const Post = (props) => {
    return (
      <Box key={props.id} className="Post">
        
        <Typography
          component="h1"
          variant="h6"
          color="inherit"
          noWrap
          className="Post-title"
        >
          {props.title}
        </Typography>
        <div
          className="Post-Content"
          dangerouslySetInnerHTML={{ __html: props.content }}
        >

        </div>
      </Box>
    );
}

export default Post;