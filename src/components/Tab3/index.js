import React from 'react';
import {
  Tabs,
  TabList,
  Tab,
  TabPanel,
  TabDivider
} from './lib';
import './styles.css';

function App() {
  return (
    <div className="App">
      <Tabs initialValue="tab-react">
        <TabList>
          <Tab name="tab-react">
            <div>React.js</div>
            <TabDivider />
          </Tab>
          <Tab name="tab-vue">
            <div>Vue.js</div>
            <TabDivider />
          </Tab>
        </TabList>
        <TabPanel name="tab-react">
          <p>
            React.js is a JavaScript library used for building UI. It
            is maintained by <strong>Facebook</strong> and a community
            of individual developers and companies.
          </p>
          <p>
            React can be used as a base in the development of
            single-page or mobile applications.
          </p>
        </TabPanel>
        <TabPanel name="tab-vue">
          <p>
            Vue.js is an open-source JavaScript framework for building
            user interfaces and single-page applications.
          </p>
          <p>
            Vue.js features an incrementally adoptable architecture
            that focuses on declarative rendering and component
            composition.
          </p>
        </TabPanel>
      </Tabs>
    </div>
  );
}

export default App;
