import React, {useState, useEffect} from 'react';
import {api} from '../../api';
import './style.css';
import UpcomingWorkCard from '../UpcomingWorkCard';
import { WPPostEmbedded,WPPost } from "../../data/wordpressPostTypes";
import { Container, Grid } from '@material-ui/core';
import { Paper, ThemeProvider, useTheme } from "@material-ui/core";


interface Work {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  _embedded: WPPostEmbedded;
  categories: WPPost;
  content: {
    rendered: string;
  };
}

interface WorksProps {
  id: number;
  date: string;
  title: {
    rendered: string;
  };
  excerpt: {
    rendered: string;
  };
  _embedded: WPPostEmbedded;
  categories: WPPost;
  content: {
    rendered: string;
  };
}

const Portfolio = () => {
const theme = useTheme();
    const [works, setWorks] = useState<Work[]>([]);
    
    useEffect( () => {
        api.get('works?_embed').then(response => {
         const newPosts = response.data.map((work: WorksProps) => ({
        id: work.id,
        title: work.title.rendered,
        content: work.content.rendered,
      }));
            setWorks(newPosts);       
        })
    }, [])
    

    return (
      <ThemeProvider theme={theme}>
        <Paper>
          <Container className="portfolio">
            <Grid className="container">
              <div className="hero">
                <h1 className="title">
                  <b>Upcoming Projects</b>
                </h1>
              </div>
              <div className="wrapper">
                {works.map((work) => (
                  <UpcomingWorkCard
                    key={`works-${work.id}`}
                    id={work.id}
                    title={work.title}
                    description={work.content}
                    type="portfolio"
                  />
                ))}
              </div>
            </Grid>
          </Container>
        </Paper>
      </ThemeProvider>
    );
}

export default Portfolio;
