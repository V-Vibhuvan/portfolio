// TradeApp
import Trade_App_img1 from "../assets/images/TradeApp/Trade_App_img1.png";
import Trade_App_img2 from "../assets/images/TradeApp/Trade_App_img2.png";
import Trade_App_img3 from "../assets/images/TradeApp/Trade_App_img3.png";
import Trade_App_img4 from "../assets/images/TradeApp/Trade_App_img4.png";

// AstraRag
import Astra_Rag_img1 from "../assets/images/AstraRag/Astra_Rag_img1.png";
import Astra_Rag_img2 from "../assets/images/AstraRag/Astra_Rag_img2.png";

// Connectly
import Connectly_img1 from "../assets/images/Connectly/Connectly_img1.png";
import Connectly_img2 from "../assets/images/Connectly/Connectly_img2.png";

// EliteMart
import Elite_Mart_img1 from "../assets/images/EliteMart/Elite_Mart_img1.png";
import Elite_Mart_img2 from "../assets/images/EliteMart/Elite_Mart_img2.png";
import Elite_Mart_img3 from "../assets/images/EliteMart/Elite_Mart_img3.png";

// Java
import java_img from "../assets/images/java_img.png";
export const projects = [


  {
    id: 1,
    featured: true,
    title: "TradeApp",
    subtitle:
      "AI-Powered Trading & Portfolio Management Platform",
    description:
      "TradeApp is a modern MERN application that combines portfolio management, real-time analytics, and AI-powered financial assistance. Users can manage holdings, monitor portfolio performance, execute orders, and interact with an intelligent assistant that delivers personalized responses using Retrieval-Augmented Generation (RAG).",
    images: [
      Trade_App_img1,
      Trade_App_img2,
      Trade_App_img3,
      Trade_App_img4,
    ],
    technologies: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Socket.IO",
      "JWT",
      "Tailwind CSS",
      "Material UI",
      "Chart.js",
      "Groq",
      "Pinecone",
      "ChromaDB",
      "Jest",
      "k6",
      "GitHub Actions",
    ],
    engineeringHighlights: [
      "AI-powered financial assistant using Retrieval-Augmented Generation (RAG)",
      "Portfolio-aware responses combining user holdings with financial knowledge",
      "Real-time dashboard updates using Socket.IO",
      "Secure JWT authentication and protected REST APIs",
      "Interactive analytics dashboard for portfolio insights",
      "Hands-on API testing using Jest",
      "Introductory load testing using k6",
      "Basic CI/CD automation using GitHub Actions",
    ],

    github:
      "https://github.com/V-Vibhuvan/finance_clone",
    live: "https://finance-clone-one.vercel.app/",
    category: "Applied-AI",
  },


  {
    id: 2,
    featured: true,
    title: "AstraRag",
    subtitle:
      "Agentic RAG Platform for Intelligent Document Understanding",
    description:
      "AstraRag is an Agentic AI platform that enables intelligent conversations over uploaded PDF documents. It combines LangGraph agents, Retrieval-Augmented Generation (RAG), MongoDB Atlas Vector Search, and local LLM inference through Ollama to deliver grounded, context-aware responses.",
    images: [
      Astra_Rag_img1,
      Astra_Rag_img2,
    ],
    technologies: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB Atlas",
      "LangChain",
      "LangGraph",
      "Ollama",
      "Cloudinary",
      "Docker",
      "Docker Compose",
      "Hugging Face",
      "Tavily",
    ],
    engineeringHighlights: [
      "Agentic workflow built using LangGraph ReAct Agent",
      "Dynamic tool calling using DynamicStructuredTool",
      "Semantic retrieval with MongoDB Atlas Vector Search",
      "Local LLM inference using Ollama",
      "Cloudinary-based PDF storage",
      "Dockerized multi-service application setup",
    ],

    github:
      "https://github.com/V-Vibhuvan/Astra_RAG",
    live: "",
    category: "Agentic-AI",
  },

  {
    id: 3,
    featured: true,
    title: "Connectly",
    subtitle:
      "Real-Time Video Collaboration Platform",
    description:
      "Connectly is a full-stack real-time video meeting platform that enables users to create and join meetings with secure authentication. It combines WebRTC for peer-to-peer media streaming with Socket.IO for real-time signaling, messaging, and collaborative communication.",
    images: [
      Connectly_img1,
      Connectly_img2,
    ],

    technologies: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Socket.IO",
      "WebRTC",
      "Material UI",
      "Axios",
    ],

    engineeringHighlights: [
      "Peer-to-peer video communication using WebRTC",
      "Real-time messaging and signaling using Socket.IO",
      "Screen sharing support",
      "Meeting history tracking",
      "Secure token-based authentication",
      "Responsive React frontend with Material UI",
    ],
    github:
      "https://github.com/V-Vibhuvan/connectly",
    live: "https://connectly-sandy.vercel.app/",
    category: "Real-Time Systems",
  },

  {
    id: 4,

    featured: true,

    title: "EliteMart",

    subtitle:
      "Full-Stack E-Commerce Platform",

    description:
      "EliteMart is a MERN-inspired e-commerce platform featuring secure authentication, product management, shopping cart functionality, cloud-based image storage, and complete order management. The project focuses on backend architecture, authentication, and scalable CRUD operations.",

    images: [
      Elite_Mart_img1,
      Elite_Mart_img2,
      Elite_Mart_img3,
    ],

    technologies: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "EJS",
      "Bootstrap",
      "Passport.js",
      "Cloudinary",
      "Multer",
      "Express Session",
    ],

    engineeringHighlights: [

      "Session-based authentication using Passport.js",
      "Product management with complete CRUD operations",
      "Shopping cart and checkout workflow",
      "Cloudinary integration for image storage",
      "Category-based product browsing",
      "RESTful backend architecture",

    ],
    github:
      "https://github.com/V-Vibhuvan/elite_mart",
    live: "https://elite-mart-1gi0.onrender.com",

    category: "Full Stack",
  },

  {
    id: 5,

    featured: false,

    title: "Logistics Management System",

    subtitle:
      "Java-Based Logistics Management Application",

    description:
      "A modular Java application developed using JDBC and MySQL to manage logistics operations including customers, drivers, packages, routes, and deliveries. The project follows a layered architecture and integrates a native C++ implementation of Dijkstra's algorithm for route optimization.",

    images: [java_img],

    technologies: [
      "Java",
      "JDBC",
      "MySQL",
      "C++",
      "ProcessBuilder",
      "Java Threads",
    ],

    engineeringHighlights: [

      "Layered software architecture",
      "Repository pattern implementation",
      "JDBC-based database integration",
      "Background worker threads",
      "Route optimization using Dijkstra's algorithm",
      "Object-oriented modular design",

    ],

    github:
      "https://github.com/V-Vibhuvan/Logistics_Management",

    live: "",

    category: "Java",
  },

];