import React from "react"
import CardStyles from "../styles/modules/card.module.scss"

const Card = ({ children, title }) => {
  return (
    <div className={CardStyles.card}>
      <h3 className={CardStyles.cardTitle}>{title}</h3>
      <div>{children}</div>
    </div>
  )
}

export default Card
