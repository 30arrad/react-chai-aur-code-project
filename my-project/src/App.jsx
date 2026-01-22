import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Feed from "./components/Feed";
import Rightbar from "./components/Rightbar";
import "./App.css";

export default function App() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-4 mt-4 px-2">
        <div className="md:col-span-3">
          <Sidebar />
        </div>
        <div className="md:col-span-6">
          <Feed />
        </div>
        <div className="md:col-span-3 hidden md:block">
          <Rightbar />
        </div>
      </div>
    </div>
  );
}
