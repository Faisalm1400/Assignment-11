import { Link } from "react-router-dom";

const Dashboard = () => {
    return (
        <div>
            <Link to={'/dashboard/myMarathons'}>
            <button>My Marathons</button>
            </Link>
        </div>
    );
};

export default Dashboard;