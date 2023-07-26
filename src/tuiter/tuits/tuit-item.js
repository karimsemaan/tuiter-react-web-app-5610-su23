import { useDispatch } from "react-redux";
import { deleteTuit } from "../reducers/tuits-reducer";
import { BiX } from "react-icons/bi";

const TuitItem = ({
    tuit = {
        "topic": "Space",
        "userName": "SpaceX",
        "title": "100s of SpaceX Starships land on Mars after a 6 month journey. 1000s of Martian colonists being building Mars Base 1",
        "time": "2h",
        "image": "spacex-square.jpeg",
        "handle": "@spacex",
        "tuit": "You want to wake up in the morning and think the future is going to be great - and that’s what being a spacefaring civilization is all about. It’s about believing in the future and thinking that the future will be better than the past. And I can’t think of anything more exciting than going out there and being among the stars",
    },
}) => {
    const dispatch = useDispatch();
    const deleteTuitHandler = (id) => {
        dispatch(deleteTuit(id));
    };
    return (
        <div className="row">
            <div className="col-10">
            <BiX
        className="float-end"
        onClick={() => deleteTuitHandler(tuit._id)}
      />
                <div>
                    <span className="fw-bold">{tuit.userName}</span>
                    <img src="https://cdn.cdnlogo.com/logos/t/77/twitter-verified-badge.svg" style={{ width: '13px', height: '13px', marginLeft: '5px' }} alt="" />
                    <span style={{ marginLeft: '5px' }}>
                        {tuit.handle} {'\u00B7'} {tuit.time}
                    </span>
                    <div>{tuit.tuit}</div>
                </div>
            </div>
        </div>
    );

};
export default TuitItem;