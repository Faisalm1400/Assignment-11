import axios from "axios";
import { useEffect } from "react";

const MyApply = () => {
    const [appliedMarathons, setAppliedMarathons] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:5000/user/apply-list") // No token needed
            .then((response) => setAppliedMarathons(response.data))
            .catch((error) => console.error("Error fetching applied marathons:", error));
    }, []);

    return (
        <div>

        </div>
    );
};

export default MyApply;