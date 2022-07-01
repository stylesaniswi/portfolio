import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio.png'
import IMG2 from '../../assets/firechat.png'
import IMG3 from '../../assets/Tutofy.png'
import IMG4 from '../../assets/yojupr.png'
import IMG5 from '../../assets/styleography.png'

const Portfolio = () => {

  const data =[
    {
      id:1,
      image: IMG1,
      title: " My Portfolio",
      desc:"This is my portfolio Website to show my skills and work",
      live:"https://anishshresthaportfolio.netlify.app/",
      code:"https://github.com/stylesaniswi/portfolio"

    },
    {
      id:2,
      image: IMG2,
      title: " Fire Chat",
      desc:"This is Group Chat Webapp to chat with people with same interest",
      live:"https://alfaseirrafirechat.netlify.app/",
      code:"https://github.com/stylesaniswi/react-project-new/tree/main/firechat"

    },
    {
      id:3,
      image: IMG3,
      title: " Tutofy",
      desc:"One stop solution for technical based online courses with ratings and reviews",
      code:"https://github.com/stylesaniswi/Tutofy"

    },
    {
      id:4,
      image: IMG4,
      title: " Yoju Pr",
      desc:"An individual web portfolio where an individual is hired for modeling under given packages",
      live:"https://yojushrestha.com.np/"

    },
    {
      id:5,
      image: IMG5,
      title: " Styleography",
      desc:"A Website for a Photographer to showcase their work and provide services and packages",
      live:"https://shrestha-anish.com.np/"

    }
  ]
  return (
    <section id="portfolio">
      <h5> My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {
          data.map(({id,image,title,desc,live,code})=>{
            return(
              <article key={id}  className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={image} alt="" />
          </div>
          <h3>{title}</h3>
          <p>{desc}</p>
          <div className="portfolio__item-cta">
          {id !== 4 && id !== 5 ? <a href={code} className="btn">Github</a>: ""}
          {id !== 3 && id !== 4 ?<a href={live} className="btn btn-primary" target="_blank">Live Demo</a> :""}
          </div>
        </article>
            )
          })
        }
              
      </div>
    
    </section>
  )
}

export default Portfolio