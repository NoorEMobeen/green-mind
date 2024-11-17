// src/components/ArticlesHub.js

import React from 'react';
import ArticleCard from '../components/ArticleCard';
import '../styles/ArticlesHub.css';
// import { useEffect, useState } from 'react';
// import axios from 'axios';


const categories = [
  {
    category: "climate-change",
    title: "Climate Change",
    description: "Learn about the challenges and actions we can take to address climate change. Read more...",
    imageUrl: "/images/climate-change.jpg",
  },
  {
    category: "recycling",
    title: "Recycling",
    description: "Explore sustainable waste management practices for a cleaner environment. Read more...",
    imageUrl: "/images/recycling.jpeg",
  },
  {
    category: "renewable-energy",
    title: "Renewable Energy",
    description: "Discover how renewable energy sources can power a greener, more sustainable future. Read more...",
    imageUrl: "/images/renewable-energy.png",
  },
  {
    category: "water-conservation",
    title: "Water Conservation",
    description: "Learn the importance of conserving water and how we can reduce water wastage. Read more...",
    imageUrl: "/images/water-conservation.jpg",
  },
  {
    category: "ocean",
    title: "Ocean Preservation",
    description: "Dive into the efforts to protect our oceans and marine biodiversity. Read more...",
    imageUrl: "/images/ocean.jpg",
  },
  {
    category: "carbon-footprint",
    title: "Carbon Footprint",
    description: "Understand the impact of carbon emissions and ways to reduce your carbon footprint. Read more...",
    imageUrl: "/images/carbon-footprint.jpg",
  },
  {
    category: "environment",
    title: "Environmental Awareness",
    description: "Join the movement to raise awareness and protect our planet. Read more...",
    imageUrl: "/images/environment.jpg",
  },
  {
    category: "animals",
    title: "Biodiversity",
    description: "Learn about the diversity of life on Earth and why it's essential for our survival. Read more...",
    imageUrl: "/images/animals.jpg",
  },
];



const ArticlesHub = () => {
// const [categories, setCategories] = useState([]);

// useEffect(() => {
//     const loadCategories = async () => {
//       try {
//         const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/articles/categories`);
//         setCategories(response.data);
//       }
//         catch (error) {
//         console.error('Error fetching categories:', error);
//       }
//     };
//     loadCategories();       

//   }, []);


  return (
    <div className="articles-hub">
      <h1>Explore Our Sustainability Articles</h1>
      <p>Discover informative articles on sustainability, climate change, and much more.</p>
      <div className="articles-grid">
        {categories.map((item) => (
          <ArticleCard key={item.category} item={item} />
        ))}
      </div>
    </div>
  );
};

export default ArticlesHub;
