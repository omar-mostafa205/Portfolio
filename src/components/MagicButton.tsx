/* eslint-disable @typescript-eslint/no-unsafe-assignment */
"use client"
import React from 'react';
import styled from 'styled-components';

const Button = () => {
  return (
    <StyledWrapper>
      <button>Button</button>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  button {
    color: #111111;
    padding: 0.7em 1.7em;
    font-size: 18px;
    border-radius: 0.5em;
    background: #00031a;
    cursor: pointer;
    border: 1px solid #00031a;
    transition: all 0.3s;
    box-shadow: 6px 6px 12px #00031a, -6px -6px 12px #00031a;
  }

  button:hover {
    border: 1px solid white;
  }

  button:active {
    box-shadow: 4px 4px 12px #00031a, -4px -4px 12px #00031a;
  }`;

export default Button;
