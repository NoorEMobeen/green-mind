import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { motion } from 'framer-motion';
import { Card, CardContent, Typography } from '@mui/material';
import '../styles/Article.css';

const Article = () => {
  const { category } = useParams();
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_URL}/api/articles/${category}`
        );
        setArticle(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching article:', error);
        setLoading(false);
      }
    };
    fetchArticle();
  }, [category]);

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  if (!article) {
    return <div className="error">Article not found.</div>;
  }

  return (
    <div className="article-container">
      <motion.h1
        className="article-title"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {article.title}
      </motion.h1>

      <motion.div
        className="article-sections"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        {article.sections.map((section, index) => (
          <Card
            key={index}
            className="section"
            component={motion.div}
            whileHover={{ scale: 1.02 }}
          >
            <CardContent>
              <Typography variant="h5" component="h2">
                {section.heading}
              </Typography>
              <Typography variant="body1" paragraph>
                {section.text}
              </Typography>
              {section.imageUrl && (
                <motion.img
                  src={section.imageUrl}
                  alt={section.heading}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                />
              )}
            </CardContent>
          </Card>
        ))}
      </motion.div>

      <motion.div
        className="tips"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Typography variant="h5" component="h2">
          Tips for Sustainability
        </Typography>
        <ul>
          {article.tips.map((tip, index) => (
            <li key={index}>{tip}</li>
          ))}
        </ul>
      </motion.div>

      {article.videoUrl && (
        <motion.div
          className="video-section"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Typography variant="h5" component="h2">
            Watch and Learn
          </Typography>
          <iframe
            src={article.videoUrl}
            title="Educational Video"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </motion.div>
      )}
    </div>
  );
};

export default Article;

// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import axios from 'axios';
// import { motion } from 'framer-motion';
// import '../styles/Article.css';

// const Article = () => {
//   const { category } = useParams();
//   const [article, setArticle] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchArticle = async () => {
//       try {
//         const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/articles/${category}`);
//         setArticle(response.data);
//         setLoading(false);
//       } catch (error) {
//         console.error('Error fetching article:', error);
//         setLoading(false);
//       }
//     };
//     fetchArticle();
//   }, [category]);

//   if (loading) {
//     return <div className="loading">Loading...</div>;
//   }

//   if (!article) {
//     return <div className="error">Article not found.</div>;
//   }

//   return (
//     <div className="article-container">
//       <motion.h1 className="article-title" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
//         {article.title}
//       </motion.h1>

//       <motion.div className="article-sections" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
//         {article.sections.map((section, index) => (
//           <div key={index} className="section">
//             <h2>{section.heading}</h2>
//             <p>{section.text}</p>
//             {section.imageUrl && <img  src={section.imageUrl} alt={section.heading} />}
//           </div>
//         ))}
//       </motion.div>

//       <motion.div className="tips" initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }}>
//         <h2>Tips for Sustainability</h2>
//         <ul>
//           {article.tips.map((tip, index) => (
//             <li key={index}>{tip}</li>
//           ))}
//         </ul>
//       </motion.div>

//       {article.videoUrl && (
//         <motion.div className="video-section" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
//           <h2>Watch and Learn</h2>
//           <iframe
//             src={article.videoUrl}
//             title="Educational Video"
//             frameBorder="0"
//             allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
//             allowFullScreen
//           ></iframe>
//         </motion.div>
//       )}
//     </div>
//   );
// };

// export default Article;

// // import React from 'react';
// // import { useParams } from 'react-router-dom';

// // const Article = () => {
// //   const { category } = useParams();

// //   // Placeholder content based on category
// //   const articleContent = {
// //     "climate-change": "Climate change is a long-term shift in global or regional climate patterns.",
// //     "recycling": "Recycling helps reduce waste and convert used materials into new products.",
// //     "renewable-energy": "Renewable energy comes from resources that are naturally replenished.",
// //     "water-conservation": "Water conservation is the practice of using water efficiently to reduce waste.",
// //     "ocean": "Oceans cover more than 70% of the Earth's surface and are crucial to life.",
// //     "carbon-footprint": "A carbon footprint is the total amount of greenhouse gases emitted by an individual.",
// //     "environment": "The environment encompasses all living and non-living things occurring naturally.",
// //     "animals": "Animals are multicellular organisms that play essential roles in ecosystems."
// //   };

// //   return (
// //     <div style={{ padding: "20px", maxWidth: "600px", margin: "0 auto", textAlign: "center" }}>
// //       <h1>{category.replace('-', ' ').toUpperCase()}</h1>
// //       <p>{articleContent[category] || "This is an article about sustainability."}</p>
// //     </div>
// //   );
// // };

// // export default Article;
