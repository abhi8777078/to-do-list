import React from 'react'
import { useState } from 'react';
import "./home.css";
import DeleteIcon from '@mui/icons-material/Delete';
function Home() {
    const [items, setitems] = useState([]);
    const [inpList,setinpList]=useState("")
    const itemEvent = (event) => {
        setinpList(event.target.value);
    };
    const handle = () => {
        setitems((event) => {
            return [...event, inpList];
        })
        setinpList("");
    };
    const deleteItems = (props) => {
        setitems((event) => {
            return event.filter((arr,index) => {
                return index !== props.id;
            })
        })
    };

    return (
        <div className="main-container">
            <div className="container">
                <div className="heading">
                    <h2>TO-DO-LIST</h2>
                </div>
                <div className="addTask">
                    <div className="left">
                        <button  id='btn' onClick={handle}>Add Task</button>
                    </div>
                </div>
                <div className="card">
                    <input type="text" id='inp' placeholder='Add a item' value={inpList} onChange={itemEvent}/>
                    
                    <ol className='list'>
                        {/* <li>{inpList}</li> */}
                        {items.map((itemsVal ,index)=>{
                            return <div className='new'>
                                <DeleteIcon
                                    className='deleteIcon'
                                    // onClick={() => {
                                    //     props.onSelect(props.id);
                                    // }}
                                    // id={index}
                                    // key={index}
                                    
                                />
                            <li>{itemsVal}</li>
                            </div>
                        })}
                    </ol>
                </div>
            </div>
        </div>
    )
}

export default Home
