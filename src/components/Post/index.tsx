import React from "react";
import './Poststyle.css';
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import CardContent from "@material-ui/core/CardContent";

const Post = (props) => {
    return (
      <Box key={props.id} className="Post">
        <Typography
          component="h1"
          variant="h6"
          noWrap
          className="Post-title"
        >
          {props.title}
        </Typography>
        <CardContent
          className="Post-Content"
          dangerouslySetInnerHTML={{ __html: props.content }}
        ></CardContent>
      </Box>
    );
}

export default Post;