import { Routes, Route, useNavigate } from "react-router-dom"; // Importing necessary components from the react-router-dom library
import A from './A'; // Importing the component A
import B from './B'; // Importing the component B

function Dashboard() {
  const navigate = useNavigate(); // Using the useNavigate hook to get the navigate function

  return (
    <div className="dashboard"> {/* The main dashboard container */}
      <div className="left-bar"> {/* The left bar container */}
        <button onClick={() => navigate("/a")}>A</button> {/* Button A that navigates to the /a route */}
        <button onClick={() => navigate("/b")}>B</button> {/* Button B that navigates to the /b route */}
      </div>
      <div className="display"> {/* The display container */}
        <Routes> {/* The Routes component to define the available routes */}
          <Route path="/a" element={<A />} /> {/* Route for path /a that renders component A */}
          <Route path="/b" element={<B />} /> {/* Route for path /b that renders component B */}
        </Routes>
      </div>
    </div>
  );
}

export default Dashboard; // Exporting the Dashboard component

