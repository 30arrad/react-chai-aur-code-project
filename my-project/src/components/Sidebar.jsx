export default function Sidebar() {
  return (
    <div className="bg-white rounded-lg shadow p-4">
      <div className="text-center">
        <img
          src="https://i.pravatar.cc/100"
          className="w-16 h-16 rounded-full mx-auto"
        />
        <h2 className="font-semibold mt-2">Arrad Ahmed</h2>
        <p className="text-sm text-gray-500">Dhaka, Bangladesh</p>
      </div>

      <div className="mt-4 text-sm text-gray-600 space-y-2">
        <p>Connections</p>
        <p>Saved Items</p>
        <p>Groups</p>
        <p>Events</p>
      </div>
    </div>
  );
}
