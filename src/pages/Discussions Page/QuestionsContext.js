import React, { createContext, useContext, useState } from 'react';

const QuestionsContext = createContext();

export const useQuestions = () => useContext(QuestionsContext);

const QuestionsProvider = ({ children }) => {
  const [questions] = useState([
    {
        id: 1,
        title:
          "Best practices for data fetching in a Next.js application with Server-Side...",
        tag: [
          {
            tag1: "NEXTJS",
            tag2: "REACT",
          },
        ],
        name: " Mrityunjay Pathak",
        time: "asked 5 month ago",
        votes: "29 Likes",
        answer: "19 answer",
        views: "50 views",
      },
      {
        id: 2,
        title: "Async/Await Function Not Handling Errors Properly",
        tag: [
          {
            tag1: "NEXTJS",
            tag2: "REACT",
          },
        ],
        name: " Mrityunjay Pathak",
        time: "asked 3 month ago",
        votes: "9 Likes",
        answer: "19 answer",
        views: "50 views",
      },
      {
        id: 3,
        title: "Product Feedback",
        tag: [
          {
            tag1: "NEXTJS",
            tag2: "REACT",
          },
        ],
        name: " Mrityunjay Pathak",
        time: "asked 2 month ago",
        votes: "9 Likes",
        answer: "1 answer",
        views: "5 views",
      },
      {
        id: 4,
        title: "Next JS router",
        tag: [
          {
            tag1: "NEXTJS",
            tag2: "REACT",
          },
        ],
        name: " Mrityunjay Pathak",
        time: "asked 1 month ago",
        votes: "29 Likes",
        answer: "29 answer",
        views: "20 views",
      },
      {
        id: 5,
        title: "Competition Hosting",
        tag: [
          {
            tag1: "NEXTJS",
            tag2: "REACT",
          },
        ],
        name: " Mrityunjay Pathak",
        time: "asked 3 month ago",
        votes: "91 Likes",
        answer: "9 answer",
        views: "501 views",
      },
      {
        id: 6,
        title: "Accomplishments",
        tag: [
          {
            tag1: "NEXTJS",
            tag2: "REACT",
          },
        ],
        name: " Mrityunjay Pathak",
        time: "asked 2 month ago",
        votes: "19 Likes",
        answer: "9 answer",
        views: "150 views",
      },
    // Add other questions similarly...
  ]);

  return (
    <QuestionsContext.Provider value={{ questions }}>
      {children}
    </QuestionsContext.Provider>
  );
};

export default QuestionsProvider;
