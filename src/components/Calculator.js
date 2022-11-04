import React from 'react';
import './Calculator.scss';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="calculator">
        <div className="input-area">
          <input placeholder="0" className="input-number" />
        </div>
        <div className="grey-btns">
          <button type="button" className="btn">
            AC
          </button>
          <button type="button" className="btn">
            +/-
          </button>
          <button type="button" className="btn">
            %
          </button>
          <button type="button" className="btn operator">
            ÷
          </button>
          <button type="button" className="btn">
            7
          </button>
          <button type="button" className="btn">
            8
          </button>
          <button type="button" className="btn">
            9
          </button>
          <button type="button" className="btn operator">
            x
          </button>
          <button type="button" className="btn">
            4
          </button>
          <button type="button" className="btn">
            5
          </button>
          <button type="button" className="btn">
            6
          </button>
          <button type="button" className="btn operator">
            -
          </button>
          <button type="button" className="btn">
            1
          </button>
          <button type="button" className="btn">
            2
          </button>
          <button type="button" className="btn">
            3
          </button>
          <button type="button" className="btn operator">
            +
          </button>
          <button type="button" className="btn long">
            0
          </button>
          <button type="button" className="btn">
            .
          </button>
          <button type="button" className="btn operator">
            =
          </button>
        </div>
      </div>
    );
  }
}

export default Calculator;
