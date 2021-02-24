import { Container } from '@material-ui/core';
import { Viewer, Worker } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import styles from '../styles/Resume.module.css';

const Resume = () => {
  return (
    <Container className={styles.container}>
      <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.6.347/build/pdf.worker.min.js">
        <Viewer fileUrl="/HoggResume.pdf" />
      </Worker>
    </Container>
  );
};

export default Resume;
