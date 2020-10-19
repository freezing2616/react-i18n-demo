import React from 'react';
import ReactI18next from './react-i18next';
import ReactIntl from './react-intl';
import './App.css';
import { Tabs } from 'antd';

function App() {
  return (
    <div className="App">
      <Tabs>
        <Tabs.TabPane tab='React-i18next' key='1'>
          <ReactI18next />
        </Tabs.TabPane>
        <Tabs.TabPane tab='React-intl' key='2'>
          <ReactIntl />
        </Tabs.TabPane>
      </Tabs>
    </div>
  );
}

export default App;
