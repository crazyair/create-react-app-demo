import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {AppContainer} from 'react-hot-loader'

// ReactDOM.render(<App />, document.getElementById('root'));
function startApp(App) {
    ReactDOM.render(
        <AppContainer>
        <App/>
    </AppContainer>, document.getElementById("root"),);
}
startApp(App);
if (module.hot) {
    module.hot.accept('./App', (e) => {
        console.log(e)
            startApp(App);
        })
}
registerServiceWorker();
