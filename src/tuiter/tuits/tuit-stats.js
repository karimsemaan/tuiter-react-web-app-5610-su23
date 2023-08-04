import { FaRegComment, FaRetweet, FaHeart, FaThumbsDown } from "react-icons/fa";
import { BsUpload } from "react-icons/bs";
import { updateTuitThunk } from "../services/tuits-thunks";
import { useDispatch } from "react-redux";

const TuitStats = ({
    tuit = {
        liked: true,
        replies: 639,
        retuits: 1002,
        likes: 3964,
        dislikes: 123,
        disliked: false,
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
                    className="mx-2"
                    fill={tuit.liked ? "#E0245E" : ""}
                    onClick={() =>
                        dispatch(updateTuitThunk({ ...tuit, likes: tuit.likes + 1, liked: true}))
                    }
                />
                {tuit.likes}
            </div>
            <div className="col">
                <FaThumbsDown className="mx-2"
                fill={tuit.disliked ? "#E0245E" : ""}
                onClick={() =>
                    dispatch(updateTuitThunk({ ...tuit, dislikes: tuit.dislikes + 1, disliked: true }))
                }/>
                {tuit.dislikes || 0}
                </div>
            <div className="col">
                <BsUpload className="mx-2" />
            </div>
        </div>
    );
};
export default TuitStats;