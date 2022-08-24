import React from "react";
import { Link } from "react-router-dom";
import '../index.css'
import styles from './Landing.module.css'

export default function Landing() {
  return (
    <div className={styles.container}>
      
        <button className={styles.button}>
          <Link to="/home">Home</Link>
        </button>
      
    </div>
  );
}
