import renderer from 'react-test-renderer';
import Quote from '../components/Quote';

test('Quote Renders', () => {
  const quoteRender = renderer.create(<Quote />).toJSON();
  expect(quoteRender).toMatchSnapshot();
});
