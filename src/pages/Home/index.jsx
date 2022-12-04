import { GithubLogo, InstagramLogo, LinkedinLogo, TwitchLogo, TwitterLogo } from "phosphor-react";
import Links from "../../components/Links";
import "./styles.css";

function App() {
  return (
    <div className="container">
      <div className="user">
        <img src="src\assets\user-photo.jpg" alt="" />
        <a href="https://www.instagram.com/aliceee.santos_/">@aliceee.santos_</a>
      </div>

      <div className="links">
        <Links url="https://github.com/joaovictor09" name="Link 1"/>
        <Links url="https://github.com/joaovictor09" name="Link 2"/>
        <Links url="https://github.com/joaovictor09" name="Link 3"/>
        <Links url="https://github.com/joaovictor09" name="Link 4"/>
      </div>

      <div className="social-medias">
        <a href="">
          <TwitterLogo size={24} weight="bold" />
        </a>
        <a href="">
          <TwitchLogo size={24} weight="bold" />
        </a>
        <a href="">
          <InstagramLogo size={24} weight="bold" />
        </a>
        <a href="">
          <LinkedinLogo size={24} weight="bold" />
        </a>
        <a href="">
          <GithubLogo size={24} weight="bold" />
        </a>

      </div>
    </div>
  )
}

export default App
