import React, { useContext } from 'react';
import styles from './Endpoint.module.scss';
import stylez from '../ReactTestComponent/Assertion/Assertion.module.scss';
import { EndpointTestCaseContext } from '../../context/reducers/endpointTestCaseReducer';
import { deleteAssertion, updateAssertion } from '../../context/actions/endpointTestCaseActions';
import { GlobalContext } from '../../context/reducers/globalReducer';
import { openBrowserDocs } from '../../context/actions/globalActions';

const HooksAssertion = ({ assertion, index, id }) => {
  const [, dispatchToEndpointTestCase] = useContext(EndpointTestCaseContext);
  const [, dispatchToGlobal] = useContext(GlobalContext);
  const jestDOMMatcher = [
    '',
    'to Be',
    'toBeDisabled',
    'toBeEnabled',
    'toBeEmpty',
    'toBeEmptyDOMElement',
    'toBeInTheDocument',
    'toBeInvalid',
    'toBeRequired',
    'toBeValid',
    'toBeVisible',
    'toContainElement',
    'toContainHTML',
    'toHaveAttribute',
    'toHaveClass',
    'toHaveFocus',
    'toHaveFormValues',
    'toHaveStyle',
    'toHaveTextContent',
    'toHaveValue',
    'toHaveDisplayValue',
    'toBeChecked',
    'toBePartiallyChecked',
    'toHaveDescription',
  ];

  const questionIcon = require('../../assets/images/help-circle.png');
  const closeIcon = require('../../assets/images/close.png');
  const jestDOMURL = 'https://github.com/testing-library/jest-dom';

  const handleClickDeleteAssertion = () => {
    dispatchToEndpointTestCase(deleteAssertion(index, id));
  };

  const handleChangeUpdateAssertion = (e, field) => {
    const updatedAssertion =
      field === 'not'
        ? { ...assertion, [field]: !assertion[field] }
        : { ...assertion, [field]: e.target.value };
    dispatchToEndpointTestCase(updateAssertion(index, id, updatedAssertion));
  };

  const handleClickTooltip = () => {
    dispatchToGlobal(openBrowserDocs(jestDOMURL));
  };

  return (
    <div id={styles.groupFlexboxAssertion}>
      <div id={styles.labelInput}>
        <label htmlFor='requestBody'>Expect State</label>
        <div id={styles.inputFlexBox}>
          <input
            type='text'
            list='responseProperties'
            value={assertion.expectedState}
            onChange={(e) => handleChangeUpdateAssertion(e, 'expectedState')}
          />
          <datalist id='responseProperties'>
            <option value='Headers'></option>
            <option value='Status'></option>
            <option value='Body'></option>
            <option value='Message'></option>
            <option value='Length'></option>
          </datalist>
        </div>
      </div>
      <div id={styles.dropdownWrapper}>
        <div id={styles.endMatcherLabel}>
          <div>
            <label htmlFor='matcher'>Matcher</label>
          </div>
          <div id={styles.notDiv}>
            Not?
            <input type='checkbox' onChange={(e) => handleChangeUpdateAssertion(e, 'not')} />
          </div>
        </div>
        <div id={styles.dropdownFlex}>
          <select
            id='method'
            value={assertion.matcher}
            onChange={(e) => handleChangeUpdateAssertion(e, 'matcher')}
          >
            {jestDOMMatcher.map((matcher) => (
              <option value={matcher}>{matcher}</option>
            ))}
          </select>{' '}
          <span id={stylez.hastooltip} role='tooltip'>
            <img src={questionIcon} alt='help' onClick={handleClickTooltip} />
            <span id={stylez.tooltip}>
              {/* <ToolTipMatcher toolTipType={statement.matcherType} /> */}
              Click me to find out more about Jest DOM matchers
            </span>
          </span>
        </div>
        {/* <div id={stylez.autoTool}>
      <input type='text' /> */}

        {/* </div> */}
      </div>
      <div id={styles.labelInput}>
        <label htmlFor='expectedValue'>Expected Value</label>
        <div id={styles.inputFlexBox}>
          <input
            type='text'
            name='expectedValue'
            placeholder='eg. 200'
            value={assertion.expectedValue}
            onChange={(e) => handleChangeUpdateAssertion(e, 'expectedValue')}
          />
        </div>
      </div>
      <img
        src={closeIcon}
        style={{ position: 'relative', top: '-15px' }}
        alt='close'
        onClick={handleClickDeleteAssertion}
      />
    </div>
  );
};

export default EndpointAssertion;
