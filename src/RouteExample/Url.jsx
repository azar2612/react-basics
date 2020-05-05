import React from 'react';
import { Link, useParams } from 'react-router-dom';

const articlePostData = [
  { id: 4, title: 'Article Four', url: 'article-four' },
  { id: 5, title: 'Article Five', url: 'article-five' },
  { id: 6, title: 'Article Six', url: 'article-six' },
];

export const BlogPost = () => (
  <>
    <h3>Blog Post</h3>
    <ul>
      {articlePostData.map((a) => (
        <li key={a.id}><Link to={`/a/${a.url}`} style={{ color: 'red' }}>{a.title}</Link></li>
      ))}
    </ul>
  </>
);

export const ArticlePost = () => {
  const { articlepost } = useParams();
  return (
    <>
      <h2>
        Article:
        {' '}
        {articlepost}
      </h2>
    </>
  );
};
