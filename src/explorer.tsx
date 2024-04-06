import React, { useState } from 'react';
import { DockviewReadyEvent, DockviewApi } from 'dockview';
import Sidebar from './sidebar';
import Panels from './panels';

const Explorer = () => {
    const [dockviewApi, setDockviewApi] = useState<DockviewApi | null>(null);

    const handleDockviewReady = (event: DockviewReadyEvent) => {
        setDockviewApi(event.api);
    };

    const handleIconClick = (panelId: string) => {
        if (dockviewApi) {
            dockviewApi.addPanel({
                id: panelId,
                component: 'default',
                params: {
                    title: `Panel ${panelId}`,
                },
            });
        }
    };

    return (
        <div>
            <Sidebar onIconClick={handleIconClick} />
            <Panels onReady={handleDockviewReady} />
        </div>
    );
};

export default Explorer;