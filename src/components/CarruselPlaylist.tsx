import { useState, useEffect, useCallback } from "react";
interface Props {
  oscuro: boolean;
}
export const CarruselPlaylist = ({ oscuro }: Props) => {
  // Estado para llevar el control de la diapositiva actual
  const [currentIndex, setCurrentIndex] = useState(0);

  // Lista de imágenes que se mostrarán en el carrusel
  const images = [
    {
      src: "https://4kwallpapers.com/images/wallpapers/lofi-japanese-3840x2160-14884.jpg",
      name: 'Lofi Japan',
      playlistUrl: "https://open.spotify.com/playlist/5YKm5Zt0AUdKrlrvWzUV6l?si=69d0b98ad5ec4ab5",
    },
    {
      src: "https://images.unsplash.com/photo-1497989462347-f3fdb55caa59?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NHwxMzc2Mjd8fGVufDB8fHx8fA%3D%3D",
      name: 'Ambient Relaxation',
      playlistUrl: "https://open.spotify.com/playlist/5q4mxhDt3n9xG4t7d0oM3Y?si=175525828da7440f",
    },
    {
      src: "https://images5.alphacoders.com/798/thumb-1920-798722.png",
      name: 'Undertale & Sleep-Piano Music For Relaxation',
      playlistUrl: "https://open.spotify.com/playlist/6n6JnvohJmpiC3F2YQwU6o?si=f05cec125f3c45ff",
    },
    {
      src: "https://images6.alphacoders.com/136/thumb-1920-1361761.jpeg",
      name: 'Chill Vibes',
      playlistUrl: "https://open.spotify.com/playlist/4IobLZ6VHv6bi9g36zYHJ8?si=612d680e1d774e1d",
    },
    {
      src: "https://m.gettywallpapers.com/wp-content/uploads/2023/11/Anime-Boy-Studying-4k-Wallpaper-For-PC-scaled.jpg",
      name: 'Lofi Hip Hop radio to relax/study/sleep ',
      playlistUrl: "https://open.spotify.com/playlist/21KXYY1S0ZALYl0q3uDlUU?si=7f5c05be328c44dd",
    },
    {
      src: "https://a-static.besthdwallpaper.com/chill-shiba-sleeping-christmas-room-wallpaper-2880x1800-88233_8.jpg",
      name: 'Dreamy Lofi',
      playlistUrl: "https://open.spotify.com/playlist/31BkGDoJAO042TGUN3prMu?si=29fe9121bbb14cd4",
    },
    // ...agrega más objetos según necesites
  ];

  // Funciones para manejar la transición entre imágenes
  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  }, [images.length]);

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  // Efecto para cambiar la imagen automáticamente cada 5 segundos

  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlide();
    }, 3000); // Cambia cada 3 segundos

    // Limpiar el intervalo cuando el componente se desmonte o cambie
    return () => clearInterval(intervalId);
  }, [nextSlide]); // Solo se ejecuta una vez al montar el componente

  return (

    <div id="default-carousel" className="relative w-full">
      {/* Carousel wrapper */}
      <div className="relative h-80 overflow-hidden rounded-lg md:h-[32rem]">
        {/* Renderizar cada imagen y solo mostrar la que corresponde al índice actual */}
        {images.map((item, index) => (
          <div
            key={index}
            className={`
      absolute inset-0
      transition-opacity duration-500 ease-in-out
      ${index === currentIndex ? "opacity-100 z-20" : "opacity-0 z-10 pointer-events-none"}
    `}
          >
            <img
              src={item.src}
              className="absolute w-full h-full object-cover top-0 left-0"
              alt={`carousel item ${index + 1}`}
            />
            {index === currentIndex && (
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-40 flex flex-col items-center justify-center">
                <p className="mb-2 px-2 py-1 bg-black/5 text-white rounded">{item.name}</p>
                <a
                  href={item.playlistUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-white px-4 py-2 rounded shadow transition ${oscuro ? 'bg-cyan-400 hover:bg-cyan-500' : 'bg-teal-400 hover:bg-teal-500'}`}
                >
                  Escuchar Ahora
                </a>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Slider indicators */}
      <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
        {images.map((_, index) => (
          <button
            key={index}
            type="button"
            className={`w-3 h-3 rounded-full ${currentIndex === index ? "bg-blue-500" : "bg-gray-300"
              }`}
            aria-current={currentIndex === index ? "true" : "false"}
            aria-label={`Slide ${index + 1}`}
            onClick={() => goToSlide(index)}
          ></button>
        ))}
      </div>

      {/* Slider controls */}
      <button
        type="button"
        className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        onClick={prevSlide}
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full  bg-gray-800/30  group-hover:bg-gray-800/60 group-focus:ring-4  group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg
            className="w-4 h-4  text-white rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 1 1 5l4 4"
            />
          </svg>
          <span className="sr-only">Previous</span>
        </span>
      </button>
      <button
        type="button"
        className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        onClick={nextSlide}
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full  bg-gray-800/30  group-hover:bg-gray-800/60 group-focus:ring-4  group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg
            className="w-4 h-4  text-white rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 9 4-4-4-4"
            />
          </svg>
          <span className="sr-only">Next</span>
        </span>
      </button>
    </div>
  );
};

