// src/components/ArticleCard.js

import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/ArticlesHub.css';

const ArticleCard = ({ item }) => {
  //   const history = useHistory();
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/articles/${item.category}`);
  };

  return (
    <div className="article-card" onClick={handleCardClick}>
      <div className="image-container">
        <img src={item.imageUrl} alt={item.title} className="card-image" />
      </div>
      <div className="card-content">
        <h2>{item.title}</h2>
        <p>{item.description}</p>
      </div>
    </div>
  );
};

export default ArticleCard;
