import "./Header.css";
import profilePic from "./FinnJake.webp";

export default function Header() {
  return (
    <div className="header">
      Header
      <div class className="imgDiv">
        <img className="profileImg" src={profilePic} alt="profile" />
      </div>
    </div>
  );
}
