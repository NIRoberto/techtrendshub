import React from 'react'
import Card from './Card';
import blog from './data/blog';

const Side = () => {
  return (
    <div className="sidebar">
      <div className="category">
        <h4>Category</h4>
        <ul>
          <li>
            <a href="#asd">
              <span>Cloud Computing</span>
              <span>(3)</span>
            </a>
          </li>
          <li>
            <a href="#fds">
              <span>DevOps</span>
              <span>(3)</span>
            </a>
          </li>
          <li>
            <a href="#asd">
              <span>BlockChain</span>
              <span>(3)</span>
            </a>
          </li>
          <li>
            <a href="#sdf">
              <span>Artificial intelligence</span>
              <span>(3)</span>
            </a>
          </li>
        </ul>
      </div>
      <div className="popular">
        <h4> Popular post</h4>
        {blog.map((item, index) => {
          return <Card key={item.id} item={item} index={index} />;
        })}
      </div>
    </div>
  );
}

export default Side