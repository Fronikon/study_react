import { Field, Form, Formik, ErrorMessage } from "formik";
import React from "react";
import postFormSchema from "../../FormValidation/PostFormSchema";
import styles from "./MyPosts.module.scss";
import Post from "./Post/Post";

const MyPosts = React.memo((props) => {
    let postsElements = props.posts.map((cur) => <Post key={cur.id} comment={cur.comment} />)

    function addPost(values) {
        props.addPost(values.post);
    }

    return (
        <div className={styles.myPosts}>
            <Formik
                initialValues={{
                    post: "",
                }}
                onSubmit={addPost}
                validationSchema={postFormSchema}
            >
                {(formik) => (
                <Form>
                    <div className={styles.new_post}>
                        <Field
                            name='post'
                            as={'textarea'}
                            cols="40"
                            rows="5"
                            placeholder="Your new post..."
                            className={formik.isValid ? '' : styles.post_error}
                        ></Field>
                        <br />
                        <ErrorMessage name="post" component={'span'} className={styles.error_message} />
                    </div>
                    <button type="submit">Add post</button>
                </Form>)}
            </Formik>
            <h3 className="title">Посты:</h3>
            <div className={styles.posts}>
                {postsElements}
            </div>
        </div>
    );
})

export default MyPosts;