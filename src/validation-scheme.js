import * as Yup from "yup";
import {} from "@hookform/resolvers/yup";

const validationScheme = Yup.object().shape({
  name: Yup.string().trim().required(),
  email: Yup.string().trim().email().required(),
});

export default validationScheme;
