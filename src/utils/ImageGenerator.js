// ImageGenerator.js - Generates placeholder images for developer profiles

const generatePlaceholderImage = (name) => {
  const baseUrl = "https://via.placeholder.com/150";
  const formattedName = name.replace(/\s+/g, '+');
  return `${baseUrl}?text=${formattedName}`;
};

export default generatePlaceholderImage;