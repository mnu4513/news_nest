import React, { useEffect, useState } from "react";

import { list } from "./Constant";
import NewsCard from "./NewsCard";

const News = () => {
  const [newsList, setNewsList] = useState(list);
  const [page, setPage] = useState(1);

  const [newsType, setNewsType] = useState('everything');
  const [search, setSearch] = useState('undefined');
  const [sortBy, setSortBy] = useState('publishedAt');
  const [language, setLanguage] = useState('en');

  useEffect(() => {
    // fetchNews();
    console.log(language);
  }, [page, search, newsType, sortBy, language]);

  async function fetchNews () {
    const rawData = await fetch(`http://localhost:3001/get-all-news/${newsType}/${language}/${search}/${sortBy}/${page}`);
    const data = await rawData.json();
    console.log(data?.data?.articles);
    if (data?.data?.articles) {
      setNewsList(data?.data?.articles);
    };
  };

  function handleSearch (e) {
    setSearch(e.target.value);
    setPage(1);
  };

  const handlePrev = (e) => {
    e.preventDefault();
      if (page > 1) {
        setPage(page - 1);
      }
  };


  const handleNext = (e) => {
    e.preventDefault();
      if (page < 5) {
        setPage(page + 1);
      }
  };

  return (
    <div className="news">

      <div className="filterBar">
        <div>
        <label htmlFor="newsType">Type: </label>
        <select id="newsType" value={newsType} onChange={(e) => setNewsType(e.target.value)}>
        
          <option value="everything">Everything</option>
          <option value="highlight">Highlight</option>
        </select>
        </div>
        
        <div>
          <label htmlFor="sortBy">Sort: </label>
        <select id="sortBy" value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="time">Time</option>
          <option value="popularity">Popularity</option>
          <option value="relevancy" >Relevancy</option>
        </select>
        </div>

       <div>
        <label htmlFor="language">Ln:</label>
       <select id="language" value={language} onChange={(e) => {setLanguage(e.target.value)}}>
          <option value="en">En</option>
          <option value={undefined}>All language</option>
          <option value="fr">Fr</option>
          <option value="de">De</option>
          <option value="he">He</option>
          <option value="it">It</option>
          <option value="ru">Ru</option>
        </select>
       </div>
          <input type="text" placeholder="Search news" onChange={(e) => handleSearch(e)} id="search"/>
      </div>
      {newsList.length < 1 ? null : (
        <div>
          {newsList.map((item) => {
            return <NewsCard data={item} key={item.url} />;
          })}
        </div>
      )}
      <button onClick={(e) => handlePrev(e)}>prev</button>
    You are on page:  {page}
  
      <button onClick={(e) => handleNext(e)}>next</button>
    </div>
  );
};

export default News;
