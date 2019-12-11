// import ReactDOM from 'react-dom';
// import renderer from 'react-test-renderer';
// import React from 'react';
// import Enzyme, { shallow } from 'enzyme';
// import axios from 'axios';
// import Adapter from 'enzyme-adapter-react-16';
// import ProgramDetails from './ProgramDetails';

// Enzyme.configure({ adapter: new Adapter() });

// jest.mock('axios');

// describe('ProgramDetails component', () => {
// it.only('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<ProgramDetails />, div);
//   ReactDOM.unmountComponentAtNode(div);
// });
// it.only('matches snapshot', () => {
//   const component = renderer.create(<ProgramDetails />);
//   const tree = component.toJSON();
//   expect(tree).toMatchSnapshot();
// });
// it('contains a title "Bienvenue"', () => {
//   const app = shallow(<ProgramDetails />);
//   expect(app.containsMatchingElement(<h1>Bienvenue</h1>)).toEqual(true);
// });
// describe('when rendered', () => {
//   it('should fetch a promotion', () => {
//     const getSpy = jest.spyOn(axios, 'get');
//     shallow(
//       <ProgramDetails />,
//     );
//     expect(getSpy).toBeCalled();
//   });
// });
// });
