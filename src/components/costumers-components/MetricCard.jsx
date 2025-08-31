import React from 'react';

const MetricCard = ({
  title,
  value,
  icon,
  color = 'blue'
}) => {
  // Mapeo de colores
  const colorMap = {
    blue: {
      bg: 'bg-blue-100',
      color: 'text-blue-700',
    },
    purple: {
      bg: 'bg-purple-100',
      color: 'text-purple-700',
    },
    green: {
      bg: 'bg-green-100',
      color: 'text-green-700',
    },
  };

  const selectedColor = colorMap[color] || colorMap.blue;

  return (
    <div className={`flex gap-4 py-4 px-2 rounded-lg ${selectedColor.bg} w-xl`}>
      <h1 className={`text-4xl font-bold ${selectedColor.color} flex items-center`}>
        {icon}
      </h1>
      <div className='flex flex-col gap-0.5'>
        <p className='text-lg text-gray-500 '>{title}</p>
        <h2 className={`text-2xl font-bold ${selectedColor.color}`}>{value}</h2>
      </div>
    </div>
  );
};

export default MetricCard;