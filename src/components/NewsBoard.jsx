import { useEffect, useState } from "react";
import NewsItem from "./NewsItem";

const NewsBoard = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${import.meta.env.VITE_API_KEY}`;
    
    fetch(url)
      .then(response => response.json())  // Corrected this line
      .then(data => setArticles(data.articles))
      .catch(error => console.error("Error fetching news:", error));  // Added error handling
  }, []);

  return (
    <div>
      <h2 className="text-center">
        Latest <span className="badge bg-danger"> News</span>
      </h2>
      <div style={{display:"flex",alignItems:"center",justifyContent:"center",flexWrap:"wrap"}}>
      {articles.map((news, index) => (
        <NewsItem 
        key={index} 
        title={news.title} 
        description={news.description} 
        src={news.urlToImage} 
        url={news.url} 
        />
      ))}
      </div>
    </div>
  );
};

export default NewsBoard;
