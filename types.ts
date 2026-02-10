
import React from 'react';

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface Review {
  id: string;
  name: string;
  rating: number;
  text: string;
  date: string;
}

export interface GalleryItem {
  id: string;
  url: string;
  category: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}