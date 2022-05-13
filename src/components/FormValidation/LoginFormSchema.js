import * as Yup from "yup";

const loginFormSchema = Yup.object().shape({
    password: Yup.string()
        .min(5, "Must be longer than 5 characters")
        .max(20, "Must be shorter than 20 characters")
        .required("Required 2")
});
export default loginFormSchema;