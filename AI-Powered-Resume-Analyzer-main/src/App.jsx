import React, { useState } from "react";

const App = () => {
  const [resumeText, setResumeText] = useState("");
  const [jobDescription, setJobDescription] = useState("");
  const [analysisResult, setAnalysisResult] = useState(null);
  const [loadingAnalysis, setLoadingAnalysis] = useState(false);
  const [analysisError, setAnalysisError] = useState("");

  const [chatHistory, setChatHistory] = useState([]);
  const [chatInput, setChatInput] = useState("");
  const [loadingChat, setLoadingChat] = useState(false);
  const [chatError, setChatError] = useState("");

  const [selectedFileName, setSelectedFileName] = useState("");
  const [fileUploadError, setFileUploadError] = useState("");

  // Handle file upload and parse via backend or FileReader for .txt
  const handleFileUploadBackend = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setSelectedFileName(file.name);
    setFileUploadError("");

    const fileType = file.type;

    if (
      fileType === "application/pdf" ||
      fileType ===
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
    ) {
      try {
        const formData = new FormData();
        formData.append("resume", file);

        const response = await fetch(
          "http://localhost:5000/api/upload-resume",
          {
            method: "POST",
            body: formData,
          }
        );

        const data = await response.json();

        if (response.ok) {
          setResumeText(data.parsedText);
          setFileUploadError("✅ File parsed successfully! Text loaded below.");
        } else {
          setFileUploadError(data.error || "❌ Failed to parse file.");
        }
      } catch (err) {
        console.error("Upload error:", err);
        setFileUploadError("❌ Error uploading file. Please try again.");
      }
    } else if (fileType === "text/plain") {
      const reader = new FileReader();
      reader.onload = (event) => {
        setResumeText(event.target.result);
        setFileUploadError("✅ Text file loaded successfully.");
      };
      reader.onerror = () => {
        setFileUploadError("❌ Failed to read text file.");
        setResumeText("");
      };
      reader.readAsText(file);
    } else {
      setFileUploadError(
        "❌ Unsupported file type. Please upload .txt, .pdf, or .docx."
      );
      setResumeText("");
    }
  };

  // Analyze resume and get suggestions from AI
  const handleAnalyze = async () => {
    setLoadingAnalysis(true);
    setAnalysisResult(null);
    setAnalysisError("");

    const prompt = `
You are an AI resume analysis tool.
Return ONLY valid JSON, no text or markdown.
JSON must have:
{
  "score": number (0-100),
  "overallFeedback": string,
  "keywordMatches": [{"keyword": string, "foundInResume": boolean}]
}
All strings must be properly escaped (\\n, \\", \\\\). No extra explanation.

Resume:
"""${resumeText}"""

Job Description:
"""${jobDescription}"""
`;

    try {
      const payload = {
        contents: [{ role: "user", parts: [{ text: prompt }] }],
        generationConfig: {
          responseMimeType: "application/json",
        },
      };

      const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
      const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`;

      const response = await fetch(apiUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (
        result.candidates &&
        result.candidates[0]?.content?.parts?.length > 0
      ) {
        const jsonString = result.candidates[0].content.parts[0].text;

        try {
          const parsed = JSON.parse(jsonString);
          setAnalysisResult(parsed);
        } catch (parseError) {
          console.error("Failed to parse JSON:", parseError, jsonString);
          setAnalysisError(
            "❌ AI returned invalid JSON. Try using shorter text or simpler input."
          );
        }
      } else {
        setAnalysisError(
          "❌ Failed to get a valid analysis result from AI. Please try again."
        );
        console.error("AI response structure unexpected:", result);
      }
    } catch (error) {
      setAnalysisError(`❌ Error during analysis: ${error.message}`);
      console.error("Analysis API error:", error);
    } finally {
      setLoadingAnalysis(false);
    }
  };

  // Chatbot message submit handler
  const handleChatSubmit = async (e) => {
    e.preventDefault();
    if (!chatInput.trim()) return;

    const newUserMessage = { role: "user", parts: [{ text: chatInput }] };
    const updatedChatHistory = [...chatHistory, newUserMessage];
    setChatHistory(updatedChatHistory);
    setChatInput("");
    setLoadingChat(true);
    setChatError("");

    try {
      const payload = {
        contents: [
          {
            role: "user",
            parts: [
              {
                text: `
You are an AI resume assistant.
Here is the resume and job description you should always use as context:

Resume:
"""${resumeText}"""

Job Description:
"""${jobDescription}"""

Now answer the user's question below based on this context:
                `.trim(),
              },
            ],
          },
          ...updatedChatHistory,
        ],
      };

      const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
      const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`;

      const response = await fetch(apiUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (
        result.candidates &&
        result.candidates[0]?.content?.parts?.length > 0
      ) {
        const aiResponseText = result.candidates[0].content.parts[0].text;
        setChatHistory((prev) => [
          ...prev,
          { role: "model", parts: [{ text: aiResponseText }] },
        ]);
      } else {
        setChatError(
          "Failed to get a response from the chatbot. Please try again."
        );
        console.error("Chatbot AI response structure unexpected:", result);
      }
    } catch (error) {
      setChatError(`Error communicating with the chatbot: ${error.message}`);
      console.error("Chatbot API error:", error);
    } finally {
      setLoadingChat(false);
    }
  };

  return (
    <>
    

      <div className="app-container max-w-4xl mx-auto p-8 font-sans bg-gradient-to-b from-indigo-50 to-white min-h-screen relative">
        {/* Classic Loading Bar */}
        {(loadingAnalysis || loadingChat) && (
          <div className="loading-bar-classic-container">
            <div className="loading-bar-classic"></div>
          </div>
        )}

        <h1 className="text-4xl font-extrabold mb-8 text-center text-indigo-900 drop-shadow-md">
          🚀 AI-Powered Resume Analyzer
        </h1>

        {/* File Upload */}
        <div className="mb-8">
          <label className="block text-lg font-semibold  mb-2 text-indigo-800">
            Upload Resume (.txt, .pdf, .docx)
          </label>
          <input
            type="file"
            accept=".txt,.pdf,.docx"
            onChange={handleFileUploadBackend}
            className="block w-full border border-indigo-300 hover:bg-indigo-400  cursor-pointer rounded-lg p-3 mb-2 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
          />
          {selectedFileName && (
            <p className="text-indigo-700 font-medium mb-1">
              Selected: {selectedFileName}
            </p>
          )}
          {fileUploadError && (
            <p
              className={
                fileUploadError.startsWith("❌")
                  ? "text-red-600"
                  : "text-green-600"
              }
            >
              {fileUploadError}
            </p>
          )}
        </div>

        {/* Paste Resume Text */}
        <div className="mb-8">
          <label className="block text-lg font-semibold mb-2 text-indigo-800">
            Or Paste Resume Text
          </label>
          <textarea
            value={resumeText}
            onChange={(e) => setResumeText(e.target.value)}
            rows={8}
            className="w-full border border-indigo-300 rounded-lg p-3 resize-none focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
            placeholder="Paste your resume text here..."
          />
        </div>

        {/* Job Description */}
        <div className="mb-8">
          <label className="block text-lg font-semibold mb-2 text-indigo-800">
            Job Description
          </label>
          <textarea
            value={jobDescription}
            onChange={(e) => setJobDescription(e.target.value)}
            rows={8}
            className="w-full border border-indigo-300 rounded-lg p-3 resize-none focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
            placeholder="Paste the job description here..."
          />
        </div>

        {/* Analyze Button */}
        <button
          onClick={handleAnalyze}
          disabled={loadingAnalysis || !resumeText.trim()}
          className={`w-full py-4 mb-10 cursor-pointer rounded-lg text-white font-semibold shadow-lg ${
            loadingAnalysis
              ? "bg-indigo-300 cursor-not-allowed"
              : "bg-indigo-600 hover:bg-indigo-700 transition"
          }`}
        >
          {loadingAnalysis ? "Analyzing..." : "Analyze Resume"}
        </button>

        {/* Analysis Errors */}
        {analysisError && (
          <p className="text-red-600 mb-8 font-medium text-center">
            {analysisError}
          </p>
        )}

        {/* Analysis Results */}
        {analysisResult && (
          <div className="mb-12 bg-indigo-50 p-8 rounded-xl  shadow-lg border border-indigo-200">
            <h2 className="text-2xl font-semibold mb-6  text-indigo-900 flex items-center gap-2">
              📊 Analysis Results
            </h2>
            <p className="mb-3 text-indigo-800 text-lg">
              <strong>Score:</strong> {analysisResult.score}/100
            </p>
            <p className="mb-6 text-indigo-800 text-lg">
              <strong>Overall Feedback:</strong> {analysisResult.overallFeedback}
            </p>

            <h3 className="font-semibold mb-3 text-indigo-900">
              ✅ Keyword Matches
            </h3>
            <ul className="list-disc list-inside mb-6 text-indigo-700">
              {analysisResult.keywordMatches.map((k, i) => (
                <li
                  key={i}
                  className={k.foundInResume ? "text-green-700" : "text-red-700"}
                >
                  {k.foundInResume ? "✅" : "❌"} {k.keyword}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Chatbot Section */}
        <div className="mb-12 bg-white p-6 rounded-xl shadow-lg border border-indigo-200">
          <h2 className="text-2xl font-semibold mb-6 text-indigo-900 flex items-center gap-2">
            💬 AI Resume Chatbot
          </h2>

          {/* Chat Messages */}
          <div
            style={{ maxHeight: 320 }}
            className="overflow-y-auto mb-4 border border-indigo-300 rounded-lg p-4 bg-indigo-50"
          >
            {chatHistory.length === 0 && (
              <p className="text-indigo-500 italic text-center">
                Start a conversation to get real-time resume improvement
                suggestions!
              </p>
            )}
            {chatHistory.map((msg, idx) => (
              <div
                key={idx}
                className={`mb-3 max-w-[80%] px-4 py-2 rounded-lg whitespace-pre-wrap ${
                  msg.role === "user"
                    ? "ml-auto bg-indigo-600 text-white text-right"
                    : "mr-auto bg-indigo-100 text-indigo-900"
                }`}
              >
                <strong className="block mb-1 text-sm opacity-75">
                  {msg.role === "user" ? "You" : "AI"}:
                </strong>
                <div>{msg.parts[0].text}</div>
              </div>
            ))}
            {loadingChat && (
              <p className="text-gray-500 text-center italic">
                AI is typing...
              </p>
            )}
            {chatError && (
              <p className="text-red-600 text-center">{chatError}</p>
            )}
          </div>

          {/* Chat Input */}
          <form onSubmit={handleChatSubmit} className="flex gap-2">
            <input
              type="text"
              value={chatInput}
              onChange={(e) => setChatInput(e.target.value)}
              placeholder="Ask for resume improvement tips..."
              disabled={loadingChat}
              className="flex-grow border border-indigo-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
            />
            <button
              type="submit"
              disabled={loadingChat || !chatInput.trim()}
              className={`px-6 rounded-lg text-white font-semibold cursor-pointer shadow-md ${
                loadingChat || !chatInput.trim()
                  ? "bg-indigo-300 cursor-not-allowed"
                  : "bg-indigo-600 hover:bg-indigo-700 transition"
              }`}
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default App;
