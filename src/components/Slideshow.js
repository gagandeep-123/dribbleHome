import React, { useState, useEffect, useRef } from "react";

const slides = [
  {
    image:
      "https://cdn.dribbble.com/uploads/47171/original/daniele-buffa-3.png?1689174763&format=webp&resize=320x399&vertical=center",
    name: "Helen Tran",
    Role: "Digital Designer",
    Tags: ["Brand", "Design"],
    id: 1,
  },
  {
    image:
      "https://cdn.dribbble.com/uploads/47173/original/Vladimir_Gruev.png?1689174896&format=webp&resize=320x399&vertical=center",
    name: "Vlamider Geriev",
    Role: "Lead Product Designer",
    Tags: ["UX", "LEAD"],
    id: 2,
  },
  {
    image:
      "https://cdn.dribbble.com/uploads/47177/original/3986915be548424a5d36657f2b034ead.jpeg?1685645250&format=webp&resize=320x399&vertical=center",
    name: "Chris Owens",
    Role: "Brand Designer",
    Tags: ["Brand", "UI"],
    id: 3,
  },
  {
    image:
      "https://cdn.dribbble.com/uploads/47175/original/1fb34610061a95a007ac5e7b1dc53138.jpeg?1685645183&format=webp&resize=320x399&vertical=center",
    name: "Dan Mall",
    Role: "Principal Designer",
    Tags: ["Product", "UX"],
    id: 4,
  },
  {
    image:
      "https://cdn.dribbble.com/uploads/47172/original/d85ae8c7db2421e9a01ecac942978d4b.png?1685645079&format=webp&resize=320x399&vertical=center",
    name: "Mercedes Bazan",
    Role: "Digital Designer",
    Tags: ["UI", "WEB", "MOBILE"],
    id: 5,
  },
  {
    image:
      "https://cdn.dribbble.com/uploads/47170/original/cd3266dde4f00a5d6a509c7375ddaecd.png?1685644840&format=webp&resize=320x399&vertical=center",
    name: "Jesse Showalter",
    Role: "Illustrator",
    Tags: ["Graphic Design", "ILLUSTRATION"],
    id: 6,
  },
  {
    image:
      "https://cdn.dribbble.com/uploads/47173/original/Vladimir_Gruev.png?1689174896&format=webp&resize=320x399&vertical=center",
    name: "Vlamider Geriev",
    Role: "Lead Product Designer",
    Tags: ["UX", "LEAD"],
    id: 2,
  },
  {
    image:
      "https://cdn.dribbble.com/uploads/47177/original/3986915be548424a5d36657f2b034ead.jpeg?1685645250&format=webp&resize=320x399&vertical=center",
    name: "Chris Owens",
    Role: "Brand Designer",
    Tags: ["Brand", "UI"],
    id: 3,
  },
  {
    image:
      "https://cdn.dribbble.com/uploads/47175/original/1fb34610061a95a007ac5e7b1dc53138.jpeg?1685645183&format=webp&resize=320x399&vertical=center",
    name: "Dan Mall",
    Role: "Principal Designer",
    Tags: ["Product", "UX"],
    id: 4,
  },
  {
    image:
      "https://cdn.dribbble.com/uploads/47172/original/d85ae8c7db2421e9a01ecac942978d4b.png?1685645079&format=webp&resize=320x399&vertical=center",
    name: "Mercedes Bazan",
    Role: "Digital Designer",
    Tags: ["UI", "WEB", "MOBILE"],
    id: 5,
  },
  {
    image:
      "https://cdn.dribbble.com/uploads/47170/original/cd3266dde4f00a5d6a509c7375ddaecd.png?1685644840&format=webp&resize=320x399&vertical=center",
    name: "Jesse Showalter",
    Role: "Illustrator",
    Tags: ["Graphic Design", "ILLUSTRATION"],
    id: 6,
  },
  {
    image:
      "https://cdn.dribbble.com/uploads/47176/original/9b22cd83bde1809976bec0722d1f8923.jpeg?1685645213&format=webp&resize=320x399&vertical=center",
    name: "Victa WIlle",
    Role: "Design Educator",
    Tags: ["MOBILE", "PRODUCT", "UX"],
    id: 7,
  },
  {
    image:
      "https://cdn.dribbble.com/uploads/47174/original/4f02d72fe701b15b2168a4954332427f.png?1685645150&format=webp&resize=320x399&vertical=center",
    name: "Lilla Bardenova",
    Role: "Design Director",
    Tags: ["BRAND", "DESIGN"],
    id: 8,
  },
  {
    image:
      "https://cdn.dribbble.com/uploads/47176/original/9b22cd83bde1809976bec0722d1f8923.jpeg?1685645213&format=webp&resize=320x399&vertical=center",
    name: "Victa WIlle",
    Role: "Design Educator",
    Tags: ["MOBILE", "PRODUCT", "UX"],
    id: 7,
  },
  {
    image:
      "https://cdn.dribbble.com/uploads/47174/original/4f02d72fe701b15b2168a4954332427f.png?1685645150&format=webp&resize=320x399&vertical=center",
    name: "Lilla Bardenova",
    Role: "Design Director",
    Tags: ["BRAND", "DESIGN"],
    id: 8,
  },
];

const SlideShow = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);
  const slidesToShow = 3; // Number of slides to show at once
  const slideInterval = 2000; // Interval for autoplay (in milliseconds)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, slideInterval);

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

    
  useEffect(() => {
    if (carouselRef.current) {
      const offset = (currentIndex * 100) / slidesToShow;
      carouselRef.current.style.transform = `translateX(-${offset}%)`;
    }
  }, [currentIndex]);


  return (
    <div className="relative overflow-hidden py-16">
      <div
        className="carousel-container flex transition-transform duration-500"
        ref={carouselRef}
      >
        {slides.map((slide) => (
          <div key={slide.id} className="flex-shrink-0 w-full sm:w-1/6 px-2">
            <div className="rounded-lg text-center">
              <img
                src={slide.image}
                className="rounded-3xl h-80 relative"
              ></img>
              <div className="absolute ml-3.5 bottom-3.5 text-sm text-white font-bold text-left">
                <div>{slide.name}</div>
                <div>{slide.Role}</div>
                <div className="flex">
                  {slide.Tags.map((ele) => {
                    return (
                      <div className="flex border text-xs border-gray-400 border-solid text-white font-bold px-3 mr-1 mt-1 py-2 items-center rounded-full">
                        {ele}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SlideShow;
