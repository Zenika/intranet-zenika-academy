import React from 'react';
import Axios from 'axios';
import { shallow } from 'enzyme';
import PromoData from './PromoData';

jest.mock('Axios');

describe('Component renders correctly', () => {
  const promoData = shallow(<PromoData />);
  const promoDataInstance = promoData.instance();
  const data = {
    data: {
      users: [
        {
          firstName: 'Joe',
          lastName: 'McGinnis',

        },
      ],
      program: {},
      promotion: {},
    },
  };

  expect(promoDataInstance.state('users')).toBe([]);
  expect(promoDataInstance.state('users')).toBe({});
  expect(promoDataInstance.state('users')).toBe({});

  // beforeEach(() => {
  //   promoDataInstance.componentDidMount();
  // });
  // test('state should contain data fetched from database', () => {

  // });
});
