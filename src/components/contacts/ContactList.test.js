import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import ContactList from './ContactList';

describe('ContactList', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ContactList />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  it('matches snapshot', () => {
    const component = renderer.create(<ContactList />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
