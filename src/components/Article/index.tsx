import "./style.css";
import React, { useState, useEffect } from "react";
import Post from '../Post'
import {api} from '../../api'
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { Paper, ThemeProvider, useTheme } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";





interface PostProps {
  id: number;
  date: string;
  content: {rendered:string;}
  title: {
    rendered: string;
  };
  excerpt: {
    rendered: string;
  };
}



const Article = ({ match }) => {
  const theme = useTheme();
 
    const [article, setArticle] = useState({} as PostProps);
    const { params: { id } } = match;

    useEffect( () => {
       api.get(`posts/${id}?_embed`).then(response=>{
            setArticle(response.data);
        })
    }, [id])
    
    return (
      <ThemeProvider theme={theme}>
        <Paper>
          <AppBar position="absolute" />
          <Container maxWidth="lg">
            <br />
            <Grid className="container">
              <Grid item xs={12} className="hero">
                {article.title !== undefined && (
                  <Post
                    key={article.id}
                    title={article.title.rendered}
                    content={article.content.rendered}
                  />
                )}
              </Grid>
            </Grid>
          </Container>
        </Paper>
      </ThemeProvider>
    );
}

export default Article;