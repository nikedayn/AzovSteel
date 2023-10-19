import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

//импорт main scss стилей
import './Components/assets/scss/style.scss';

//импорт компонента App
import App from './App';

//импорт redux toolkit
import store from './redux/store';
import { Provider } from 'react-redux';

let root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <App/>
    </Provider>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();