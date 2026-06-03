import React from 'react';

export const handleCardMouseMove = (e: React.MouseEvent<HTMLElement>) => {
  const card = e.currentTarget;
  const rect = card.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;
  
  card.style.setProperty('--mouse-x', `${x}px`);
  card.style.setProperty('--mouse-y', `${y}px`);
  
  const centerX = rect.width / 2;
  const centerY = rect.height / 2;
  const rotateX = -(y - centerY) / (rect.height / 12);
  const rotateY = (x - centerX) / (rect.width / 12);
  
  card.style.setProperty('--rx', `${rotateX}deg`);
  card.style.setProperty('--ry', `${rotateY}deg`);
};

export const handleCardMouseLeave = (e: React.MouseEvent<HTMLElement>) => {
  const card = e.currentTarget;
  card.style.setProperty('--rx', '0deg');
  card.style.setProperty('--ry', '0deg');
};
