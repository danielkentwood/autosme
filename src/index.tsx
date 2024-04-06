import { StrictMode } from 'react';
import * as ReactDOMClient from 'react-dom/client';

import './styles.css';
import 'dockview/dist/styles/dockview.css';
import './sidebar.css';

import Sidebar from './sidebar';
import Panels from './panels';

const rootElement = document.getElementById('root');

if (rootElement) {
    const root = ReactDOMClient.createRoot(rootElement);

    root.render(
        <StrictMode>
            <div className="main-container">
                
                <Sidebar />

                <div className="app-container">
                    <Panels />
                </div>
            </div>
        </StrictMode>
    );
}