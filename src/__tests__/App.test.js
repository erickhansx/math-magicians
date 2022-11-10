import renderer from 'react-test-renderer';
import App from '../App';

test('Quote Renders', () => {
  const AppRender = renderer.create(<App />).toJSON();
  expect(AppRender).toMatchSnapshot();
});
