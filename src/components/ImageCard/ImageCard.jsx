const ImageCard = ({src, alt = 'image', size = 200, }) => {
  const wrapperStyle = {
    width: size,
    height: size,
    borderRadius: '50%',
    overflow: 'hidden',
  };

  const imageStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  };

  return (
    <div style={wrapperStyle}>
      <img src={src} alt={alt} style={imageStyle} />
    </div>
  );
};

export default ImageCard

