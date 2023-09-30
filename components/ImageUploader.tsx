import React, { useState, useRef, ChangeEvent } from 'react';

interface ImageUploaderProps {
  onImageUpload: (base64Image: string | null) => void;
  title: string,
  subtitle: string
}

const ImageUploader: React.FC<ImageUploaderProps> = ({ onImageUpload, title, subtitle }) => {
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64Image = reader.result as string;
        setPreviewImage(base64Image);
        onImageUpload(base64Image);
      };
      reader.readAsDataURL(file);
    }
  };
  const openImageHandler = () => fileInputRef.current?.click();

  return (
    <div>
      <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        style={{ display: 'none' }}
        ref={(input) => (fileInputRef.current = input)}
      />
      <p className='uk-text-bold uk-text-capitalize'>
        {title}
        <span className='uk-text-small uk-text-light'> {subtitle} </span>
      </p>
      <div>
        <img
          src={previewImage || '/default-image.jpg'}
          alt="Preview"
          width="200"
          height='200'
          onClick={() => openImageHandler()}
        />
      </div>
      <div className='uk-margin-left'>
        <button onClick={() => openImageHandler()}>Seleccionar Imagen</button>
      </div>
    </div>
  );
};

export default ImageUploader;
