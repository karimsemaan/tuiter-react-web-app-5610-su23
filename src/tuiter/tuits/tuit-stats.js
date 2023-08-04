import { FaRegComment, FaRetweet, FaHeart } from "react-icons/fa";
import { BsUpload } from "react-icons/bs";
import { updateTuitThunk } from "../services/tuits-thunks";
import { useDispatch } from "react-redux";
import { SIDislike } from "react-icons/si";


const TuitStats = ({
    tuit = {
        liked: true,
        replies: 639,
        retuits: 1002,
        likes: 3964,
        dislikes: 0,
    },
}) => {
    const dispatch = useDispatch();
    return (
        <div className="row mt-2">
            <div className="col">
                <FaRegComment className="mx-2" />
                {tuit.replies}
            </div>
            <div className="col">
                <FaRetweet className="mx-2" />
                {tuit.retuits}
            </div>
            <div className="col">
                <FaHeart
                    className="text-danger"
                    onClick={() =>
                        dispatch(updateTuitThunk({ ...tuit, likes: tuit.likes + 1 }))
                    }
                />
                <span className="ms-2">{tuit.likes}</span>
            </div>
            <div className="col">
                <SIDislike className="text-danger"
                onClick={() =>
                    dispatch(updateTuitThunk({ ...tuit, likes: tuit.dislikes + 1 }))
                }/>
                <span className="ms-2">{tuit.dislikes}</span>
                </div>
            <div className="col">
                <BsUpload className="mx-2" />
            </div>
        </div>
    );
};
export default TuitStats;