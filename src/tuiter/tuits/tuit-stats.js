import { FaRegComment, FaRetweet, FaHeart} from "react-icons/fa";
import { BsUpload } from "react-icons/bs";

const TuitStats = ({
    tuit = {
        liked: true,
        replies: 639,
        retuits: 1002,
        likes: 3964,
    },
}) => {
    return (
        <div className="row mt-2">
            <div className="col">
                <FaRegComment className="mx-2"/>
                {tuit.replies}
            </div>
            <div className="col">
                <FaRetweet className="mx-2"/>
                {tuit.retuits}
            </div>
            <div className="col">
                <FaHeart className="mx-2" fill={tuit.liked ? "#E0245E" : ""}/>
                {tuit.likes}
            </div>
            <div className="col">
                <BsUpload className="mx-2"/>
            </div>
        </div>
    );
};
export default TuitStats;