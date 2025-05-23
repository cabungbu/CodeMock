export const uploadImages = async (image: File) => {
  const formData = new FormData();
  formData.append("file", image);
  formData.append("upload_preset", "morriweb");
  formData.append("cloud_name", "dzdso60ms");
  formData.append("api_key", "112278112619619"); // API key vẫn ở trong formData

  try {
    const response = await fetch(
      "https://api.cloudinary.com/v1_1/dzdso60ms/image/upload",
      {
        method: "POST",
        body: formData,
      }
    );

    if (!response.ok) {
      throw new Error("Upload failed");
    }

    const data = await response.json();
    console.log("Response from Cloudinary:", data.url);
    return data.secure_url;
  } catch (error) {
    console.error("Error uploading image:", error);
    return null;
  }
};
