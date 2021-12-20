import React from "react";
import styles from './ProfileInfo.module.scss';

const ProfileInfo = (props) => {
    return (
        <div className={styles.profileInfo}>
            <div>
                <img className="user-bg" src="https://i.playground.ru/p/2H8wfBwKefPjzMShNkC2bQ.jpeg" alt='logo' />
            </div>
            <div>AVA + Description</div>
        </div>
    )
}

export default ProfileInfo;