import { v4 as uuidv4 } from "uuid";

function chillHop() {
  return [
    {
      name: "Summer Vibe",
      cover:
        "https://chillhop.com/wp-content/uploads/2023/02/71374d07888a8b1b3fbef53b82d283f53209cc1a-1024x1024.jpg",
      artist: "Kunal",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=51088",
      color: ["#205950", "#FFFFFF"],
      id: uuidv4(),
      active: true,
    },
    {
      name: "In the Night",
      cover:
        "https://chillhop.com/wp-content/uploads/2023/02/492202568b0d18312224043686735f7f1a47f67b-1024x1024.jpg",
      artist: "Kunal 1",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=51086",
      color: ["#205950", "#FFFFFF"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Twilight",
      cover:
        "https://chillhop.com/wp-content/uploads/2023/02/71374d07888a8b1b3fbef53b82d283f53209cc1a-1024x1024.jpg",
      artist: "Kunal 2",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=51084",
      color: ["#205950", "#FFFFFF"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Oasis",
      cover:
        "https://chillhop.com/wp-content/uploads/2022/09/8c2eab8525ace609b0c68b7564eb085d2244ee09-1024x1024.jpg",
      artist: "Kunal 3",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=51080",
      color: ["#205950", "#FFFFFF"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Shorty",
      cover:
        "https://chillhop.com/wp-content/uploads/2023/02/71374d07888a8b1b3fbef53b82d283f53209cc1a-1024x1024.jpg",
      artist: "Kunal 3",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=51082",
      color: ["#205950", "#FFFFFF"],
      id: uuidv4(),
      active: false,
    },
  ];
}

export default chillHop;
