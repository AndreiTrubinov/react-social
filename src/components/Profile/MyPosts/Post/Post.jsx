import React from "react";
import ava from "../../../../images/ava.jpg";
import styles from './Post.module.scss'

const Post = (props) => {
    return (
        <div className={styles.postWrapper}>
            <img className={styles.avatar} src={ava} alt="avatar" />
            <p>{props.message}</p>
        </div>
    )
}
export default Post;