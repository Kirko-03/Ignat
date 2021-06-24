import React from 'react'
type MessageType = {
    avatar:string
    name:string
    message:string
    time:string
}


function Message(props:MessageType) {

    return (
        <div style={{backgroundColor:"greenyellow",
            width:"250px",height:"90px"}}>
            <img src={props.avatar} style={{width:"50px",
                height:"50px",borderRadius:"100px",display:"inline-block",margin:"10px",position: "relative",
                top: "28px"
            }}></img>
            <div style={{width:"150px",borderRadius:"5px",backgroundColor:"black",display:"inline-block",height:"69px",position: "relative",
                bottom: "-6px"}}>

                <div style={{color:"hotpink",position:"relative",
                    right:"-15px"}}>{props.name}</div>
            <div style={{color:"lightblue",position:"relative",
                right:"-15px"}}>{props.message}</div>
                <div style={{textAlign:"right",color:"gray",position:"relative",right:"10px"}}>{props.time}</div>
<div style={{position:"relative",
    top: "-51.5px",
    width: "12px",
    height: "16px",
    border:" 20px solid transparent",borderBottom: "20px solid black",
    right: "16px"}}></div>

            </div>

        </div>
    )
}

export default Message
