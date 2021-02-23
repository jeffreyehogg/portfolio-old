import Image from 'next/image';
import styles from '../styles/Background.module.css';

const Background = () => (
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
  </div>
);

export default Background;
