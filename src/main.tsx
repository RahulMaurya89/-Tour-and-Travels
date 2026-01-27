import { createRoot } from "react-dom/client";
import logo from "./assets/33.png";
import App from "./App.tsx";
import "./index.css";


const link = document.createElement("link");
link.rel = "icon";
link.type = "image/png";
link.sizes = "512x512"; // 👈 important
link.href = logo;

document.head.appendChild(link);

createRoot(document.getElementById("root")!).render(<App />);
