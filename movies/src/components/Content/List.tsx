import React from "react";
import "./List.css";
import {User} from "../Models/UserModel";

interface ListProps{
    items:User[];
    callback: (node: any) => void;
}

const List:React.FC<ListProps> = ({items,callback}) => {
    return (
        <React.Fragment>
            {items.map((item: User, index:number) => {
                    if(items.length === index + 1){
                        return (
                            <div ref={callback} className="user-elem" key={item.id}>
                                <img src={item.avatar}/>
                                <h1>{item.first_name}</h1><h1>{item.last_name}</h1>
                                <p>{item.email}</p>
                            </div>
                        );
                    }
                    else{
                        return (
                            <div className="user-elem" key={item.id}>
                                <img src={item.avatar}/>
                                <h1>{item.first_name}</h1><h1>{item.last_name}</h1>
                                <p>{item.email}</p>
                            </div>
                        );
                    }
                }
            )}
        </React.Fragment>
    );
}

export default List;