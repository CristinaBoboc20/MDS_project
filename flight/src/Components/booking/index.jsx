// import CallToActions from "../../../components/common/CallToActions";
// import Seo from "../../../components/common/Seo";
import Header1 from "../header";
import Footer from "../Footer/Footer";
import StepperBooking from "./StepperBooking";

const Book= () => {
  return (
    <>
      {/* <Seo pageTitle="Hotel Booking Page" /> */}
      {/* End Page Title */}

      <div className="header-margin"></div>
      {/* header top margin */}

      <Header1 />
      {/* End Header 1 */}

      <section className="pt-40 layout-pb-md">
        <div className="container">
          <StepperBooking />
        </div>
        {/* End container */}
      </section>
      {/* End stepper */}

      {/* <CallToActions /> */}
      {/* End Call To Actions Section */}

      <Footer />
    </>
  );
};

export default Book;
