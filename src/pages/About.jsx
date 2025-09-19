import Dropdown from "../global-components/DropdownText"
import { assets } from "../global-components/Assets";
import AboutPage from './About.mdx'
import './About.css'

function About() {
  const DropdownText = [
    { question: "What did you use to make this blog?", answer: "I used React as my main web framework, and use Vite as my main tool to build and run React. To deploy the website I use Cloudflare's services, and I've bought the domain from Cloudflare as well. In terms of posting videos on here, I use Bunny Stream to store and show my videos to avoid ads and have more control over them. I might also embed videos from my Newgrounds account." },
    { question: "Can I ask or send you something unrelated to a post?", answer: <>Yes! Please use this link to <a href="/inbox">my inbox</a> to ask me anything!</> },
    { question: "I want to comment on your post, but I don't have GitHub or Discord. Are there other ways to make a comment?", answer: <>Right now I am using social sites that have native account authentication with Supabase. I'm working on adding more integrations so it's more accessible for people to comment, but feel free to still send something to <a href="/inbox">my inbox</a>!</> }
  ];

  return (
    <>
      <div className="title-div">
        <h1>About My Blog</h1>
        <img src={assets.aboutMe} className="about-me-image" />

        <div className="section">
          <AboutPage />

          <img src={assets.divider} className="header-img" loading="lazy"/>

          <h2>FAQs About This Website</h2>
          <Dropdown faqs={DropdownText}/>
        </div>
      </div>
    </>
  )
}

export default About