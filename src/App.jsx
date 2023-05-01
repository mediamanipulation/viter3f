import React from 'react';
import './App.css';
import Scene from './Scene';
import styles from './App.module.css';

function App() {
  return (
    <div className="App">
      <div className={styles.app}>
      <Scene />
      <div className={styles.textWrapper}>
        <h1 className={styles.text}>mediamanipulation</h1>
        </div>
        </div>
    </div>
  );
}

export default App;
