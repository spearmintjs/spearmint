import React, { useState } from 'react';
import styles from '../TestMenu/TestMenu.module.scss';
import {
  addAction,
  addAssertion,
  addRender,
  createNewTest,
} from '../../../context/testCaseActions';

const TestMenu = ({ dispatchToTestCase }) => {
  const handleAddAction = e => {
    dispatchToTestCase(addAction());
  };
  const handleAddAssertion = e => {
    dispatchToTestCase(addAssertion());
  };
  const handleAddRender = e => {
    dispatchToTestCase(addRender());
  };
  const handleNewTest = e => {
    dispatchToTestCase(createNewTest());
  };

  return (
    <div id={styles.testMenu}>
      <div id={styles.left}>
        <button onClick={handleNewTest}>New Test +</button>
      </div>
      <div id={styles.right}>
        <button onClick={handleAddAction}>Action</button>
        <button onClick={handleAddAssertion}>Assertion</button>
        <button onClick={handleAddRender}>Rerender</button>
      </div>
    </div>
  );
};

export default TestMenu;
