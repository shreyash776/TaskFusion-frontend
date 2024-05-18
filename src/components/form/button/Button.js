import React from "react";
import { StyledButton } from "./styles";
export default function Button({ title, icon, onClick }) {
  return (
    <StyledButton onClick={onClick}>
      {icon && <img src={icon} alt="" />}
      <span>{title}</span>
    </StyledButton>
  );
}
