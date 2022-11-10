import renderer from 'react-test-renderer';
import Calculator from '../components/Calculator';

test('Quote Renders', () => {
  const CalculatorRender = renderer.create(<Calculator />).toJSON();
  expect(CalculatorRender).toMatchSnapshot();
});
