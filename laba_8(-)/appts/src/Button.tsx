import React, { Component } from 'react';
import './Button.css';

interface ButtonProps {
  onClickFunction: () => void;
  nameButton: string;
  disabled?: boolean;
}

class Button extends Component<ButtonProps> {
  render(): JSX.Element {
    const { onClickFunction, disabled, nameButton } = this.props;
    return (
      <button className="Button" onClick={onClickFunction} disabled={disabled}>
        {nameButton}
      </button>
    );
  }
}

export default Button;