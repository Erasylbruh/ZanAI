import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "../components/ui/button";

const NotFound = () => {
    const location = useLocation();

    useEffect(() => {
        console.error(
            "404 Error: User attempted to access non-existent route:",
            location.pathname,
        );
    }, [location.pathname]);

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
            <div className="text-center max-w-md">
                <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Page Not Found</h2>
                <p className="text-gray-600 mb-8">
                    Oops! The page you are looking for doesn't exist or has been moved.
                </p>
                <Link to="/">
                    <Button className="w-full sm:w-auto">
                        Return to Home
                    </Button>
                </Link>
            </div>
        </div>
    );
};

export default NotFound;
