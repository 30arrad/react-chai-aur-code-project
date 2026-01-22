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
          A proper article indicates that its noun is proper, and refers to a
          unique entity. It may be the name of a person, the name of a place,
          the name of a planet, etc. The Māori language has the proper article
          a, which is used for personal nouns; so, "a Pita" means "Peter".
        </p>
        <br />

        <img
          src="https://i.pravatar.cc/50"
          className=" w-full size-100 rounded"
        />

        <div className="flex items-center justify-between text-sm text-gray-600 px-4 py-2 border-t">
          {/* Left: Reactions */}
          <div className="flex items-center gap-1">
            <div className="flex -space-x-1">Like</div>
            <span className="ml-1">2,123</span>
          </div>

          {/* Right: Comments & Reposts */}
          <div className="flex gap-4">
            <span className="hover:underline cursor-pointer">283 comments</span>
          </div>
        </div>
      </div>

      <div className="border-t flex justify-around py-2 text-sm text-gray-600">
        <button>Like</button>
        <button>Comment</button>
        <button>Send</button>
      </div>
    </div>
  );
}
