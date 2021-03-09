import React from "react";
import "./List.css";
import {User} from "../Models/UserModel";

interface ListProps{
    items:User[];
}

const List: React.FC<ListProps> = ({items}) => {
    return (
        <React.Fragment>
            {items.map((item: User) => (
                <div className="user-elem" key={item.id}>
                    <img src={item.avatar}/>
                    <h1>{item.first_name}</h1><h1>{item.last_name}</h1>
                    <p>{item.email}</p>
                </div>)
            )}
        </React.Fragment>
    );
}

export default List;