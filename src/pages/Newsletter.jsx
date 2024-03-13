import check from "../assets/check.png";
import Form from "../components/Form";

const Newsletter = () => {
  return (
    <main className="  w-full min-h-dvh flex items-center ">
      <section className="w-full flex flex-col md:flex-row-reverse md:w-[928px] md:h-[640px] md:gap-8 bg-white  md:px-9 md:rounded-3xl md:py-6">
        <section className=" h-72 bg-gradient-to-b from-orange to-pink rounded-b-large md:flex-1 md:h-full md:rounded-lg "></section>
        <section className=" bg-slate-100   px-4 py-10 md:flex-1">
          <h1 className="text-4xl font-bold mb-6 text-dark-navy ">
            Stay Up Updated!
          </h1>
          <p className=" text-dark-navy text-base leading-4 mb-6 ">
            Join 60,000+ product managers receiving monthly updates on;
          </p>
          <ul className="mb-10">
            <li className="flex flex-row w-full py-1">
              <img src={check} alt="" className="h-5 w-5 mr-2"></img>
              <p className="text-base text-dark-navy">
                Product discovery and Building what matters
              </p>
            </li>
            <li className="flex flex-row w-full py-1">
              <img src={check} alt="" className="h-5 w-5 mr-2"></img>
              <p className="text-base text-dark-navy">
                Measuring to ensure updates are a success
              </p>
            </li>
            <li className="flex flex-row w-full py-1">
              <img src={check} alt="" className="h-5 w-5 mr-2"></img>
              <p className="text-base text-dark-navy">And much more!</p>
            </li>
          </ul>
          <Form />
        </section>
      </section>
    </main>
  );
};

export default Newsletter;
