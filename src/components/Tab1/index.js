import React from 'react';
import { Tabs, useTabState, Panel } from './lib';
import './styles.css';

const cn = (...args) => args.filter(Boolean).join(' ');

const Tab = ({ children }) => {
  const { isActive, onClick } = useTabState();

  return (
    <button className={cn('tab', isActive && 'active')} onClick={onClick}>
      {children}
    </button>
  );
};

const App = () => (
  <Tabs>
    <div className="tabs">
      <div className="tab-list">
        <Tab>Tab 1</Tab>
        <Tab>Tab 2</Tab>
      </div>
      <div className="tab-progress" />
      <Panel>
        <p>content 1</p>
      </Panel>
      <Panel>
        <p>content 2</p>
      </Panel>
    </div>
  </Tabs>
);

export default App;
