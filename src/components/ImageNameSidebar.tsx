type ImageNameSidebarProps = {
  images: any[];
};

export default function ImageNameSidebar({ images }: ImageNameSidebarProps) {
  return (
    <div className="w-1/4 h-full bg-gray-200">
      <ul>
        {images.map((image) => (
          <a key={image.name} href="#" className="block hover:bg-gray-300">
            <li key={image.name}>{image.name}</li>
          </a>
        ))}
      </ul>
    </div>
  );
}
