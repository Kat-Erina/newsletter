import check from "../assets/check.png";
const Subscribe = () => {
  const email = JSON.parse(localStorage.getItem("email"));
  console.log(email);
  return (
    <main className="w-full min-h-full bg-slate-500">
      <section className="h-full flex flex-col px-4">
        <img className="flex-1 h-20 w-20 mt-[150px]" src={check} alt=""></img>
        <h1 className=" flex-1 font-bold text-dark-navy text-5xl mt-9">
          Thanks For Subscribing!
        </h1>
        <p className=" flex-1 text-dark-navy text-base font-normal mt-5 pb-80">
          A confirmation email has been sent to <b>{email},</b> Please open it
          and click the button inside to confirm your subscription
        </p>
        <button className=" bg-dark-navy py-4 px-8 rounded-lg text-white font-bold">
          Dismiss message!
        </button>
      </section>
    </main>
  );
};

export default Subscribe;
