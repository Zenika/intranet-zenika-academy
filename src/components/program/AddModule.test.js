import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import crypto from 'crypto';
import Module from './AddModule';
import Submodule from './Submodule';

Enzyme.configure({ adapter: new Adapter() });

Object.defineProperty(global.self, 'crypto', {
  value: {
    getRandomValues: (arr) => crypto.randomBytes(arr.length),
  },
});

let wrapper;
beforeEach(() => {
  wrapper = mount(<Module
    program={{
      title: '',
      type: 1,
      content: [],
    }}
    handleChange={jest.fn()}
  />);
  wrapper.state().modules = [];
  wrapper.state().idModules = 0;
});

describe('ProgramForm tests', () => {
  it('Should exist', () => {
    expect(wrapper).toBeDefined();
    expect(wrapper.exists()).toBe(true);
  });

  it('Should have a title', () => {
    expect(global.window.document.title).toBe('Admin / Programme création');
  });

  it('Should have a delete button', () => {
    const button = wrapper.find('#deleteModule');
    expect(button).toHaveLength(1);
  });

  it('Should have a add SubModule button', () => {
    const button = wrapper.find('#addSubModule');
    expect(button).toHaveLength(1);
  });


  it('Should change module title in state on moduleTitle input change', () => {
    const input = wrapper.find('#programTitle');
    const mockEvent = {
      target: {
        name: 'title',
        value: 'Module test',
      },
    };
    input.simulate('change', mockEvent);
    expect(wrapper.state().module.title).toEqual('Module test');
  });


  it('Should add a SubModule (child component) on Add Submodule button click', async () => {
    const btn = wrapper.find('#addSubModule');
    const instance = wrapper.instance();
    const fn = jest.spyOn(instance, 'addSubModule');

    expect(wrapper.state().idSubModules).toEqual(0);
    expect(wrapper.state().subModule[0]).toBeUndefined();
    expect(wrapper.state().module.content[0]).toBeUndefined();

    btn.simulate('click', fn);
    expect(fn).toHaveBeenCalledTimes(1);

    await wrapper.update();
    const id = wrapper.state().idModules - 1;
    expect(wrapper.state().idModules).toEqual(1);
    expect(wrapper.state().modules[id]).toBeInstanceOf(Object);
    expect(wrapper.state().program.content[id]).toBeInstanceOf(Object);
    fn.mockClear();
  });
});
