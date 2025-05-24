export default function Loading() {
  return (
    <div className="p-4 max-w-7xl mx-auto">
      <h1 className="text-3xl font-extrabold mb-8">Loading...</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white shadow-md rounded-lg p-6 animate-pulse">
          <h2 className="text-xl font-bold mb-2 bg-gray-200 h-6 w-1/2"></h2>
          <p className="text-gray-700 bg-gray-200 h-4 w-full"></p>
          <p className="text-gray-500 text-sm mt-2 bg-gray-200 h-4 w-1/4"></p>
          <p className="text-gray-500 text-sm bg-gray-200 h-4 w-1/4"></p>
        </div>
      </div>
    </div>
  );
}
