import React from "react"
import Carousel from "../Carousel/Carousel"
import margot from "../../assets/margot-maley.png"
import carlos from "../../assets/carlos-guzman.png"
import kimberly from "../../assets/kimberly-son.png"
import cecilia from "../../assets/cecelia-shao.png"

function Testimonies() {
  return (
    <Carousel>
      {[
        {
          testimony:
            " “I just wanted to say how thankful I am to have discovered Scouted. I am SO much happier in my new role and am so thrilled to have found a great new company”",
          avatar: margot,
          avatarName: "Margot Maley",
          avatarTitle: "Associate Marketing Manager",
          avatarCompany: "Amino",
          avatarAlt: "margot-maley",
        },
        {
          testimony:
            "“My favorite thing about Scouted is how much they advocate on your behalf. They are willing to go out of their way to make sure you find jobs where you'll be happy.”",
          avatar: kimberly,
          avatarName: "Kimberly Son",
          avatarTitle: "Product Optimization Associate",
          avatarCompany: "Dow Jones",
          avatarAlt: "kimberly-son",
        },
        {
          testimony:
            "“I feel the video interviews allowed me to showcase aspects of my personality and experience that might not come through other job application methods”",
          avatar: carlos,
          avatarName: "Carlos Guzman",
          avatarTitle: "Strategy Analyst",
          avatarCompany: "cg42",
          avatarAlt: "carlos-guzman",
        },
        {
          testimony:
            "“I am so grateful Scouted exists because it connected me with an amazing internship. Scouted is truly unparalleled in expertise, curiosity, & compassion.”",
          avatar: cecilia,
          avatarName: "Cecilia Shao",
          avatarTitle: "Analyst",
          avatarCompany: "Gemini",
          avatarAlt: "cecilia-shao",
        },
      ]}
    </Carousel>
  )
}

export default Testimonies
