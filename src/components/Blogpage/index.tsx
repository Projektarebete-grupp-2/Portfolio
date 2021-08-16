import './style.css'
import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Avatar from "@material-ui/core/Avatar";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import { api } from "../../api";
import { Link } from "react-router-dom";
import moment from "moment";
import AppBar from "@material-ui/core/AppBar";
import { WPPostEmbedded,WPPost } from "../../data/wordpressPostTypes";
import { Paper, ThemeProvider, useTheme } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({


  blogsContainer: {
    paddingTop: theme.spacing(3),
  },
  blogTitle: {
    fontWeight: 800,
    paddingBottom: theme.spacing(3),
  },
  card: {
    maxWidth: "100%",
  },
  media: {
    height: 240,
  },
  cardActions: {
    display: "flex",
    margin: "0 10px",
    justifyContent: "space-between",
  },
  author: {
    display: "flex",
  },
  paginationContainer: {
    display: "flex",
    justifyContent: "center",
  },
}));

interface Post {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  _embedded: WPPostEmbedded;
  categories: WPPost
}

interface PostsProps {
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
}


function Blogpage() {
  
const theme = useTheme();
  const classes = useStyles();
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    api.get(`posts?_embed`).then((response) => {
      const newPosts = response.data.map((post: PostsProps) => ({
        id: post.id,
        title: post.title.rendered,
        excerpt: post.excerpt.rendered,
        date: post.date,
        _embedded: post._embedded,
        categories: post.categories
      }));

      setPosts(newPosts);
    });
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Paper>
        <div>
          {/* header here */}
          <AppBar position="absolute" />
          <Container maxWidth="lg">
            <br />
            <Grid container spacing={3}>
              {posts.map((post) => (
                <Grid item xs={12} sm={6} md={4} key={post.id}>
                  <Card className={classes.card}>
                    <CardActionArea>
                      {post._embedded && post._embedded["wp:featuredmedia"] ? (
                        <CardMedia
                          className={classes.media}
                          image={
                            post._embedded["wp:featuredmedia"][0].source_url
                          }
                          title="Contemplative Reptile"
                        />
                      ) : (
                        <img
                          src="/assets/icon/icon-152x152.png"
                          alt="thumbnail"
                        />
                      )}
                      <CardContent>
                        <Link to={`/blog/${post.id}`} key={post.id}>
                          <Typography gutterBottom variant="h5" component="h2">
                            {post.title}
                          </Typography>
                        </Link>

                        <Typography
                          variant="body2"
                          color="textSecondary"
                          component="p"
                          dangerouslySetInnerHTML={{ __html: post.excerpt }}
                        ></Typography>
                      </CardContent>
                    </CardActionArea>
                    <CardActions className={classes.cardActions}>
                      <Box className={classes.author}>
                        <Avatar src={post._embedded.author[0].avatar_urls[0]} />
                        <Box ml={2}>
                          <Typography
                            variant="subtitle2"
                            color="textSecondary"
                            component="p"
                          >
                            Author: {post._embedded.author[0].name}
                          </Typography>
                          <Typography
                            variant="subtitle2"
                            color="textSecondary"
                            component="p"
                          >
                            Published:{" "}
                            {moment(post.date).format("MMMM Do YYYY")}
                          </Typography>
                        </Box>
                      </Box>
                      <Box>
                        <BookmarkBorderIcon />
                      </Box>
                    </CardActions>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Container>
        </div>
      </Paper>
    </ThemeProvider>
  );
   
}

export default Blogpage;
