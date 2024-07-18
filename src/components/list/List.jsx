import { useSelector } from "react-redux"
import "./List.css"
const List = () => {

    const storeData = useSelector((store) => store)
    const { users } = storeData
    // console.log("sroreData-->", storeData)
    return (

        <div className="list">
            <h2>User Lists</h2>
            {storeData.users.length > 0 ? (
                <ul>
                    {storeData?.users.map((singleUser, i) => <li key={i}>{singleUser}</li>)}
                </ul>
            ) : null}
        </div>


    )
}

export default List;