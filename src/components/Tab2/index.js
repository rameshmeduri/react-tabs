import React, { useState } from 'react';
import './styles.css';

const tabItems = [
  {
    id: 1,
    title: 'STEP 1',
    content: (
      <div>
        <h1>step 1 content</h1>
        <h2>step 1 content</h2>
      </div>
    )
  },
  {
    id: 2,
    title: 'STEP 2',
    content: (
      <div>
        <h1>step 2 content</h1>
        <h2>step 2 content</h2>
      </div>
    )
  }
];

const TabItemComponent = ({
  title = '',
  onItemClicked = () => console.error('You passed no action to the component'),
  isActive = false
}) => {
  return (
    <div
      className={isActive ? 'tabitem' : 'tabitem tabitem--inactive'}
      onClick={onItemClicked}
    >

      <p className="tabitem__title">{title}</p>
    </div>
  );
};

const TabsComponent = () => {
  const [active, setActive] = useState(0);
  return (
    <div className="wrapper">
      <div className="tabs">
        {tabItems.map(({ id, title }) => (
          <TabItemComponent
            key={title}
            title={title}
            onItemClicked={() => setActive(id)}
            isActive={active === id}
          />
        ))}
      </div>
      <div className="content">
        {tabItems.map(({ id, content }) => {
          return (active === id) ? content : '';
        })}
      </div>
    </div>
  );
};

export default TabsComponent;