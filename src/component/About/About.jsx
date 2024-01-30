import styles from "./About.module.css";

function About(props) {
  return (
    <>
      <div className={`mx-auto mt-10 ${styles.list}`}>
        <p className={`${styles.details}`}>{props.head}</p>
        <p className={`${styles.text}`}>{props.details}</p>
      </div>
    </>
  );
}
export default About;
