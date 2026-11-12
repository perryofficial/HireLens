
import { useEffect, useState } from "react";

interface HealthResponse {
  success: boolean;
  message: string;
  version: string;
}

function App() {
  const [backendData, setBackendData] =
    useState<HealthResponse | null>(null);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://127.0.0.1:5000/api/v1/health")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Backend request failed");
        }

        return response.json();
      })
      .then((data: HealthResponse) => {
        setBackendData(data);
      })
      .catch((error) => {
        console.error("API Error:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-4xl font-bold text-indigo-600">
        HireLens
      </h1>

      <p className="mt-2 text-gray-600">
        AI Powered Resume Analyzer
      </p>

      <div className="mt-8 rounded-xl bg-white p-8 shadow-md">
        {loading ? (
          <p>Connecting to backend...</p>
        ) : backendData ? (
          <>
            <p className="text-green-600 font-semibold">
              Backend Connected!
            </p>

            <p className="mt-2">
              {backendData.message}
            </p>

            <p className="text-sm text-gray-500">
              API Version: {backendData.version}
            </p>
          </>
        ) : (
          <p className="text-red-600">
            Backend connection failed!
          </p>
        )}
      </div>
    </div>
  );
}

export default App;
