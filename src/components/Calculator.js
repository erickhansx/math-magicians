import React, { useState } from 'react';
import calculate from '../logic/calculate';
import './Calculator.scss';

const Calculator = () => {
  const [InitialValue, newValue] = useState({
    total: 0,
    next: null,
    operation: null,
  });

  const onClickEvent = (e) => {
    const valueBtn = e.target.innerHTML;
    const result = calculate(InitialValue, valueBtn);
    newValue(result);
  };
  const { total, operation, next } = InitialValue;
  return (
    <div className="calculator">
      <div className="calculator__header">
        <h2>Let&apos;s do some Math!</h2>
      </div>
      <div className="calculator__body">
        <div className="input-area">
          <p className="input-calc" data-testid="testp">
            {total}
            {operation}
            {next}
          </p>
        </div>
        <div className="grey-btns">
          <button onClick={onClickEvent} type="button" className="btn">
            AC
          </button>
          <button onClick={onClickEvent} type="button" className="btn">
            +/-
          </button>
          <button onClick={onClickEvent} type="button" className="btn">
            %
          </button>
          <button onClick={onClickEvent} type="button" className="btn operator">
            ÷
          </button>
          <button onClick={onClickEvent} type="button" className="btn">
            7
          </button>
          <button onClick={onClickEvent} type="button" className="btn">
            8
          </button>
          <button onClick={onClickEvent} type="button" className="btn">
            9
          </button>
          <button onClick={onClickEvent} type="button" className="btn operator">
            x
          </button>
          <button onClick={onClickEvent} type="button" className="btn">
            4
          </button>
          <button onClick={onClickEvent} type="button" className="btn">
            5
          </button>
          <button onClick={onClickEvent} type="button" className="btn">
            6
          </button>
          <button onClick={onClickEvent} type="button" className="btn operator">
            -
          </button>
          <button onClick={onClickEvent} type="button" className="btn">
            1
          </button>
          <button onClick={onClickEvent} type="button" className="btn">
            2
          </button>
          <button onClick={onClickEvent} type="button" className="btn">
            3
          </button>
          <button onClick={onClickEvent} type="button" className="btn operator">
            +
          </button>
          <button onClick={onClickEvent} type="button" className="btn long">
            0
          </button>
          <button onClick={onClickEvent} type="button" className="btn">
            .
          </button>
          <button onClick={onClickEvent} type="button" className="btn operator">
            =
          </button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
