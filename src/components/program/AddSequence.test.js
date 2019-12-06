import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import crypto from 'crypto';
import Sequence from './AddSequence';

Enzyme.configure({ adapter: new Adapter() });

Object.defineProperty(global.self, 'crypto', {
  value: {
    getRandomValues: (arr) => crypto.randomBytes(arr.length),
  },
});

let wrapper;
beforeEach(() => {
  wrapper = mount(<Sequence
    id={0}
    key="test-seq"
    deleteIt="test-seq"
    title=""
    content={[]}
    handleChange={jest.fn()}
    deleteSequence={jest.fn()}
  />);
  wrapper.state().sequence = {
    title: '',
    id: 0,
  };
});

describe('AddSequence tests', () => {
  it('Should exist', () => {
    expect(wrapper).toBeDefined();
    expect(wrapper.exists()).toBe(true);
  });

  it('Should have a delete button', () => {
    const button = wrapper.find('#deleteSequence');
    expect(button).toHaveLength(1);
  });

  it('Should change sequence title on title input change', async () => {
    const input = wrapper.find('input');
    const mockEvent = {
      target: {
        name: 'title',
        value: 'Sequence test',
      },
    };
    input.simulate('change', mockEvent);
    await wrapper.update();
    const title = wrapper.find('#sequenceTitle span').text();
    expect(title).toEqual('Sequence test');
  });

  it('Should call parent delete function on delete sequence button click', async () => {
    const btn = wrapper.find('#deleteSequence');
    const fn = wrapper.props().deleteSequence;
    btn.simulate('click', fn('test-seq', 0));
    expect(fn).toHaveBeenCalledTimes(2);
  });
});
