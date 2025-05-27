import { Link } from "react-router-dom";

const Dashboard = () => {
    return (
        <div className="flex gap-3">
            <Link to={'/dashboard/myMarathons'}>
            <button>My Marathons</button>
            </Link>
            <Link to={'/dashboard/myApply'}>
            <button>My Apply</button>
            </Link>
        </div>
    );
};

export default Dashboard;