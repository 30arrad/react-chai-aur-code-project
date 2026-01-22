import Post from "./Post";

export default function Feed() {
  return (
    <div className="space-y-4">
      <div className="bg-white rounded-lg shadow p-4">
        <input
          className="w-full border rounded-full px-4 py-2"
          placeholder="Start a post"
        />
      </div>

      <Post />
    </div>
  );
}
