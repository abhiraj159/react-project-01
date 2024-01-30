import styles from "./NewPost.module.css";

function NewPost(props) {
  return (
    <>
      <form className={styles.form}>
        <p>
          <label htmlFor="body">Text</label>
          <textarea
            id="body"
            required
            rows={3}
            onChange={props.changeBodyHandler}
          />
        </p>
        <p>{enterBody}</p>
        <p>
          <label htmlFor="name">Your Name</label>
          <input type="text" id="text" required onChange={onDetailsChange} />
        </p>
      </form>
    </>
  );
}
export default NewPost;
