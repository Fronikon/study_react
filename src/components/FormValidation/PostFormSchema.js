import * as Yup from "yup";

const postFormSchema = Yup.object().shape({
    post: Yup.string()
        .min(5, "Must be longer than 5 characters")
        .max(20, "Must be shorter than 20 characters")
        .required('Text is required')
});
export default postFormSchema;