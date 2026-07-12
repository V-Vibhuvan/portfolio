import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ImageGallery = ({ images, title }) => {
  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <div className="w-full">

      {/* Hero Image */}

      <div className="overflow-hidden rounded-3xl border border-white/10 bg-[#101b33]">

        <AnimatePresence mode="wait">

          <motion.img
            key={selectedImage}
            src={selectedImage}
            alt={title}
            initial={{ opacity: 0.2 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0.2 }}
            transition={{ duration: 0.35 }}
            className="w-full aspect-video object-cover"
          />

        </AnimatePresence>

      </div>

      {/* Thumbnails */}

      <div className="grid gap-4 mt-5"
        style={{
          gridTemplateColumns: `repeat(${images.length}, minmax(0,1fr))`,
        }}
      >

        {images.map((image, index) => (

          <button
            key={index}
            onClick={() => setSelectedImage(image)}
            className={`
              overflow-hidden
              rounded-2xl
              border-2
              transition-all
              duration-300

              ${
                selectedImage === image
                  ? "border-blue-500 scale-[1.02]"
                  : "border-white/10 hover:border-blue-400"
              }
            `}
          >

            <img
              src={image}
              alt={`${title} ${index + 1}`}
              className="w-full h-full object-cover"
            />

          </button>

        ))}

      </div>

    </div>
  );
};

export default ImageGallery;