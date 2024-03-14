import { Route, Routes } from "react-router-dom";
import "./App.css";
import Newsletter from "./pages/Newsletter";
import Subscribe from "./pages/Subscribe";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import validationScheme from "./validation-scheme";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function App() {
  const [email, setEmail] = useState(null);

  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(validationScheme) });

  async function handleSubmitFn(data) {
    const { email } = data;
    setEmail(email);
    navigate("./subscribe");
  }

  return (
    <Routes>
      <Route
        path="/"
        element={
          <Newsletter
            register={register}
            handleSubmit={handleSubmit}
            errors={errors}
            handleSubmitFn={handleSubmitFn}
          />
        }
      ></Route>
      <Route path="/subscribe" element={<Subscribe email={email} />}></Route>
    </Routes>
  );
}

export default App;
