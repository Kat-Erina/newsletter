import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import validationScheme from "../validatation-scheme";
import { useNavigate } from "react-router-dom";

const Form = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm({ resolver: yupResolver(validationScheme) });

  async function handleSubmitFn(data) {
    const { email } = data;

    localStorage.setItem("email", JSON.stringify(email));
    navigate("./subscribe");
  }

  return (
    <form>
      <label htmlFor="name" className="text-xs text-dark-navy font-bold">
        Name
        <span className=" float-right text-warning text-xs">
          {errors.name?.message}
        </span>
      </label>
      <br />
      <input
        className={`mt-2 py-4 px-6 w-full rounded-lg text-dark-navy border border-solid ${
          errors.name?.message
            ? " border-warning bg-light-warning"
            : " border-light-grey bg-white"
        }`}
        type="text"
        placeholder="name"
        id="name"
        {...register("name")}
      />
      <br />
      <label htmlFor="email" className="text-xs text-dark-navy font-bold ">
        Email{" "}
        <span className=" float-right text-warning text-xs mt-1">
          {errors.email?.message}
        </span>
      </label>
      <br />
      <input
        className={` py-4 px-6 w-full rounded-lg text-dark-navy border border-solid mt-2 ${
          errors.email?.message
            ? " border-warning bg-light-warning"
            : " border-light-grey bg-white"
        }`}
        type="email"
        placeholder="test@gmail.com"
        id="email"
        {...register("email")}
      />
      <button
        className="w-full bg-dark-navy flex justify-center py-4 mt-4 rounded-sm text-white font-bold hover:shadow-custom hover:bg-gradient-to-b from-orange to-pink"
        type="button"
        onClick={handleSubmit(handleSubmitFn)}
      >
        Subscribe to monthly newsletter!
      </button>
    </form>
  );
};

export default Form;
