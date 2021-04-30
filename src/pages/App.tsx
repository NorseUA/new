import React, { FC } from 'react';
import 'antd/dist/antd.css';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { Layout } from 'antd';
import FooterComponent from '../components/containers/page-contaiters/footer';
import HeaderComponent from '../components/containers/page-contaiters/header';
import ContentComponent from '../components/containers/page-contaiters/сontent';
import store from '../store';

const App: FC = () => (
  <Layout>
    <HeaderComponent />
    <ContentComponent />
    <FooterComponent />
  </Layout>
);

const MainApp: React.FC = () => (
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

export default MainApp;
