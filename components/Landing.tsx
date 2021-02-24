import React from 'react';
import styles from '../styles/Landing.module.css';

const Landing = () => {
  return (
    <div className={styles.container}>
      <p className={styles.landingText}>
        I'm Jeff Hogg
        <br />a full-stack developer
      </p>
    </div>
  );
};

export default Landing;
