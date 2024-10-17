// 从 'react' 模块中导入 React 和 useState 钩子
import React, { useState } from "react";

// 从当前目录下的 'Navbar' 文件中导入 Navbar 组件
import Navbar from "./components/Navbar/Navbar";

// 从 'react-router-dom' 模块中导入 Route 和 Routes 组件
import { Route, Routes } from "react-router-dom";

// 从当前目录下的 'Home' 文件中导入 Home 组件
import Home from "./pages/Home/Home";

// 从当前目录下的 'Cart' 文件中导入 Cart 组件
import Cart from "./pages/Cart/Cart";

// 从当前目录下的 'PlaceOrder' 文件中导入 PlaceOrder 组件
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder";

// 从当前目录下的 'Footer' 文件中导入 Footer 组件
import Footer from "./components/Footer/Footer";

// 从当前目录下的 'Login' 文件中导入 Login 组件
import Login from "./components/Login/Login";

// 定义 App 组件
const App = () => {
  // 使用 useState 钩子创建一个名为 showLogin 的状态变量，初始值为 false
  const [showLogin, setShowLogin] = useState(false);

  // 返回 JSX，定义了应用的 UI 结构
  return (
    <>
      {showLogin ? <Login setShowLogin={setShowLogin} /> : <></>}
      {/* 如果 showLogin 为 true，则显示 Login 组件，否则显示空元素 */}
      <div className="app">
        <Navbar setShowLogin={setShowLogin} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<PlaceOrder />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

// <Navbar setShowLogin={setShowLogin} />：渲染 Navbar 组件，并将 setShowLogin 函数作为 prop 传递给 Navbar 组件。
{
  /* 
<Route path="/" element={<Home />} />：
定义一个路由，当路径为 "/" 时，渲染 Home 组件。

<Route path="/cart" element={<Cart />} />：
定义一个路由，当路径为 "/cart" 时，渲染 Cart 组件。

<Route path="/order" element={<PlaceOrder />} />：
定义一个路由，当路径为 "/order" 时，渲染 PlaceOrder 组件。 */
}

// 导出 App 组件
export default App;
