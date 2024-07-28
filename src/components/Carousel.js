import React, { useState, useEffect, useRef } from "react";

const slides = [
  {
    image:
      "https://cdn.dribbble.com/userupload/15697820/file/original-677cf6df4cbd1e1bea060f3c636a4f9f.jpg?resize=400x300&vertical=center",
    imageTxt: "Crypto.Swap wallet design",
    title: "Emote",
    tag: "TEAM",
    likes: 94,
    views: "8.1K",
  },
  {
    image:
      "https://cdn.dribbble.com/userupload/15791963/file/original-1633bdd6b09f0b36b06dd94383945229.jpg?resize=450x338&vertical=center",
    imageTxt: "View UI/UX Design for Wallet page  of Crypto Vaults Dashboard",
    title: "Extej UI UX Design Agency",
    tag: "PRO",
    likes: 128,
    views: "4.5K",
  },
  {
    image:
      "https://cdn.dribbble.com/userupload/15790609/file/original-bc7c9845209eed4a39334888c667e288.png?resize=450x338&vertical=center",
    imageTxt: "Nagual",
    title: "Raccoon Bandit Logo",
    tag: "",
    likes: 30,
    views: "4.1K",
  },
  {
    image:
      "https://cdn.dribbble.com/userupload/15708579/file/original-7345bb183739f821afadd5abb90c1fcd.png?resize=450x338&vertical=center",
    imageTxt: "Hair Salon Website",
    title: "Ronas IT | UI/UX Team",
    tag: "TEAM",
    likes: 124,
    views: "12.7K",
  },
  {
    image:
      "https://cdn.dribbble.com/userupload/15790791/file/original-23355c0d500049cd13aea063f537c957.jpg?resize=450x338&vertical=center",
    imageTxt: "View Unused Lion Logo",
    title: "Milad Design Co.",
    tag: "TEAM",
    likes: 29,
    views: "2.8K",
  },
  {
    image:
      "https://cdn.dribbble.com/userupload/15785979/file/original-b9659c1a6be02f6f08c798573e12621d.png?resize=450x338&vertical=center",
    imageTxt: "Logo Design Collection by Bertalan Gombos",
    title: "Bertalan Gombos",
    tag: "PRO",
    likes: 28,
    views: "3.5K",
  },
  {
    image:
      "https://cdn.dribbble.com/userupload/15789883/file/original-8cb61aac38d5478a42ba09dbf89c6fff.jpg?resize=450x338&vertical=center",
    imageTxt: "b infinity, crypto, brand identity, logo design",
    title: "Touhid | Logo Designer",
    tag: "PRO",
    likes: 60,
    views: "5.1K",
  },
  {
    image:
      "https://cdn.dribbble.com/userupload/15793994/file/original-4033397e5e14e62a7010ab968799a82c.png?resize=450x338&vertical=center",
    imageTxt: "B2B Retail Pitch Deck Presentation",
    title: "HALO LAB",
    tag: "TEAM",
    likes: 41,
    views: "2.5K",
  },
  {
    image:
      "https://cdn.dribbble.com/userupload/15785645/file/original-ae65c6da17981fe0d23a59226b7a7a32.png?resize=450x338&vertical=center",
    imageTxt: "Logo Design Collection by Bertalan Gombos",
    title: "Happy Birthday Dribbble!",
    tag: "PRO",
    likes: 80,
    views: "15.4K",
  },
  {
    image:
      "https://cdn.dribbble.com/userupload/15787046/file/original-10a69e6fd671c91ffb408f8ca6b39698.jpg?resize=450x338&vertical=center",
    imageTxt: "Breakfast friends",
    title: "Sticker Mule",
    tag: "TEAM",
    likes: 90,
    views: "10.3K",
  },
  {
    image:
      "https://cdn.dribbble.com/userupload/15789906/file/original-ba74cdf75551de5813646bf6942c8385.png?crop=0x0-2000x1500&resize=450x338&vertical=center",
    imageTxt: "Boost the volume to make it louder. iOS mobile app icon.",
    title: "White Label",
    tag: "TEAM",
    likes: 31,
    views: "2.1K",
  },
  {
    image:
      "https://cdn.dribbble.com/userupload/15789753/file/original-8b1fc0ddff3e65532100a5a1187e64d0.jpg?resize=450x338&vertical=center",
    imageTxt: "Route Logo Design",
    title: "Graytive",
    tag: "TEAM",
    likes: 34,
    views: "2.5K",
  },
  {
    image:
      "https://cdn.dribbble.com/userupload/15793586/file/original-299d4b757ae735f68758dbe11c96641c.jpg?resize=450x338&vertical=center",
    imageTxt: "shh",
    title: "Razvan Vezeteu",
    tag: "PRO",
    likes: 12,
    views: "1.1K",
  },
  {
    image:
      "https://cdn.dribbble.com/userupload/15794247/file/original-e7c1ad5602dc3148485ec02963b98645.png?resize=450x338&vertical=center",
    imageTxt: "Dribble ` Dstudio",
    title: "Dstudio Tech",
    tag: "TEAM",
    likes: 90,
    views: "10.3K",
  },
  {
    image:
      "https://cdn.dribbble.com/userupload/15645965/file/original-31a921cc6ab15116024b275a31b99421.jpg?crop=146x118-4785x3597&resize=450x338&vertical=center",
    imageTxt: "CAKE Mobile App - Bike Management SaaS",
    title: "RonDesignLab",
    tag: "TEAM",
    likes: 54,
    views: "2.1K",
  },
  {
    image:
      "https://cdn.dribbble.com/userupload/15769721/file/original-fc26b62332478070389a36ad4962a071.jpg?resize=450x338&vertical=center",
    imageTxt: "AKQA Management",
    title: "Ray Dak Lam",
    tag: "TEAM",
    likes: 54,
    views: "2.1K",
  },
  {
    image:
      "https://cdn.dribbble.com/userupload/15789883/file/original-8cb61aac38d5478a42ba09dbf89c6fff.jpg?resize=450x338&vertical=center",
    imageTxt: "b infinity, crypto, brand identity, logo design",
    title: "Touhid | Logo Designer",
    tag: "PRO",
    likes: 60,
    views: "5.1K",
  },
  {
    image:
      "https://cdn.dribbble.com/userupload/15793994/file/original-4033397e5e14e62a7010ab968799a82c.png?resize=450x338&vertical=center",
    imageTxt: "B2B Retail Pitch Deck Presentation",
    title: "HALO LAB",
    tag: "TEAM",
    likes: 41,
    views: "2.5K",
  },
  {
    image:
      "https://cdn.dribbble.com/userupload/15785645/file/original-ae65c6da17981fe0d23a59226b7a7a32.png?resize=450x338&vertical=center",
    imageTxt: "Logo Design Collection by Bertalan Gombos",
    title: "Happy Birthday Dribbble!",
    tag: "PRO",
    likes: 80,
    views: "15.4K",
  },
  {
    image:
      "https://cdn.dribbble.com/userupload/15787046/file/original-10a69e6fd671c91ffb408f8ca6b39698.jpg?resize=450x338&vertical=center",
    imageTxt: "Breakfast friends",
    title: "Sticker Mule",
    tag: "TEAM",
    likes: 90,
    views: "10.3K",
  },
  {
    image:
      "https://cdn.dribbble.com/userupload/15789906/file/original-ba74cdf75551de5813646bf6942c8385.png?crop=0x0-2000x1500&resize=450x338&vertical=center",
    imageTxt: "Boost the volume to make it louder. iOS mobile app icon.",
    title: "White Label",
    tag: "TEAM",
    likes: 31,
    views: "2.1K",
  },
];

const Carousel = () => {
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
          <div className="flex-shrink-0 w-full sm:w-1/6 px-2">
            <div className="rounded-lg text-center">
              <img
                src={slide.image}
                className="rounded-3xl h-40 relative w-11/12"
              ></img>
              <div className="mt-2 text-sm text-slate-500 text-left text-bold">
                {slide.title}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
