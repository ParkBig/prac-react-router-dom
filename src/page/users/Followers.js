import { useOutletContext } from "react-router-dom"

function Followers() {
  const { nameOfMyUser } = useOutletContext();
  return <h1>Here are {nameOfMyUser}'s followers</h1>;
}
export default Followers;
