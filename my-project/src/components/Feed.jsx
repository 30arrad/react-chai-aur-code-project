import Post from "./Post";

export default function Feed() {
  return (
    <div className="space-y-4">
      <div className="bg-white rounded-lg shadow p-4">
        <div className="flex items-center gap-2">
          <img
            src="https://i.pravatar.cc/50"
            className="w-10 h-10 rounded-full"
          />
          <input
            className="w-full border rounded-full px-4 py-2"
            placeholder="Start a post"
          />
        </div>

        <div className="flex justify-around py-2 text-sm text-gray-600">
          <button>Video</button>
          <button>Photo</button>
          <button>Write Your Thoughts</button>
        </div>
      </div>

      <Post />
    </div>
  );
}
