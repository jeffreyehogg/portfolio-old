import Image from 'next/image';
import styles from '../styles/Landing.module.css';

const Landing = () => (
  <div>
    <div className={styles.bgWrap}>
      <Image
        alt="Stars"
        src="/images/space.jpg"
        layout="fill"
        objectFit="cover"
        quality={100}
      />
    </div>
    <p className={styles.bgText}>
      I'm Jeff Hogg
      <br />a full-stack developer
    </p>
  </div>
);

export default Landing;
