import { testimonial1 } from "../../data/testimonial";
import "../../styles/components/testimonials.scss"
const Testimonial = () => {
    return (
      <div className="d-flex">
        {testimonial1.map((item) => (
          <div key={item.id} className="flex-grow-1 row items-center x-gap-30 y-gap-20">
            <div className="col-auto">
              <img width={80} height={80} src={item.avatar} alt="image" />
            </div>
            <div className="col-auto">
              <h5 className="text-16 text-white fw-500">{item.name}</h5>
              <div className="text-15 text-white lh-15">{item.designation}</div>
            </div>
            <p className="text-18 fw-400 text-white mt-30 sm:mt-20">
              {item.text}
            </p>
          </div>
        ))}
      </div>
    );
  };
  
  export default Testimonial;