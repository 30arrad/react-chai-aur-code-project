export default function Navbar() {
  return (
    <div className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-2">
        <h1 className="text-2xl font-bold text-blue-600">A30</h1>
        <input
          className="border rounded-full px-4 py-1 w-1/2 hidden md:block"
          placeholder="Search"
        />
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Search
        </button>
        <div className="flex gap-4 text-gray-600 text-sm">
          <span>Home</span>
          <span>My Network</span>
          <span>Jobs</span>
          <span>Messaging</span>
          <span>Notifications</span>
        </div>
      </div>
    </div>
  );
}
