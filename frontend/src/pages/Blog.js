import React from "react";
import Meta from "../components/Meta";
import BlogCard from "../components/BlogCard";
import Container from "../components/Container";

const Blog = () => {
  return (
    <>
      <Meta title={"Blogs"} />
      <Container class1="blog-wrapper home-wrapper-2 py-5">
        <div> Blog Goes Here</div>
      </Container>
    </>
  );
};

export default Blog;