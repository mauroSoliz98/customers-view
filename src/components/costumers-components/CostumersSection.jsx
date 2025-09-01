import { useState, useEffect, useRef } from 'react';

export const CostumersSection = ({ img_path, title }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const intervalRef = useRef(null);
  
  // Duplicamos las imágenes para crear el efecto infinito
  const duplicatedImages = [...img_path, ...img_path];
  
  // Función para ir al siguiente slide
  const nextSlide = () => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    setCurrentIndex(prevIndex => prevIndex + 1);
  };
  
  // Función para ir al slide anterior
  const prevSlide = () => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    setCurrentIndex(prevIndex => prevIndex - 1);
  };
  
  // Auto-play del carrusel
  useEffect(() => {
    intervalRef.current = setInterval(nextSlide, 3000); // Cambia cada 3 segundos
    
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);
  
  // Manejo del bucle infinito
  useEffect(() => {
    if (currentIndex >= img_path.length) {
      // Cuando llegamos al final, reseteamos sin animación
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(0);
      }, 500); // Duración de la transición CSS
    } else if (currentIndex < 0) {
      // Cuando vamos hacia atrás del inicio
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(img_path.length - 1);
      }, 500);
    } else {
      // Transición normal
      setTimeout(() => {
        setIsTransitioning(false);
      }, 500);
    }
  }, [currentIndex, img_path.length]);
  
  // Pausar auto-play cuando el mouse está sobre el carrusel
  const handleMouseEnter = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };
  
  const handleMouseLeave = () => {
    intervalRef.current = setInterval(nextSlide, 3000);
  };

  return (
    <div className="mt-8">
      <h1 className="text-3xl font-medium text-center">{title}</h1>
      
      <div 
        className="relative mt-8 overflow-hidden"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* Contenedor del carrusel */}
        <div className="relative w-full">
          <div 
            className={`flex transition-transform duration-500 ease-in-out ${
              isTransitioning ? '' : 'transition-none'
            }`}
            style={{
              transform: `translateX(-${currentIndex * (100 / 3)}%)`, // Muestra 3 cards a la vez
              width: `${duplicatedImages.length * (100 / 3)}%`
            }}
          >
            {duplicatedImages.map((image, index) => (
              <div 
                key={index} 
                className="flex flex-col items-center px-2"
                style={{ minWidth: `${100 / 3}%` }} // Cada card ocupa 1/4 del ancho
              >
                <img 
                  src={image.img} 
                  alt={`Customer ${(index % img_path.length) + 1}`} 
                  className="w-48 h-24 object-contain"
                />
                <p className="text-gray-600 text-sm mt-2 text-center">
                  {image.description}
                </p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Botones de navegación */}
        <button
          onClick={prevSlide}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 rounded-full p-2 shadow-lg transition-all duration-200 hover:scale-110"
          disabled={isTransitioning}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        <button
          onClick={nextSlide}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 rounded-full p-2 shadow-lg transition-all duration-200 hover:scale-110"
          disabled={isTransitioning}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
        
        {/* Indicadores de posición */}
        <div className="flex justify-center mt-4 gap-2">
          {img_path.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                if (!isTransitioning) {
                  setIsTransitioning(true);
                  setCurrentIndex(index);
                }
              }}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                index === (currentIndex % img_path.length)
                  ? 'bg-purple-600 scale-110'
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};