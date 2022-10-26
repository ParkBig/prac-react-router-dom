import { Outlet } from "react-router-dom";
import Header from "./components/Header";

function Root() {
  return (
    <div>
      <Header />
      <Outlet context={{darkMode: true}}/>
    </div>
  );
}

export default Root;

// Router 에 명시된 링크에 따라서 그링크로 이동하면 
// <Outlet />이, 링크에 해당하는 컴포넌트로 변신함.
// ex) <Outlet /> => <Home/>, <About />

// Router.js 에서 정의한것은 Root.js가 현재 최상단 부모요소임
// 따라서 이 Root.js 에 칠드런에 들어갈 모든 공통 요소를 적을 수 있음.

// <Outlet />은 결국 차일드 컴포넌트가 들어오는 자리라고 생각하면된다.
// 즉 차일드 컴포넌트를 가지고 있는 컴포넌트라면 다 <Outlet />을 사용가능.