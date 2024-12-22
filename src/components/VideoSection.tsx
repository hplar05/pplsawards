"use client";

export function VideoSection() {
  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="aspect-video">
        <iframe
          width="100%"
          height="100%"
          src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2F100088781434866%2Fvideos%2F2345348159188033%2F&show_text=false&width=560&t=0"
          title="Video presentation"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}
