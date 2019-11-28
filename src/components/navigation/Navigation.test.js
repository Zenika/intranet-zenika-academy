import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-dom/test-utils';
import { shallow } from 'enzyme';
import NavigationBar from './Navigation';

describe('Navigation bar when the user isn\'t connected', () => {
  const nav = <NavigationBar />;
  test('Navigation bar exists', () => {
    expect(nav).toBeDefined();
    expect(TestUtils.isElement(nav)).toBe(true);
    expect(TestUtils.isElementOfType(nav, NavigationBar)).toBe(true);

    const rendered = TestUtils.renderIntoDocument(<NavigationBar />);
    const siButton = TestUtils.findRenderedDOMComponentWithClass(rendered, 'signInDesktop');

    expect(siButton.textContent).toEqual('Se connecter');
  });

  test('Shallow rendering', () => {
    const navbar = shallow(<NavigationBar />);
    const navbarInstance = navbar.instance();

    navbarInstance.componentDidMount();

    expect(navbar.state('modalState')).toBe('');
  });
});
