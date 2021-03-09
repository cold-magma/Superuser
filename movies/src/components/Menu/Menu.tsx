import React,{useState,useEffect} from "react";
import "./Menu.css";
import Drawer from "../Drawer/Drawer";
import DrawerToggle from "../Drawer/DrawerToggle";

const Menu:React.FC = () => {
    const [drawerOpen, setDrawerOpen] = useState(false);

    const handleDrawerToggleClick = () =>{
        setDrawerOpen(() => (!drawerOpen));
    }        

    return (
        <header>
            <nav className="navbar">
                <Drawer open={drawerOpen}/>
                <DrawerToggle click={handleDrawerToggleClick}/>
                <div className="navbar-logo">
                    <h1>SuperUser</h1>
                </div>
                <div className="navbar-separator"></div>
                <div className="navbar-links">
                    <ul className="navbar-links-list">
                        <li><a className="navbar-links-a" href="#">HOME</a></li>
                        <li><a className="navbar-links-a" href="#">PROFILE</a></li>
                        <li><a className="navbar-links-a" href="#">LOGOUT</a></li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}

export default Menu;