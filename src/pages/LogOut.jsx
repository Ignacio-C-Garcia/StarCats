import { useDispatch } from "react-redux";
import { removeToken } from "../redux/authReducer";
import { Navigate } from "react-router-dom";

export default function LogOut() {
  const dispatch = useDispatch();
  dispatch(removeToken());
  return <Navigate to="/"></Navigate>;
}
