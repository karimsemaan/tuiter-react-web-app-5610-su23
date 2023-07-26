import React from "react";
import { useSelector } from "react-redux";
import TuitItem from "./tuit-item";
import TuitStats from "./tuit-stats";
const TuitsList = () => {
 const { tuits } = useSelector(state => state.tuits)

 return (
   <ul className="list-group">
     {tuits.map(tuit => (
       <li className="list-group-item" key={tuit._id}>
        <div className="row">
        <div className="col-auto">
                <img width={50}
                    className="float-end rounded-circle"
                    src={`/images/${tuit.image}`} alt="" />
            </div>
           <div className="col-10">
              <TuitItem tuit={tuit} /> <br />
              <TuitStats tuit={tuit} />
            </div>
         </div>
       </li>
     ))}
   </ul>
 );
};

export default TuitsList;