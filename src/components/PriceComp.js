import React from 'react';

export default function PriceComp({ price }) {
  return <span>{Math.round(price)} $</span>;
}
