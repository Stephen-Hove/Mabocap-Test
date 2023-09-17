import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function PageTitleUpdater() {
  const location = useLocation();

  useEffect(() => {
    // Define a mapping of routes to page titles
    const routeToTitleMap = {
      "/": "Committed to Superior Quality and Results | Mabocap",
      "/gallery": "Projects | Mabocap",
      "/careers": "Careers | Mabocap",
      // Add more routes and titles as needed
    };

    // Define a mapping of section IDs to page titles
    const sectionToTitleMap = {
      services: "Services | Mabocap",
      gallery: "Projects | Mabocap",
      // Add more section IDs and titles as needed
    };

    // Get the current route's title from the map
    const routeTitle = routeToTitleMap[location.pathname];

    // Get the section ID from the hash (e.g., "#services" => "services")
    const sectionHash = location.hash.replace("#", "");
    const sectionTitle = sectionToTitleMap[sectionHash];

    // Set the page title based on the route or section title
    if (routeTitle) {
      document.title = routeTitle;
    } else if (sectionTitle) {
      document.title = sectionTitle;
    } else {
      // Set a default title if neither a route nor a section is found
      document.title = "Default Page Title";
    }
  }, [location]);

  return null; // This component doesn't render anything
}

export default PageTitleUpdater;
