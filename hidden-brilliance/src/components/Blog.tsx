import React from 'react';
import vegabondImage from '../resources/vegabond.png'

import './Blog.css'; 
const Blog = () => {
  // Your component logic goes here
  return (
    <div>
  
<div>
<h2></h2>
<img src={vegabondImage} alt="Image from the manga Vegabond with quote" className='blog-img' />
<p>Lately I have been really inspired by Vegabond. There are a lot of memes that says Miyamoto Musashi just slices down camps of people and says and inspirational quote. <br />
To that I ask, what more can you ask for? Part of me wishes it was an anime but another part of me really respects <a href='https://en.wikipedia.org/wiki/Takehiko_Inoue'>Takehiko Inoue's</a> commitment to delivering his art through the delivery method that HE choses.
</p>
</div>
    
  </div>
);
};

export default Blog;