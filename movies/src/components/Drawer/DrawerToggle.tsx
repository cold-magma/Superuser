import React from "react";
import "./DrawerToggle.css";

interface DrawerToggleProps{
    click: () => void;
}


const DrawerToggle:React.FC<DrawerToggleProps> = ({click}) => {

    return (
        <button className="toggle-drawer-button" onClick={click}>
            <div className="toggle-div"></div>
            <div className="toggle-div"></div>
            <div className="toggle-div"></div>
        </button>
        
    );
}

export default DrawerToggle;