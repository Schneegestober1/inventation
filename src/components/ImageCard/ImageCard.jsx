const ImageCard = ({
  src,
  alt = 'image',
  size = 200,
  wrapperStyle = {},
  imageStyle = {},
}) => {
  const defaultWrapperStyle = {
    width: size,
    height: size,
    borderRadius: '50%',
    overflow: 'hidden',
  };

  const defaultImageStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  };

  return (
    <div style={{ ...defaultWrapperStyle, ...wrapperStyle }}>
      <img src={src} alt={alt} style={{ ...defaultImageStyle, ...imageStyle }} />
    </div>
  );
};

export default ImageCard

