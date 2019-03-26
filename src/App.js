import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import './App.css';


const Test = (props) => {
  return (
    <div>
      <h1>{props.str}</h1>
      <h1>{props.bool ? 'bool' : 'no bool'}</h1>
      <h1>{props.strOrNum}</h1>
      <div>
        {
          props.arr.map((e, index) => {
            return (
              <li key={index}> {e} </li>
            );
          })
        }
      </div>
      <div>
        {
          props.objArr.map((e, index) => {
            return (
              <li key={index}> {e.name} - {e.age} </li>
            );
          })
        }
      </div>
      <h1>{props.children}</h1>
    </div>
  );
}

Test.propTypes = {
  str: PropTypes.string,
  bool: PropTypes.bool,
  strOrNum: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  arr: PropTypes.arrayOf(PropTypes.number),
  objArr: PropTypes.arrayOf(PropTypes.shape(
    {
      name: PropTypes.string,
      age: PropTypes.number,
    }
  )),
  // children: PropTypes.string,
  children: PropTypes.element.isRequired,
}

class App extends PureComponent {

  render() {
    return (
      <div className="App">
        <Test str={'Techsith'}
          bool={false}
          strOrNum={10}
          arr={[1, 2, 3]}
          objArr={[{ name: 'John', age: 10 }, { name: 'Pith', age: 20 }]}>
          <span>Element</span>
        </Test>
      </div>
    );
  }
}

export default App;
