import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
    return <section>
        <ProfileInfo />
        <MyPosts posts={props.posts} />
    </section>
}
export default Profile;