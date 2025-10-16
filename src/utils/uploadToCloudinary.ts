// src/utils/uploadToCloudinary.ts
export async function uploadToCloudinary(file: File): Promise<string> {
  const cloudName = 'dgy1shbbd';
  const uploadPreset = "ml_default"; // unsigned preset

  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", uploadPreset);

  const res = await fetch(`https://api.cloudinary.com/v1_1/${cloudName}/image/upload`, {
    method: "POST",
    body: formData,
  });

  const data = await res.json();
  if (!res.ok) throw new Error(data.error?.message || "Cloudinary upload failed");
  return data.secure_url;
}
