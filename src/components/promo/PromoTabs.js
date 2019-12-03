import React from 'react';
import { CSSTransitionGroup } from 'react-transition-group';
import PropTypes from 'prop-types';

const Tab = (props) => {
  const { name, activeTab, changeActiveTab } = props;
  return (
    <li className={name === activeTab && 'is-active'} onClick={() => changeActiveTab(name)}>
      <a>
        <span>{name}</span>
      </a>
    </li>
  );
};

const activeTabContent = (props) => <div>{props.content}</div>;

const tablist = [
  {
    name: 'Elèves',
    content: '',
  },
];

class PromoTabs extends React.Component {
  render() {
    const { activeTab, changeActiveTab } = this.props;
    return (
      <div className="tabs">
        <ul>
          {
            tablist.map((tab) => (
              <Tab
                tab={tab}
                key={tab.name}
                activeTab={activeTab}
                changeActiveTab={changeActiveTab}
              />
            ))
          }
        </ul>
      </div>
    );
  }
}

PromoTabs.propTypes = {
  tablist: PropTypes.shape({
    name: PropTypes.string,
    content: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
  activeTab: PropTypes.string,
  changeActiveTab: PropTypes.func,
};
