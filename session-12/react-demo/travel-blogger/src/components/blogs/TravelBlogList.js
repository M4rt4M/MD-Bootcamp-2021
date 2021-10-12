import React from "react";
import TravelBlogItem from "./TravelBlogItem";

import classes from "./TravelBlogList.module.css";

const TravelBlogList = ({ blogs }) => {
  return (
    <ul className={classes.list}>
      {blogs.map((blog) => (
        <TravelBlogItem
          key={blog.id}
          id={blog.id}
          image={blog.image}
          title={blog.title}
          description={blog.description}
          address={blog.address}
          city={blog.city}
        />

  // Alternative:
  /* // destructure each blog:
  const { id, image, title, description, address, city } = blog;

  return (
    <TravelBlogItem
      key={id}
      id={id}
      image={image}
      title={title}
      description={description}
      address={address}
      city={city}
    /> */
      ))}
    </ul>
  );
};

export default TravelBlogList;