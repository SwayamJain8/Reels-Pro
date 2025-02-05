"use client";
import { apiClient } from "@/lib/api-client";
import { IVideo } from "@/models/Video";
import { IKVideo } from "imagekitio-next";
import { useEffect, useState } from "react";

export default function Home() {
  const [videos, setVideos] = useState<IVideo[]>([]);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const data = await apiClient.getVideos();
        setVideos(data);
      } catch (error) {
        console.log("Error fetching videos:" + error);
      }
    };
    fetchVideos();
  }, []);

  return (
    <div>
      <h1>ChaiCode</h1>
      <IKVideo path={videos[0]?.videoUrl} />
    </div>
  );
}
