import Image from 'next/image';
import { Container } from '@material-ui/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import styles from '../styles/Resume.module.css';

const Resume = () => {
  return (
    <Container className={styles.container}>
      <Image
        src="/jeffhoggresume.png"
        alt="Resume Picture"
        width={1545}
        height={2000}
      />
    </Container>
  );
};

export default Resume;
