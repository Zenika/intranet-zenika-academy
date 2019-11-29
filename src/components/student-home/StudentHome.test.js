import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import axios from 'axios';
import Adapter from 'enzyme-adapter-react-16';
import StudentHome from './StudentHome';

jest.mock('axios');

describe('StudentHome component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<StudentHome />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  it('matches snapshot', () => {
    const component = renderer.create(<StudentHome />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  describe('when rendered', () => {
    it('should fetch a promotion', () => {
      Enzyme.configure({ adapter: new Adapter() });
      const getSpy = jest.spyOn(axios, 'get');
      shallow(
        <StudentHome />,
      );
      expect(getSpy).toBeCalled();
    });
  });
});
