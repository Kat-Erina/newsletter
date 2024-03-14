import check from "../assets/check.png";
import PropTypes from "prop-types";
const Subscribe = ({ email }) => {
  return (
    <main className="w-full min-h-full md:flex md:items-center">
      <section className="h-full flex flex-col px-4  md:w-[504px] md:h-[520px] md:bg-white md:px-10 md:rounded-2xl">
        <img
          className="flex-1 h-20 w-20 mt-20 md:mt-8"
          src={check}
          alt=""
        ></img>
        <h1 className=" flex-1 font-bold text-dark-navy text-5xl mt-9">
          Thanks For Subscribing!
        </h1>
        <p className=" flex-1 text-dark-navy text-base font-normal mt-5 mb-32 md:mb-[30px]">
          A confirmation email has been sent to {email} Please open it and click
          the button inside to confirm your subscription
        </p>
        <button className=" bg-dark-navy py-4 px-8 rounded-lg text-white font-bold md:mb-[30px]  ">
          Dismiss message!
        </button>
      </section>
    </main>
  );
};

Subscribe.propTypes = {
  email: PropTypes.string,
};
export default Subscribe;
