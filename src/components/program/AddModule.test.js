import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import crypto from 'crypto';
import Module from './AddModule';
import SubModule from './AddSubModule';

Enzyme.configure({ adapter: new Adapter() });

Object.defineProperty(global.self, 'crypto', {
  value: {
    getRandomValues: (arr) => crypto.randomBytes(arr.length),
  },
});

let wrapper;
beforeEach(() => {
  wrapper = mount(<Module
    id={0}
    key="test"
    deleteIt="test"
    title=""
    content={[]}
    handleChange={jest.fn()}
    handleAddSubModuleContent={jest.fn()}
    handleAddSequenceContent={jest.fn()}
    deleteModule={jest.fn()}
  />);
  wrapper.state().subModules = [];
  wrapper.state().idSubModules = 0;
  wrapper.state().module = {
    title: '',
    type: 2,
    content: [],
  };
});

describe('AddModule tests', () => {
  it('Should exist', () => {
    expect(wrapper).toBeDefined();
    expect(wrapper.exists()).toBe(true);
  });

  it('Should have a delete button', () => {
    const button = wrapper.find('#deleteModule');
    expect(button).toHaveLength(1);
  });

  it('Should have a add SubModule button', () => {
    const button = wrapper.find('#addSubModule');
    expect(button).toHaveLength(1);
  });

  it('Should change module title on title input change', async () => {
    const input = wrapper.find('input');
    const mockEvent = {
      target: {
        name: 'title',
        value: 'Module test',
      },
    };
    input.simulate('change', mockEvent);
    await wrapper.update();
    const title = wrapper.find('#moduleTitle span').text();
    expect(title).toEqual('Module test');
  });

  it('Should add a SubModule (child component) on Add Submodule button click', async () => {
    const btn = wrapper.find('#addSubModule');
    const instance = wrapper.instance();
    const fn = jest.spyOn(instance, 'addSubModule');

    expect(wrapper.state().idSubModules).toEqual(0);
    expect(wrapper.state().subModules[0]).toBeUndefined();
    expect(wrapper.state().module.content[0]).toBeUndefined();

    btn.simulate('click', fn);
    expect(fn).toHaveBeenCalledTimes(1);

    await wrapper.update();
    const id = wrapper.state().idSubModules - 1;
    expect(wrapper.state().idSubModules).toEqual(1);
    expect(wrapper.state().subModules[id]).toBeInstanceOf(Object);
    expect(wrapper.state().module.content[id]).toBeInstanceOf(Object);
    fn.mockClear();
  });

  it('Should call parent delete function on delete module button click', async () => {
    const btn = wrapper.find('#deleteModule');
    const fn = wrapper.props().deleteModule;
    btn.simulate('click', fn('test', 0));
    expect(fn).toHaveBeenCalledTimes(2);
  });

  it('Should delete SubModule from Module on children component delete button click', () => {
    wrapper = mount(<Module
      id={0}
      key="test"
      deleteIt="test"
      title=""
      content={[]}
      handleChange={jest.fn()}
      handleAddSubModuleContent={jest.fn()}
      handleAddSequenceContent={jest.fn()}
      deleteModule={jest.fn()}
    />);
    const moduleChild = mount(<SubModule
      id={0}
      key="test-sub"
      deleteIt="test-sub"
      title=""
      content={[]}
      handleChange={jest.fn()}
      handleAddSequenceContent={jest.fn()}
      deleteSubModule={wrapper.instance().deleteSubModule}
    />);
    wrapper.state().subModules = [{ key: 'test-sub', id: 0 }];
    wrapper.state().idSubModules = 1;
    wrapper.state().module = {
      title: '',
      type: 2,
      content: [{ title: 'subModule', type: 3, content: [] }],
    };
    const btnDelete = moduleChild.find('#deleteSubModule');
    let id = wrapper.state().idSubModules - 1;
    expect(wrapper.state().idSubModules).toEqual(1);
    expect(wrapper.state().subModules[id]).toBeInstanceOf(Object);
    expect(wrapper.state().module.content[id]).toBeInstanceOf(Object);

    btnDelete.simulate('click');

    wrapper.instance().forceUpdate();
    id = wrapper.state().idModules;
    expect(wrapper.state().subModules[id]).toBeUndefined();
    expect(wrapper.state().module.content[id]).toBeUndefined();
    expect(wrapper.state().idSubModules).toEqual(0);
  });
});
