import { openDB } from 'idb';

const DB_NAME = 'greenMind';
const STORE_NAME = 'articlesStore';
const QUIZZES_STORE_NAME = 'quizzesStore';


// Initialize the database
export const initDB = async () => {
  return openDB(DB_NAME, 1, {
    upgrade(db) {
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME, { keyPath: 'category' }); // Use _id as the primary key
      }

      if (!db.objectStoreNames.contains(QUIZZES_STORE_NAME)) {
        db.createObjectStore(QUIZZES_STORE_NAME, { keyPath: 'categoryId' }); // Use _id as the primary key
      }
    },
  });
};

// Save an article
export const saveQuiz = async (quiz) => {
  const db = await initDB();
  const res = await db.put(QUIZZES_STORE_NAME, quiz);
  console.log('Quiz saved:', res);
  return res;
};

// Get an article by ID
export const getQuiz = async (categoryId) => {
  const db = await initDB();
  const res = await db.get(QUIZZES_STORE_NAME, categoryId);
  console.log("Quiz:", res);
  return res;
};

// Get all articles
export const getQuizzes = async () => {
  const db = await initDB();
  const res = await db.getAll(QUIZZES_STORE_NAME);
  console.log(res);
  return res;
};

// Delete an article
export const deleteQuiz = async (categoryId) => {
  const db = await initDB();
  return db.delete(QUIZZES_STORE_NAME, categoryId);
};




// Save an article
export const saveArticle = async (article) => {
  const db = await initDB();
  const res = await db.put(STORE_NAME, article);
  console.log('Article saved:', res);
  return res;
};

// Get an article by ID
export const getArticle = async (category) => {
  const db = await initDB();
  const res = await db.get(STORE_NAME, category);
  return res;
};

// Get all articles
export const getAllArticles = async () => {
  const db = await initDB();
  const res = await db.getAll(STORE_NAME);
  console.log(res);
  return res;
};

// Delete an article
export const deleteArticle = async (category) => {
  const db = await initDB();
  return db.delete(STORE_NAME, category);
};
