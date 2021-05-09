import React, { useState } from "react"
import Hero from "./Hero"
import Assesment from "./Assesment"
import Platform from "./Platform"
import Message from "./Message"
import Testimonies from "./Testimonies"
import Introductions from "../Introductions/Introductions"
import Resume from "./Resume"
import { Box } from "@material-ui/core"

function Home() {
  const [bgColor, setBgColor] = useState()
  return (
    <Box style={{ backgroundColor: bgColor }} p={0} m={0}>
      <Message />
      <Hero />
      <Assesment setBgColor={setBgColor} />
      <Platform setBgColor={setBgColor} />
      <Resume setBgColor={setBgColor} />
      <Testimonies setBgColor={setBgColor} />
      <Introductions setBgColor={setBgColor} />
    </Box>
  )
}

export default Home
