import React from "react";
import '../index.css';

const NewsCard = (props) => {
  const { title, description, url, urlToImage, content, source, author } =
    props.data;
  console.log(description, content, source);
  return (
    <div className="newsCard" >
        <div className="img">
      <img
        
        src={urlToImage}
        alt=""
      />

        </div>
 <div className="content">
 <h3>{title.slice(0, 60)}</h3>
      <h4> Author : {author} </h4>
      <a href={url}>Read More</a>
 </div>
    </div>
  );
};

export default NewsCard;
