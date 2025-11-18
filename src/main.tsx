import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { globalStore, persistStatio } from "statio-lib";
import "./index.css";
import App from "./App.tsx";

// Statio 설정: localStorage 자동 동기화
const keyPrefix = "statio:";
const whitelist = ['authToken', 'authUser'];

// localStorage에서 초기값 복원
whitelist.forEach((key) => {
  const stored = localStorage.getItem(`${keyPrefix}${key}`);
  if (stored) {
    try {
      globalStore.set(key, JSON.parse(stored));
    } catch (e) {
      console.warn(`Failed to restore ${key} from localStorage`, e);
    }
  }
});

// persistStatio 미들웨어 등록 (이후 변경사항 자동 저장)
globalStore.use(persistStatio({
  keyPrefix,
  storage: localStorage,
  whitelist
}));

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
