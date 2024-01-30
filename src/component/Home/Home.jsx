import { useState } from "react";
import About from "../About/About";
import NewPost from "../NewPost/NewPost";
import styles from "./Home.module.css";
import Header from "../Header/Header";

function Home() {
  return (
    <>
      <Header />
      <ul className={styles.list1}>
        <About head="Title-1" details="Details-1" />
        <About head="Title-2" details="Details-2" />
      </ul>
    </>
  );
}

export default Home;
