import { useState } from "react";
import "./index.css";

export default function Gallery({
  images = [],
  width,
  height,
  radius = "0px",
  showThumbs = false,
}) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevImage = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const nextImage = () => {
    if (currentIndex < images.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <div className="gallery" style={{ width }}>
      <div className="gallery-main" style={{ height, borderRadius: radius }}>
        <button
          className="gallery-arrow left"
          onClick={prevImage}
          disabled={currentIndex === 0}
        >
          ‹
        </button>

        <img
          src={images[currentIndex]?.src}
          alt="Produto"
          style={{ borderRadius: radius }}
        />

        <button
          className="gallery-arrow right"
          onClick={nextImage}
          disabled={currentIndex === images.length - 1}
        >
          ›
        </button>
      </div>

      {showThumbs && (
        <div className="gallery-thumbs">
          {images.map((img, index) => (
            <img
              key={index}
              src={img.src}
              alt="Miniatura"
              className={index === currentIndex ? "active" : ""}
              onClick={() => setCurrentIndex(index)}
              style={{ borderRadius: radius }}
            />
          ))}
        </div>
      )}
    </div>
  );
}
