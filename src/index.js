import { render } from "react-dom";
import App from "./App";
import store from './app/store';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css'

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
