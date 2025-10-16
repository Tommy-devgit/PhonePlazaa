// src/components/products/AddProductForm.tsx
import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase";

export default function AddProductForm() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      let imageUrl = "";

      if (imageFile) {
        const formData = new FormData();
        formData.append("file", imageFile);
        formData.append("upload_preset", "ml_default"); 

        const res = await fetch(
          "https://api.cloudinary.com/v1_1/dgy1shbbd/upload",
          {
            method: "POST",
            body: formData,
          }
        );

        const data = await res.json();

        if (!res.ok || !data.secure_url) {
          alert("Image upload failed. Please check your Cloudinary setup.");
          setLoading(false);
          return;
        }

        imageUrl = data.secure_url;
      }

      if (!imageUrl) {
        alert("Please upload an image before submitting.");
        setLoading(false);
        return;
      }

      await addDoc(collection(db, "products"), {
        name,
        description,
        price,
        category,
        image: imageUrl,
        createdAt: new Date(),
      });

      alert("✅ Product added successfully!");
      setName("");
      setDescription("");
      setPrice("");
      setCategory("");
      setImageFile(null);
    } catch (error) {
      console.error("Error adding product:", error);
      alert("❌ Failed to add product. Check console for details.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gray-900 text-white p-6 rounded-xl max-w-lg mx-auto my-12">
      <h2 className="text-3xl font-bold text-red-500 mb-6">Add New Product</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          className="p-2 rounded-2xl text-white hover:bg-gray-800 cursor-pointer"
          placeholder="Product Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <textarea
          className="p-2 rounded-2xl text-white hover:bg-gray-800 cursor-pointer"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <input
          className="p-2 rounded-2xl text-white hover:bg-gray-800 cursor-pointer"
          placeholder="Price"
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />
        <input
          className="p-2 rounded-2xl text-white hover:bg-gray-800 cursor-pointer"
          placeholder="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
        />
        <input
          className="hover:bg-gray-800 w-fit p-2 rounded-2xl cursor-pointer"
          type="file"
          accept="image/*"
          onChange={(e) => setImageFile(e.target.files?.[0] || null)}
          required
        />
        <button
          type="submit"
          disabled={loading}
          className="bg-red-600 hover:bg-red-700 transition-colors p-2 rounded font-semibold"
        >
          {loading ? "Uploading..." : "Add Product"}
        </button>
      </form>
    </div>
  );
}
