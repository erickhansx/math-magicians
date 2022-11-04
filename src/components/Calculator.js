import React from 'react';
import calculate from '../logic/calculate';
import './Calculator.scss';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      next: null,
      operation: null,
    };
  }

  onClickEvent = (e) => {
    const valueBtn = e.target.innerHTML;
    const thisState = calculate(this.state, valueBtn);
    this.setState(thisState);
  };

  render() {
    const { next, operation } = this.state;
    const { total } = this.state;
    // const valuesArr = [total, next];
    return (
      <div className="calculator">
        <div className="input-area">
          <p className="input-calc">
            {total}
            {operation}
            {next}
          </p>
        </div>
        <div className="grey-btns">
          <button onClick={this.onClickEvent} type="button" className="btn">
            AC
          </button>
          <button onClick={this.onClickEvent} type="button" className="btn">
            +/-
          </button>
          <button onClick={this.onClickEvent} type="button" className="btn">
            %
          </button>
          <button
            onClick={this.onClickEvent}
            type="button"
            className="btn operator"
          >
            ÷
          </button>
          <button onClick={this.onClickEvent} type="button" className="btn">
            7
          </button>
          <button onClick={this.onClickEvent} type="button" className="btn">
            8
          </button>
          <button onClick={this.onClickEvent} type="button" className="btn">
            9
          </button>
          <button
            onClick={this.onClickEvent}
            type="button"
            className="btn operator"
          >
            x
          </button>
          <button onClick={this.onClickEvent} type="button" className="btn">
            4
          </button>
          <button onClick={this.onClickEvent} type="button" className="btn">
            5
          </button>
          <button onClick={this.onClickEvent} type="button" className="btn">
            6
          </button>
          <button
            onClick={this.onClickEvent}
            type="button"
            className="btn operator"
          >
            -
          </button>
          <button onClick={this.onClickEvent} type="button" className="btn">
            1
          </button>
          <button onClick={this.onClickEvent} type="button" className="btn">
            2
          </button>
          <button onClick={this.onClickEvent} type="button" className="btn">
            3
          </button>
          <button
            onClick={this.onClickEvent}
            type="button"
            className="btn operator"
          >
            +
          </button>
          <button
            onClick={this.onClickEvent}
            type="button"
            className="btn long"
          >
            0
          </button>
          <button onClick={this.onClickEvent} type="button" className="btn">
            .
          </button>
          <button
            onClick={this.onClickEvent}
            type="button"
            className="btn operator"
          >
            =
          </button>
        </div>
      </div>
    );
  }
}

export default Calculator;
