import { Link } from 'react-router-dom';
import error from '../assets/photos/404 page image.png'

const ErrorPage = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <img src={error} alt="404 Error" className="w-96 h-auto" />
            <h1 className="text-5xl font-bold text-gray-800 mt-6">Oops! Page Not Found</h1>
            <p className="text-lg text-gray-600 mt-4">
                The page you're looking for doesn't exist or may have been moved. But don’t worry, keep running forward!
            </p>
            <Link to="/" className="mt-6 btn btn-primary">
                Back to Home 🏡
            </Link>
        </div>
    );
};

export default ErrorPage;