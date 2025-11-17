import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { Footer, Navbar } from "@/widgets/layout";
import routes from "@/routes";

function App() {
  const { pathname } = useLocation();

  return (
    <>
      {/* Navbar with fixed positioning and gray background */}
      <div className="w-full fixed top-0 z-50 shadow-sm" style={{fontFamily: "Arial,Helvetica,sans-serif"}}> {/* Changed to bg-gray-100 */}
        <Navbar routes={routes} />
      </div>

      {/* Main content with proper padding to account for fixed navbar */}
      <div className="pt-[75px] min-h-screen" style={{fontFamily: "Arial,Helvetica,sans-serif"}}> {/* Adjusted padding */}
        <Routes>
          {routes.map(
            ({ path, element }, key) =>
              element && <Route key={key} exact path={path} element={element} />
          )}
          <Route path="*" element={<Navigate to="/home" replace />} />
        </Routes>
      </div>

      {/* Footer Section */}
      <div className="bg-white">
        <Footer />
      </div>
    </>
  );
}

export default App;