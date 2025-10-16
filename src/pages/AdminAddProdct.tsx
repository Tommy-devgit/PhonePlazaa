import { useState } from "react";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase";
import { uploadToCloudinary } from "../utils/uploadToCloudinary";

export default function AdminAddProduct() {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!image) return alert("Please select an image");

    try {
      setUploading(true);
      const imageUrl = await uploadToCloudinary(image);

      await addDoc(collection(db, "products"), {
        name,
        category,
        description,
        price,
        image: imageUrl,
        createdAt: serverTimestamp(),
      });

      setSuccess(true);
      setName("");
      setCategory("");
      setDescription("");
      setPrice("");
      setImage(null);
    } catch (err) {
      console.error(err);
      alert("Failed to upload product");
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">
      <form onSubmit={handleSubmit} className="bg-gray-900 p-8 rounded-lg w-full max-w-md space-y-4">
        <h2 className="text-2xl font-bold text-red-500">Add New Product</h2>

        <input
          type="text"
          placeholder="Product Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-2 bg-gray-800 rounded"
          required
        />

        <input
          type="text"
          placeholder="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full p-2 bg-gray-800 rounded"
          required
        />

        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full p-2 bg-gray-800 rounded"
          required
        />

        <input
          type="text"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="w-full p-2 bg-gray-800 rounded"
          required
        />

        <input
          type="file"
          accept="image/*"
          onChange={(e) => setImage(e.target.files?.[0] || null)}
          className="w-full p-2 bg-gray-800 rounded"
          required
        />

        <button
          type="submit"
          disabled={uploading}
          className="w-full bg-red-600 hover:bg-red-700 py-2 rounded font-semibold"
        >
          {uploading ? "Uploading..." : "Add Product"}
        </button>

        {success && <p className="text-green-400 text-center">Product added successfully!</p>}
      </form>
    </div>
  );
}
