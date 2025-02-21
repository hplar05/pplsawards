"use client";

import { useState, useEffect } from "react";

interface VideoPresentation {
  id: string;
  videoLink: string | null;
  title: string | null;
}

export function VideoSection() {
  const [presentation, setPresentation] = useState<VideoPresentation | null>(
    null
  );

  useEffect(() => {
    const fetchPresentation = async () => {
      try {
        const response = await fetch("/api/video-presentation");
        const data = await response.json();
        if (data.length > 0) {
          setPresentation(data[0]); // Assuming we want to display the first video
        }
      } catch (error) {
        console.error("Failed to fetch video presentation:", error);
      }
    };

    fetchPresentation();
  }, []);

  if (!presentation || !presentation.videoLink) {
    return null;
  }

  return (
    <div className="w-full max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">{presentation.title || null}</h2>
      <div className="aspect-video">
        <iframe
          width="100%"
          height="100%"
          src={presentation.videoLink}
          title={presentation.title || "Video presentation"}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}
