import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import axios from 'axios';
import Adapter from 'enzyme-adapter-react-16';
import AdminHome from './AdminHome';

Enzyme.configure({ adapter: new Adapter() });

jest.mock('axios');

describe('AdminHome component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<AdminHome />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  it('matches snapshot', () => {
    const component = renderer.create(<AdminHome />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('contains a title "Bienvenue"', () => {
    const app = shallow(<AdminHome />);
    expect(app.containsMatchingElement(<h1>Bienvenue</h1>)).toEqual(true);
  });
  describe('when rendered', () => {
    it('should fetch promotions', () => {
      const getSpy = jest.spyOn(axios, 'get');
      shallow(
        <AdminHome />,
      );
      expect(getSpy).toBeCalled();
    });
  });
});
