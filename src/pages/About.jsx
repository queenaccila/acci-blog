import PixelHeader from "../assets/pixel-heart-header.gif"
import Dropdown from "../global-components/DropdownText"
import './About.css'

function About() {
  const DropdownText = [
    { question: "What if I want to ask you something?", answer: <>Anything! Use this link to <a href="/inbox">my inbox</a> to ask me anything!</> },
    { question: "What did you use to make this blog?", answer: "I used React as my main framework. To deploy the website I use Cloudflare. In terms of posting videos on here (since I don't post on YouTube), I use Bunny Stream to store and show my videos." }
  ];

  return (
    <>
      <div className="title-div">
        <h1>About My Blog</h1>
        <div className="section">
          <img src={PixelHeader} className="header-img" loading="lazy"/>

          <h2>About Me</h2>
          <p>
            Acci is my online name!
            I use it instead of my real name for the sake of avoiding using any personal info when it's not needed.
            My formal background is in computer science, as I've always had an interest in coding when I was a kid.
            My exposure to the internet and video games made me have an interest in creating things, and I wanted to learn some of the skills to do them!
            I started drawing when I was in high school, and slowly started to learn 3D modeling later during my time at university.
          </p>

          <img src={PixelHeader} className="header-img" loading="lazy"/>

          <h2>Making this website</h2>
          <p>
            Growing up with the internet, social media became my main outlet for sharing my work.
            When I posted my art during my teen years, it gave me a place to showcase my work and also track my growth.
            Over the years of posting my art, the habit of posting turned some of these online spaces into unexpected archives.
            Seeing the visible progress of my work over the years became one of my biggest motivators to keep improving.
          </p>
          <p>
            As much as I loved those spaces, I felt I was experiencing the limits of them.
            I used to get so caught up in social media algorithms and engagement when I post that it overshadowed the creative side of my work.
            It started to feel that I had more pressure to do well on the platform rather than create for myself.
            Not only this, but I feel that I had no finer control over what I can post. 
          </p>
          <p>
            This is how I got the idea of making my own blog.
            This website is meant to be a personal place I can document progress on my projects, reflect on my ideas, and share them without the chaotic noise from social media spaces.
            Something I've learned is when I share my project progress rather than only just the finished product, I'm more likely to finish them rather than having the idea get stuck in the void.
            I always like the journey of making something, which makes the final product much more meaningful to me.
          </p>
          <p>
            I want this blog to be both a record of growth and an encouragement to continue (and hopefully finish) my projects.
            It's a way for me to take better control of my creative journey, give my ideas a permanent home, and to remind myself that progress is just as valuable as the final product.
          </p>

          <img src={PixelHeader} className="header-img" loading="lazy"/>

          <h2>My background and interests</h2>
          <p>
            I’ve always loved creating things, even as a kid.
            For me, creativity was split between two paths: computers and art.
            For a long time I thought I’d have to choose between the two, but over the years I found my niche in combining them for my own projects.
          </p>
          <p>
            In my early teens, I started learning how to make digital art and slowly developed a style that I’ve grown comfortable with.
            Art became a way for me to express ideas visually as well as sharing them to others, and it shaped much of my creative identity.
            Later, during my early adult years, I studied computer science and eventually earned my bachelor’s degree.
            That gave me the technical foundation to bring my ideas to life through programming and problem-solving.
          </p>
          <p>
            Video game development and digital art are where my interests naturally overlap—I get to use both my technical skills and my artistic side in the same space.
            More recently, I’ve been diving back into web development, which lets me experiment with projects that are not just functional, but also playful and visually appealing.
            I especially love making “cutesy tech,” where design and aesthetics play just as big a role as code.
          </p>
          <img src={PixelHeader} className="header-img" loading="lazy"/>

          <h2>FAQs About This Website</h2>
          <Dropdown faqs={DropdownText}/>
        </div>
      </div>
    </>
  )
}

export default About