import React,{useState} from "react";
import "./Drawer.css";

interface DrawerProps{
    open: boolean;
}

const Drawer:React.FC<DrawerProps> = ({open}) => {

    let drawerClasses= 'sideDrawer';

    if(open){
        drawerClasses = 'sideDrawer open';
    }

    return (
        <div className={drawerClasses}>
            <ul className="sideDrawer-links-list">
                <li><a className="sideDrawer-links" href="#">USERS</a></li>
                <li><a className="sideDrawer-links" href="#">PROFILE</a></li>
                <li><a className="sideDrawer-links" href="#">LOGOUT</a></li>
            </ul>
        </div>
    );
}

export default Drawer;