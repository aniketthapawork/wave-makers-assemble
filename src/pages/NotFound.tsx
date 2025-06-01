
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Waves, Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-ocean-50 to-wave-50">
      <div className="text-center px-4">
        <div className="mb-8">
          <Waves className="h-24 w-24 text-ocean-600 mx-auto mb-4 animate-float" />
          <h1 className="text-6xl md:text-8xl font-bold text-ocean-600 mb-4">404</h1>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-playfair">
            Lost at Sea?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-md mx-auto">
            Looks like this page has drifted away like plastic in the ocean. Let's get you back to shore!
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="ocean-gradient text-white hover:opacity-90">
            <Link to="/">
              <Home className="mr-2 h-5 w-5" />
              Return to Home
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="border-ocean-600 text-ocean-600 hover:bg-ocean-50">
            <Link to="/get-involved">
              <Waves className="mr-2 h-5 w-5" />
              Join a Cleanup
            </Link>
          </Button>
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-500 mb-4">While you're here, did you know?</p>
          <div className="bg-white p-6 rounded-xl shadow-md max-w-lg mx-auto">
            <p className="text-gray-700 italic">
              "Every minute, a garbage truck's worth of plastic enters our oceans. 
              But every person who joins our cleanup drives makes a difference!"
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
