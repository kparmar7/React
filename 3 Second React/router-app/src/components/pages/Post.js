import { useParams } from "react-router-dom";

const Post = () => {
  const { contact , id} = useParams();
    return (<div><h1>Post Page {contact} {id}</h1></div>);
  };
  
  export default Post;
  