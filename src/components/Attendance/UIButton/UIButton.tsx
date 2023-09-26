import React from "react";
import "./UIButton.scss";

export interface UIButtonProps {
  label: string;
}

const UIButton = (props: UIButtonProps) => {
  return (
    <button className="button__wrapper">{props.label}</button>
  );
};

export default UIButton;
