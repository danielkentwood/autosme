import {
    DockviewReact,
    DockviewReadyEvent,
    IDockviewPanelProps,
  } from "dockview";
import * as React from "react";
  
const components = {
  // we can add components here 
  // this is where we will add the component definitions for the launch icons
  default: (props: IDockviewPanelProps<{ title: string }>) => {
    return (
      <div style={{ padding: "20px", color: "white" }}>
        {props.params.title}
      </div>
    );
  },
};
  
export const Panels: React.FC = (props: { theme?: string }) => {
  const onReady = (event: DockviewReadyEvent) => {
    event.api.addPanel({
      id: "panel_1",
      component: "default",
      params: {
        title: "Panel 1",
      },
    });

  //   panel.group.locked = true;
  //   panel.group.header.hidden = true;

    event.api.addPanel({
      id: "panel_2",
      component: "default",
      params: {
        title: "Panel 2",
      },
      position: { referencePanel: "panel_1", direction: "right" },
    });

    event.api.addPanel({
      id: "panel_3",
      component: "default",
      params: {
        title: "Panel 3",
      },
      position: { referencePanel: "panel_2", direction: "below" },
    });

    event.api.addPanel({
      id: "panel_4",
      component: "default",
      params: {
        title: "Panel 4",
      },
      position: { referencePanel: "panel_1", direction: "below" },
    });
  };

  return (
    <DockviewReact
      components={components}
      onReady={onReady}
      className={props.theme || "dockview-theme-abyss"}
    />
  );
};
  
export default Panels;
  