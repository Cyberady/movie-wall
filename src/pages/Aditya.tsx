import { useState } from "react";
import Masonry from "react-masonry-css";
import { motion } from "framer-motion";

import ImageCard from "../components/ImageCard";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Plus } from "lucide-react";

import { useMutation, useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";

export default function Aditya() {
  const [url, setUrl] = useState("");

  const images = useQuery(api.images.getImages, {
    category: "aditya",
  });

  const addImage = useMutation(api.images.addImage);
  const deleteImage = useMutation(api.images.deleteImage);

  const handleAdd = async () => {
    if (!url.trim()) return;
    await addImage({ url, category: "aditya" });
    setUrl("");
  };

  return (
    <div className="bg-black min-h-screen text-white p-6">

      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex justify-between items-center mb-8"
      >
        <h1 className="text-xl tracking-widest">ADITYA</h1>

        <div className="flex gap-2">
          <Input
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="Add image"
            className="bg-zinc-900 border-zinc-800"
          />
          <Button onClick={handleAdd}>
            <Plus />
          </Button>
        </div>
      </motion.div>

      {/* MASONRY */}
      <Masonry
        breakpointCols={{
          default: 4,
          1100: 3,
          700: 2,
          500: 1,
        }}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {images?.map((img: any) => (
          <ImageCard
            key={img._id}
            url={img.url}
            onDelete={() => deleteImage({ id: img._id })}
            theme="dark"
          />
        ))}
      </Masonry>

    </div>
  );
}