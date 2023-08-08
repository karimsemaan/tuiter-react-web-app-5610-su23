import React from "react";
import { MdVerified } from "react-icons/md";
const TuitSummaryItem = (
 {
   tuit = {
     "topic": "Space",
     "username": "SpaceX",
     "time": "2h",
     "tuit": `Tesla CyberTruck lands on Mars and
               picks up the Curiosity rover on its 6' bed`,
     "image": "tesla-square.jpeg"
   }
 }
) => {
 return(
  <li className="list-group-item">
   <div className="row">
     <div className="col-10">
       <div>{tuit.username} <MdVerified style={{color: "blue"}}/> {tuit.handle} &middot; {tuit.time}</div>
       <div className="fw-bolder">{tuit.topic}</div>
       <div>{tuit.tuit}</div>
     </div>
     <div className="col-2">
       <img width={70} className="float-end rounded-3" src={`/images/${tuit.image}`} alt={tuit.userName}/>
     </div>
   </div>
  </li>
 );
};
export default TuitSummaryItem;