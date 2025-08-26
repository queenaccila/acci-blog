import Navbar from "../global-components/Navbar"
import './About.css'

function About() {
  return (
    <>
      <Navbar />
      <div className="title-div">
        <h1>About My Blog</h1>
        <div className="section">
          <h2>Making this website</h2>
          <p>
            Growing up with the internet, social media became my main outlet for sharing my work.
            When I posted my art during my teen years, it gave me a place to showcase my work and also track my growth.
            Over the years of posting my art, the habit of posting turned some of these online spaces into unexpected archives.
            Seeing the visible progress of my work over the years became one of my biggest motivators to keep improving.
          </p>
          <p>
            As much as I loved those spaces, I felt I was experiencing the limits of them.
            I used to get so caught up in social media algorithms and engagement metrics when I post that it gets overshadowed by the creative side of my work.
            It started to feel that I had more pressure to do well on the platform rather than create for myself.
          </p>
          <p>
            This is how I got the idea of making my own blog.
            This website is meant to be a personal place I can document progress on my projects, reflect on my ideas, and share them without the chaotic noise from social media spaces.
            Something I've learned is when I share my project progress rather than only just the finished product, I'm more likely to finish them rather than having the idea get stuck in the void.
          </p>
          <p>
            I want this blog to be both a record of growth and an encouragement to continue (and hopefully finish) my projects.
            It's a way for me to take better control of my creative journey, give my ideas a permanent home, and to remind myself that progress is just as valuable as the final product.
          </p>
        </div>
      </div>
    </>
  )
}

export default About