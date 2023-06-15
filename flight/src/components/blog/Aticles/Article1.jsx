import React, { useEffect, useState } from "react";
import blogsData from "../../../data/blogs";
import { useRouter } from "react-router-dom";

import DetailsContent from "../blog-details/DetailsContent";
import FormReply from "../blog-details/FormReply";
import TopComment from "../blog-details/TopComment";
import BlogNavigator from "../blog-details/BlogNavigator";
import Comments from "../blog-details/Comments";

const Article1 = () => {
  const firstBlog = blogsData[0];
  return (
    <>
      <section className="layout-pt-md layout-pb-md">
        <div className="container">
          <div className="row y-gap-40 justify-center text-center">
            <div className="col-auto">
              <div className="text-15 fw-500 text-blue-1 mb-8 text-capitalize">
                {firstBlog?.tag}
              </div>
              <h1 className="text-30 fw-600">{firstBlog?.title}</h1>
              <div className="text-15 text-light-1 mt-10">
                {firstBlog?.date}
              </div>
            </div>
            <div className="col-12">
              <img
                src={firstBlog?.img}
                alt={firstBlog?.title}
                className="col-12 rounded-8 w-100 img_large_details"
              />
            </div>
          </div>
          {/* End .row top bar image and title */}

          <div className="row y-gap-30 justify-center">
            <div className="col-xl-8 col-lg-10 layout-pt-md">
              <DetailsContent />
              {/* Details content */}

              <div className="border-top-light border-bottom-light py-30 mt-30">
                <TopComment />
              </div>
              {/* End  topcommnet  */}
              <div className="border-bottom-light py-30">
                <BlogNavigator />
              </div>
              {/* End BlogNavigator */}

              <h2 className="text-22 fw-500 mb-15 pt-30">Guest reviews</h2>
              <Comments />
              {/* End comments components */}

              <div className="border-top-light pt-40 mt-40" />

              <div className="row">
                <div className="col-auto">
                  <h3 className="text-22 fw-500">Leave a Reply</h3>
                  <p className="text-15 text-dark-1 mt-5">
                    Your email address will not be published.
                  </p>
                </div>
              </div>
              {/* End Leave a repy title */}

              <FormReply />
            </div>
            {/* End .col */}
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}
      </section>
      {/* Details Blog Details Content */}
    </>
  );
};

export default Article1;
