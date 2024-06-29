import { useContext } from "react";
import UserContext from "../context/userContext";

const Dashboard = () => {
  const { user } = useContext(UserContext);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md text-center">
        <h1 className="text-2xl font-bold mb-4">Welcome, {user.email}!</h1>
        <button
          onClick={() => window.history.back()}
          className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Back
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
