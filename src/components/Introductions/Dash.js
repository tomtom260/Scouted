import React, { useEffect, useState } from "react"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => {
  return {
    dash: {
      borderBottom: "4px dashed #FFFFFF80",
      color: "#FFFFFF80",
      width: words => {
        let max = 0
        words.forEach(word => {
          if (word.length > max) max = word.length
        })
        return `${max * 1.86}rem`
      },
      [theme.breakpoints.up("md")]: {
        width: words => {
          let max = 0
          words.forEach(word => {
            if (word.length > max) max = word.length
          })
          return `${max * 2.7}rem`
        },
      },
      textAlign: "center",
      display: "inline-block",
    },
  }
})

function Dash({ words }) {
  const classes = useStyles(words)
  const [word, setWord] = useState(words[0])
  useEffect(() => {
    const interval = setInterval(() => {
      const index = words.findIndex(el => word === el)
      let nextIndex = index + 1
      if (nextIndex === words.length) nextIndex = 0
      setWord(words[nextIndex])
    }, 3000)
    return () => {
      clearInterval(interval)
    }
  }, [word, words])
  return <span className={classes.dash}>{word}</span>
}

export default Dash
