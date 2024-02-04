/** @format */
import { Navigate, useParams } from "react-router-dom";

function PostOverview() {
  const { url } = useParams();
  return <Navigate to={url}></Navigate>;
}

export default PostOverview;
