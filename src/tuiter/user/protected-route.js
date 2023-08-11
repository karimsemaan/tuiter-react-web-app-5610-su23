import React, { useEffect, useState } from "react";
import { useDispatch} from "react-redux";
import { useNavigate } from "react-router";
import { profileThunk } from "../services/auth-thunks";

function ProtectedRoute({ children }) {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    const load = async () => {
      const { payload } = dispatch(profileThunk());
      if (!payload) {
        navigate("/tuiter/login");
      }
      setLoading(false);
    };
    load();
  }, [dispatch, navigate]);
  return(<div className={`${loading ? "d-none" : ""}`}>
           {children}
         </div>);
}
export default ProtectedRoute;