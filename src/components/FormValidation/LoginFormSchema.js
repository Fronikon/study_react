import * as Yup from "yup";

const loginFormSchema = Yup.object().shape({
    password: Yup.string()
        .min(2, "Must be longer than 2 characters")
        .max(5, "Must be shorter than 5 characters")
        .required("Required 2")
});
export default loginFormSchema;