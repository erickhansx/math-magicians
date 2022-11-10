import renderer from 'react-test-renderer';
import Home from '../components/Home';

test('Quote Renders', () => {
  const HomeRender = renderer.create(<Home />).toJSON();
  expect(HomeRender).toMatchSnapshot();
});
