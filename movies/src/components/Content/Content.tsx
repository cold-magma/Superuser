import React,{ useState,useEffect } from "react";
import axios from "axios";
import List from "./List";
import "./Content.css";
import { RootObject,User } from "../Models/UserModel";


const Content:React.FC = () => {

    const [movdat, setMovdat] = useState<Array<User>>([{id: 0, email: "",first_name: "",last_name: "",avatar: ""}]);

    const getData = async () => {
        let resp = await axios.get("https://reqres.in/api/users/");
        let x:RootObject = resp.data;
        setMovdat(x.data);
    }

    useEffect(() => {
        getData();
    }, [])

    return (
        <div className="users-list">
            <List items={movdat}/>
        </div>
    );
}

export default Content;