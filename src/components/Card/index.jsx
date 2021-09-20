import React from "react";
import { StyledCard } from "./styles";

const Card = props => (
    <StyledCard href={props.link} target="_blank" rel="noreferrer">
        <img src={props.imagem} alt="Imagem do card"/>
        <h3>{props.texto}</h3>
    </StyledCard>
)

export default Card;
