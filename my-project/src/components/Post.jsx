export default function Post() {
  return (
    <div className="bg-white rounded-lg shadow">
      <div className="p-4">
        <div className="flex items-center gap-2">
          <img
            src="https://i.pravatar.cc/50"
            className="w-10 h-10 rounded-full"
          />
          <div>
            <h3 className="font-semibold">Free Online Courses</h3>
            <p className="text-xs text-gray-500">51,669 followers</p>
          </div>
        </div>

        <p className="mt-3 text-sm">
          Advance your career with 100 free courses & certificates.
        </p>

        <img
          src="https://source.unsplash.com/600x300/?education"
          className="mt-3 rounded"
        />
      </div>

      <div className="border-t flex justify-around py-2 text-sm text-gray-600">
        <button>Like</button>
        <button>Comment</button>
        <button>Repost</button>
        <button>Send</button>
      </div>
    </div>
  );
}
