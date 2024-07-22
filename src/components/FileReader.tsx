// src/components/ImageUploader.js
import { useState } from "react";
import ImageNameSiderbar from "./ImageNameSidebar";

const FileReader = () => {
  const [selectedImages, setSelectedImages] = useState([]);

  const handleImageChange = (e) => {
    const files = e.target.files;
    const images = Array.from(files);
    setSelectedImages(images);
  };

  console.log(selectedImages);

  return (
    // <div>
    //   {selectedImages && (
    //     <input
    //       type="file"
    //       accept="image/png"
    //       multiple
    //       onChange={handleImageChange}
    //     />
    //   )}
    //   <ImageNameSiderbar images={selectedImages} />
    // // hide the input field and only show the sidebar when images are selected

    <div>
      {selectedImages.length == 0 && (
        <input
          type="file"
          accept="image/png"
          multiple
          onChange={handleImageChange}
        />
      )}
      {selectedImages.length > 0 && (
        <ImageNameSiderbar images={selectedImages} />
      )}
    </div>
  );
};

export default FileReader;
