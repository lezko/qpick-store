import React from 'react';
import ReactDOM from 'react-dom/client';
import 'scss/style.scss';
import {RouterProvider} from 'react-router-dom';
import {router} from 'router';
import {Provider} from 'react-redux';
import {store} from 'store';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <Provider store={store}>
        <RouterProvider router={router} />
    </Provider>
);

// window.onbeforeunload = () => {
//     localStorage.clear();
// }
