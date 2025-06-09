
// dropgenius-frontend: Starter Next.js App with Tailwind CSS and Upload Feature

import Head from 'next/head';
import { useState } from 'react';

export default function Home() {
  const [email, setEmail] = useState('');
  const [file, setFile] = useState(null);
  const [uploadStatus, setUploadStatus] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    console.log(`Subscribed with: ${email}`);
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    if (!file) return;
    setUploadStatus('Uploading...');

    // Simulated upload — for production, connect to a backend or S3-compatible endpoint
    setTimeout(() => {
      setUploadStatus('Upload successful ✅');
      console.log('File uploaded:', file.name);
    }, 1500);
  };

  return (
    <>
      <Head>
        <title>DropGenius™ - AI Music Distribution</title>
        <meta name="description" content="Automate music distribution, royalties, and growth with DropGenius." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white flex flex-col items-center justify-center p-6">
        <div className="text-center">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6">
            DropGenius<span className="text-indigo-500">™</span>
          </h1>
          <p className="text-lg md:text-2xl text-gray-300 max-w-xl mx-auto mb-10">
            AI-powered platform for music distribution, royalty automation, and global reach. Join the movement.
          </p>

          <form onSubmit={handleSubscribe} className="max-w-lg mx-auto w-full mb-10">
            <input
              type="email"
              placeholder="Enter your email for early access"
              className="w-full p-4 rounded-lg text-black text-lg mb-4 shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button
              type="submit"
              className="w-full bg-indigo-600 hover:bg-indigo-700 transition text-white py-4 text-lg rounded-lg font-semibold shadow-lg"
            >
              Get Early Access
            </button>
          </form>

          <div className="max-w-lg mx-auto w-full bg-gray-800 p-6 rounded-xl shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">Upload Your Track</h2>
            <form onSubmit={handleUpload}>
              <input
                type="file"
                accept="audio/*"
                onChange={handleFileChange}
                className="w-full mb-4 p-2 text-sm text-white bg-black border border-gray-600 rounded"
              />
              <button
                type="submit"
                className="w-full bg-green-600 hover:bg-green-700 transition text-white py-3 text-md rounded-lg font-semibold"
              >
                Upload Track
              </button>
            </form>
            {uploadStatus && <p className="mt-4 text-green-400">{uploadStatus}</p>}
          </div>
        </div>
      </main>
    </>
  );
}
