import React, { CSSProperties } from 'react';
import "../style/ProjectCard.css";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import Chip from "@material-ui/core/Chip";
import { Container } from '@material-ui/core';
 
interface Props {
 project: {
 title: string;
 desc: string;
 img: string;
 alt: string;
 url: string;
 frameworks: string[] | undefined;
 };
}
 
function ProjectCard({ project }: Props) {
 const Fade = require('react-reveal/Fade');
 return (
   <Fade duration={800} bottom>
     <Container className="project-card-main">
     <a href={project.url} style={{color: 'red'}}>
       <Card className="card-title" >
         <CardHeader title={project.title} />

         <img src={project.img} alt={project.alt} style={image} />

         <CardContent className="card-desc">
           <Typography variant="body2" color="textSecondary" component="p">
             {project.desc}
           </Typography>
           <Chip label={project.frameworks} color="secondary" />
         </CardContent>
       </Card>
     </a>
     </Container>
   </Fade>
 );
}
 
export default ProjectCard;


const image: CSSProperties = {
  width: "150px",
  display: "flex",
  margin: "0 auto",
  marginTop: "1 rem",
};
