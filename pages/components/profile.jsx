import React from 'react';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import styles from "./profile.module.css";

const Profile = ({src, author, platform, link}) => {
  return (
    <Container width="50vw" className={`${styles["container"]}`}>
        <Image src={src} className={`${styles["image"]}`} roundedCircle/>
        <div className={`${styles["caption"]}`}>
          <p className="p-2 m-0">Image Credits to {author} on <a href={link} target="_blank" rel="noopener noreferrer">{platform}</a></p>
        </div>
    </Container>
  )
}

export default Profile
