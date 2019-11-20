import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Footer from './Footer';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Footer />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe('Footer', () => {
  it('renders', () => {
    const component = renderer.create(<Footer />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
