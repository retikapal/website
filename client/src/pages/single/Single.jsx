import Sidebar from "../../components/sidebar/Sidebar"
import SinglePost from "../../components/singlePost/SinglePost"
import "./single.css"
import { useParams } from "react-router-dom"

export default function Single() {
  const { id} = useParams()
  return (
    <div className="single">
        <SinglePost/>
        <Sidebar/>
      
    </div>
  )
}
