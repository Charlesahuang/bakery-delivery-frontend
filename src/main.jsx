// 从 'react-dom/client' 模块中导入 createRoot 函数
import { createRoot } from "react-dom/client";

// 从当前目录下的 'App.jsx' 文件中导入 App 组件
import App from "./App.jsx";

// 从当前目录下的 'index.css' 文件中导入 CSS 样式
import "./index.css";

// 从 'react-router-dom' 模块中导入 BrowserRouter 组件
import { BrowserRouter } from "react-router-dom";

// 从当前目录下的 'context/StoreContext.jsx' 文件中导入 StoreContextProvider 组件
import { StoreContextProvider } from "./context/StoreContext.jsx";

// 使用 createRoot 函数创建一个根节点，并获取 id 为 "root" 的 DOM 元素
createRoot(document.getElementById("root")).render(
  // 渲染一个 BrowserRouter 组件，它提供路由功能
  <BrowserRouter>
    {/* 使用 StoreContextProvider 组件包裹 App 组件，以便在整个应用中共享状态 */}
    <StoreContextProvider>
      {/* 渲染 App 组件 */}
      <App />
    </StoreContextProvider>
  </BrowserRouter>
);
