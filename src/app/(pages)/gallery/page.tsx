import Image from "next/image";

const images = [
  { src: "/1.jpg", alt: "Gallery Image 1" },
  { src: "/2.jpg", alt: "Gallery Image 2" },
  { src: "/3.jpg", alt: "Gallery Image 3" },
  { src: "/4.jpg", alt: "Gallery Image 4" },
  { src: "/5.jpg", alt: "Gallery Image 5" },
  { src: "/6.jpg", alt: "Gallery Image 6" },
  { src: "/7.jpg", alt: "Gallery Image 7" },
  { src: "/8.jpg", alt: "Gallery Image 8" },
  { src: "/1.jpg", alt: "Gallery Image 1" },
  { src: "/2.jpg", alt: "Gallery Image 2" },
  { src: "/3.jpg", alt: "Gallery Image 3" },
  { src: "/4.jpg", alt: "Gallery Image 4" },
  { src: "/5.jpg", alt: "Gallery Image 5" },
  { src: "/6.jpg", alt: "Gallery Image 6" },
  { src: "/7.jpg", alt: "Gallery Image 7" },
  { src: "/8.jpg", alt: "Gallery Image 8" },
  { src: "/1.jpg", alt: "Gallery Image 1" },
  { src: "/2.jpg", alt: "Gallery Image 2" },
  { src: "/3.jpg", alt: "Gallery Image 3" },
  { src: "/4.jpg", alt: "Gallery Image 4" },
  { src: "/5.jpg", alt: "Gallery Image 5" },
  { src: "/6.jpg", alt: "Gallery Image 6" },
  { src: "/7.jpg", alt: "Gallery Image 7" },
  { src: "/8.jpg", alt: "Gallery Image 8" },
  { src: "/1.jpg", alt: "Gallery Image 1" },
  { src: "/2.jpg", alt: "Gallery Image 2" },
  { src: "/3.jpg", alt: "Gallery Image 3" },
  { src: "/4.jpg", alt: "Gallery Image 4" },
  { src: "/5.jpg", alt: "Gallery Image 5" },
  { src: "/6.jpg", alt: "Gallery Image 6" },
  { src: "/7.jpg", alt: "Gallery Image 7" },
  { src: "/8.jpg", alt: "Gallery Image 8" },
  { src: "/1.jpg", alt: "Gallery Image 1" },
  { src: "/2.jpg", alt: "Gallery Image 2" },
  { src: "/3.jpg", alt: "Gallery Image 3" },
  { src: "/4.jpg", alt: "Gallery Image 4" },
  { src: "/5.jpg", alt: "Gallery Image 5" },
  { src: "/6.jpg", alt: "Gallery Image 6" },
  { src: "/7.jpg", alt: "Gallery Image 7" },
  { src: "/8.jpg", alt: "Gallery Image 8" },
  { src: "/1.jpg", alt: "Gallery Image 1" },
  { src: "/2.jpg", alt: "Gallery Image 2" },
  { src: "/3.jpg", alt: "Gallery Image 3" },
  { src: "/4.jpg", alt: "Gallery Image 4" },
  { src: "/5.jpg", alt: "Gallery Image 5" },
  { src: "/6.jpg", alt: "Gallery Image 6" },
  { src: "/7.jpg", alt: "Gallery Image 7" },
  { src: "/8.jpg", alt: "Gallery Image 8" },
];

export default function PhotoGallery() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <span className="text-yellow-600 font-medium tracking-wider">
          Photo Gallery
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4 mb-6">
          Philippine Public Service
          <br />
          Leadership Awards
        </h2>
        <p className="text-gray-600 leading-relaxed">
          The photo gallery showcased the award recipients, capturing their
          moments of triumph in Innovation, Leadership, and Sustainability.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((image, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-lg shadow-lg group"
          >
            <Image
              src={image.src || "/placeholder.svg"}
              alt={image.alt}
              width={400}
              height={300}
              className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <p className="text-white text-lg font-semibold">{image.alt}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
