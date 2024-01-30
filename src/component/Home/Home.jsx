import { useState } from "react";
import About from "../About/About";
import NewPost from "../NewPost/NewPost";
import styles from "./Home.module.css";

function Home() {
  return (
    <>
      <h1 className={`${styles.header1} pb-2`}>This is home page section</h1>
      <ul className={styles.list1}>
        <About head="Title-1" details="Details-1" />
        <About head="Title-2" details="Details-2" />
      </ul>
    </>
  );
}

export default Home;
