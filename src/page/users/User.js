import { Link, Outlet, useParams } from "react-router-dom";
import { users } from "../../db";

function User() {
  const { userId } = useParams();
  return (
    <div>
      <h1>
        User with id {userId} is named: {users[Number(userId) - 1].name}
      </h1>
      <hr />
      <Link to="followers">See followers</Link>
      <Outlet context={{
        nameOfMyUser: users[Number(userId) - 1].name,
      }}/>
    </div>
  );
}
export default User;

// Link to 에서 경로를 /followers로 하면 홈페이지/followers가 된다.
// 따라서 상대경로를 위해 /를 빼고 followers라고 해야 
// 주소를 이어붙일 수 있다.

// Outlet 의 context는 드릴링을 하지 않으면 바로 아래자식까지만 유효하다.
