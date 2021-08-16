import React, { useState, useEffect } from 'react';
import './style.css'

import Post from '../Post';
import { api } from "../../api";

interface PostProps {
  id: number;
  date: string;
  content: { rendered: string };
  title: {
    rendered: string;
  };
  excerpt: {
    rendered: string;
  };
}


const Work = ({ match }) => {

    const [work, setWorks] = useState({} as PostProps);
    const { params: { id } } = match;

    useEffect( () => {
        api.get(`works/${id}?_embed`).then( response => {
            setWorks(response.data);
        })
    }, [id])

    return(
        <main className="work">
            <div className="container">
                <div className="hero">
                    {
                      work.title !== undefined &&
                      (
                          <Post
                              key={work.id}
                              title={work.title.rendered}
                              content={work.content.rendered}
                          />
                      )
                    }
                </div>
            </div>
        </main>
    );
}

export default Work;