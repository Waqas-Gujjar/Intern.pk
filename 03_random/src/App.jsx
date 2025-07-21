import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [quote, setQuote] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchQuote = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        "https://api.freeapi.app/api/v1/public/quotes/quote/random"
      );
      const data = response.data.data;
      setQuote(data);
    } catch (error) {
      console.error("Failed to fetch quote:", error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <div className="min-h-screen animate-fadeIn flex items-center justify-center bg-gradient-to-br from-blue-500 via-purple-600 to-pink-500 p-6">
      <div className="bg-white/20 backdrop-blur-md border border-white/30 shadow-2xl rounded-3xl px-10 py-8 max-w-xl w-full text-center transition-all duration-300 min-h-[320px] flex flex-col justify-between animate-fadeIn">
        <h1 className="text-4xl font-bold text-white drop-shadow-md mb-4">
          💬 Quote of the Moment
        </h1>

        {loading ? (
          <div className="flex items-center justify-center h-32">
            <div className="animate-spin rounded-full h-10 w-10 border-t-4 border-white border-b-transparent"></div>
          </div>
        ) : quote ? (
          <div>
            <p className="text-xl text-white/90 italic mb-6 min-h-[100px] text-gray-500 transition-opacity duration-500">
              “{quote?.content || "No quote"}”
            </p>
            <h3 className="text-lg font-semibold text-yellow-200">
              — {quote?.author || "Unknown"}
            </h3>
          </div>
        ) : (
          <p className="text-red-200">No quote found.</p>
        )}

        <button
          onClick={fetchQuote}
          className="mt-6 px-6 py-3 bg-white/20 cursor-pointer hover:bg-white/30 text-white font-medium rounded-full shadow-md transition duration-300 ease-in-out backdrop-blur-sm hover:scale-105"
        >
          🔁 Generate Another
        </button>
      </div>
    </div>
  );
}

export default App;
