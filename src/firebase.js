import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";

export const firebaseConfig = {
  apiKey: "AIzaSyC8GLRzrJ6pAaBHCTn-N1joXLRalixlavQ",
  authDomain: "zuc1fer.firebaseapp.com",
  projectId: "zuc1fer",
  storageBucket: "zuc1fer.firebasestorage.app",
  messagingSenderId: "792357682295",
  appId: "1:792357682295:web:e0a14aba0ba8e078b2da72",
  measurementId: "G-RK2B5G8SX1"
};

export const app = initializeApp(firebaseConfig);

export const analyticsPromise = isSupported()
  .then((supported) => (supported ? getAnalytics(app) : null))
  .catch(() => null);
