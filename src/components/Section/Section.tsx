import React from 'react';
import SSection from './Section.styled';

export default function Section({ color, children }) {
  return <SSection color={color}>{children}</SSection>;
}
