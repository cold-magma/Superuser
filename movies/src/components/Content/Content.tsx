import React,{ useState,useEffect,useCallback,useRef } from "react";
import axios from "axios";
import List from "./List";
import "./Content.css";
import { RootObject,User } from "../Models/UserModel";


const Content:React.FC = () => {

    const [userdat, setUserdat] = useState<Array<User>>([]);
    const [pageNum, setPageNum] = useState<number>(1);
    const [loading, setLoading] = useState<boolean>(true);
    const [hasMoreData, setHasMoreData] = useState<boolean>(true);

    let observer:React.MutableRefObject<IntersectionObserver | undefined> = useRef()

    const lastUser = useCallback(
      (node) => {
            if(loading) 
                return 
            if(observer.current)
                observer.current.disconnect()
            observer.current = new IntersectionObserver(entries =>{
                if(entries[0].isIntersecting && hasMoreData){
                    setPageNum(prevPageNum => prevPageNum+1)
                    console.log(pageNum)
                }
            }) 
            if(node)
            observer.current.observe(node) 
      },
      [loading,hasMoreData],
    )

    const deduplicate = (a:Array<User>) => {
        return a.filter((element, index) => a.indexOf(element) === index);
    }

    const getData = async () => {
        setLoading(true)
        let resp = await axios.get("https://reqres.in/api/users/", {
            params:{
                page: pageNum
            }
        });
        let x:RootObject = resp.data;

        if(x.total_pages <= x.page){
            setHasMoreData(false)
        }else{
            setHasMoreData(true);
        }
        setLoading(false);
        let fin = deduplicate(userdat.concat(x.data));
        setUserdat(prevDat => fin);
    }

    useEffect(() => {
        getData();
    }, [pageNum])

    return (
        <div className="users-list">
            <List callback={lastUser} items={userdat}/>
            <div id="user-count-status">{!hasMoreData && "No more users"}</div>
        </div>
    );
}

export default Content;