import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import TuitItem from "./tuit-item";
import TuitStats from "./tuit-stats";
import {findTuitsThunk} from "../services/tuits-thunks";
const TuitsList = () => {
 const {tuits, loading} = useSelector(state => state.tuits)
 const dispatch = useDispatch();
 useEffect(() => {
   dispatch(findTuitsThunk())
 }, [dispatch])
 return (
   <ul className="list-group">
       { loading &&
       <li className="list-group-item">
         Loading...
       </li>
     }
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