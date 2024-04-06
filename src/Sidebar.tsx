// import Link from 'next/link';
import './sidebar.css';

interface SidebarProps {
    onIconClick: (panelId: string) => void;
}

const Sidebar = ({ onIconClick }: SidebarProps) => {
    const handleIconClick = (panelId: string) => {
        onIconClick(panelId);
    };

    return (
        <div className="sidebar-container">
            <div className="iconContainer" data-tooltip="Graph window">
                <img width="40" height="40" src="https://img.icons8.com/ios/50/1A1A1A/share-2--v1.png" alt="share-2--v1" className="sidebarImg" />
                <div className="dropdown">
                    <button className="dropdownButton" onClick={() => handleIconClick('ICD10')}>ICD10</button>
                    <button className="dropdownButton" onClick={() => handleIconClick('CPT4')}>CPT4</button>
                    <button className="dropdownButton" onClick={() => handleIconClick('GPI')}>GPI</button>
                </div>
            </div>

            <div className="iconContainer" data-tooltip="Node analytics">
                <img width="40" height="40" src="https://img.icons8.com/ios/50/000000/microscope.png" alt="microscope" className="sidebarImg" />
            </div>

            <div className="iconContainer" data-tooltip="Clinical journey explorer (coming soon!)">
                <img width="40" height="40" src="https://img.icons8.com/ios/50/1A1A1A/sankey.png" alt="sankey" className="sidebarImg" />
            </div>

            <div className="iconContainer" data-tooltip="Collections (coming soon!)">
                <img width="40" height="40" src="https://img.icons8.com/ios/50/1A1A1A/collectibles.png" alt="collections" className="sidebarImg" />
            </div>

            <div className="iconContainer" data-tooltip="chatSME (coming soon!)">
                <img width="40" height="40" src="https://img.icons8.com/ios/50/background-remover.png" alt="ai-chat" className="sidebarImg" />
            </div>

            <div className="iconContainer homeIcon" data-tooltip="Home">
                <a href="/">
                    <img width="40" height="40" src="https://img.icons8.com/ios/50/1A1A1A/home.png" alt="home" className="sidebarImg" />
                </a>
            </div>
        </div>
    );
};

export default Sidebar;
