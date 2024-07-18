import ChatContainer from "../ChatContainer/ChatContainer"
import List from "../list/List"
import "./Dashboard.css"

const Dashboard = () => {
    return (
        <div className="dashboard">
            <List />
            <ChatContainer />
        </div>
    )
}

export default Dashboard
