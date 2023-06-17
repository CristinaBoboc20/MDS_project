import blogsData from "../../data/blogs";
import { Link as RouterLink } from "react-router-dom";
// import "../../styles/blogCard.css"
// import '../../styles/cardImage.css'
// import "../sass/main.scss"; // Import the main.scss file
import "../../styles/main.scss"
const Blog3 = () => {
  return (
    <>
      {blogsData.slice(0, 3).map((item) => (
        <div
          className="col-lg-4 col-sm-6"
          key={item.id}
          data-aos="fade"
          data-aos-delay={item.delayAnimation}
        >
          <div>{item.id}</div>
          <RouterLink to="/article1" className="blogCard -type-1 d-block">
            <div className="blogCard__image">
              <div className="ratio ratio-4:3 rounded-4 rounded-8">
                <img
                  src={item.img}
                  alt={item.title}
                  width={400}
                  height={300}
                  className="img-ratio js-lazy"
                />
              </div>
            </div>
            <div className="mt-20">
              <h4 className="text-dark-1 text-18 fw-500">{item.title}</h4>
              <div className="text-light-1 text-15 lh-14 mt-5">{item.date}</div>
            </div>
          </RouterLink>
        </div>
      ))}
    </>
  );
};

export default Blog3;
