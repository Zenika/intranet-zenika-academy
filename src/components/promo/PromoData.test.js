import React from 'react';
import Axios from 'axios';
import { shallow } from 'enzyme';
import TestUtils from 'react-dom/test-utils';
import PromoData from './PromoData';

jest.mock('Axios', () => {
  const data = {
    data: {
      users: [
        {
          id: 1,
          firstName: 'Joe',
          lastName: 'McGinnis',
          email: 'mcginis@mcginis.com',
          role: 2,
          promotionId: null,
        },
        {
          id: 2,
          firstName: 'Jena',
          lastName: 'McGenty',
          email: 'mcgenty@gmail.com',
          role: 2,
          promotionId: null,
        },
        {
          id: 3,
          firstName: 'Jena',
          lastName: 'McGenty',
          email: 'mcgenty@gmail.com',
          role: 3,
          promotionId: 1,
        },
        {
          id: 4,
          firstName: 'Jena',
          lastName: 'McGenty',
          email: 'mcgenty@gmail.com',
          role: 3,
          promotionId: 1,
        },
      ],
      program: {
        id: 1,
        title: 'Consultant React',
        type: 1,
        content: [],
      },
      promotion: {
        id: 1,
        title: 'PARIS 2',
        city: 'Paris',
        startDate: '2020-10-19T00:00:00.000Z',
        endDate: '2027-01-20T00:00:00.000Z',
        programId: 1,
        createdAt: '2028-11-19T00:00:00.000Z',
        updatedAt: '2028-11-19T00:00:00.000Z',
      },
    },
  };
  return {
    get: jest.fn().mockReturnValue(Promise.resolve(data)),
  };
});

describe('Component PromoData', () => {
  const match = { params: { id: 1 } };
  const axiosMock = jest.spyOn(Axios, 'get');
  const promoData = shallow(<PromoData match={match} />);
  const promoDataInstance = promoData.instance();

  beforeEach(() => {
    promoDataInstance.componentDidMount();
  });
  test('it renders correctly', () => {
    expect(promoData).toMatchSnapshot();
  });
  test('Axios GET method is called when component is mounted', () => {
    expect(axiosMock).toBeCalled();
    expect(axiosMock).toHaveReturned();
  });
  test('Component main sections exists', () => {
    expect(promoData.find('.container')).toBeDefined();
    expect(promoData.find('.container')).toHaveLength(4);
  });
  test('Teachers section exists', () => {
    expect(promoData.find('.promoTeachers')).toBeDefined();
    expect(promoData.find('.promoTeachers')).toHaveLength(1);
  });
  test('Students section exists', () => {
    expect(promoData.find('.promoStudents')).toBeDefined();
    expect(promoData.find('.promoStudents')).toHaveLength(1);
  });
});

describe('Go back button', () => {
  const match = { params: { id: 1 } };
  const detailsPage = TestUtils.renderIntoDocument(<PromoData match={match} />);
  const goBackButton = TestUtils.findRenderedDOMComponentWithClass(detailsPage, 'goBack');

  test('should link to Admin home page', () => {
    expect(goBackButton).toBeDefined();
    expect(goBackButton.textContent).toEqual('Revenir à l\'accueil');
    expect(goBackButton.getAttribute('href')).toBe('/home/admin');
  });
});
