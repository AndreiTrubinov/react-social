import React from "react";
import Post from "./Post/Post";
import styles from './MyPosts.module.scss';

const MyPosts = (props) => {
    return (
        <div>
            <h3>My Posts</h3>
            <div className={styles.addPost}>
                <textarea className={styles.textarea} cols="30" rows="2">What's new?</textarea>
                <button className={styles.addPostButton}>Add New Post</button>
            </div>
            <section>
                {props.posts.map(post => 
                <Post key={post.id} message={post.message} />)}
            </section>
        </div>
    )
}
export default MyPosts;