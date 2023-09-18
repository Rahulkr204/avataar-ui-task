import React, { useEffect, useState } from "react";
import "../styles/carousel.scss";

const images = [
    "https://randompicturegenerator.com/img/car-generator/g0c361fd7ccae6fd6e89c839593d0e3434986f27974ad3358d5bbdea426e1910b0f0264c13dc99e27bbcbc54941948b4b_640.jpg",
    "https://randompicturegenerator.com/img/car-generator/gadee3b8fd1f9cf48a5c9efd9e6ff43966d761d93262b30d2a45b515c89bf7d8660f8b41b560f3bd0c4f2e52bcca1a3f3_640.jpg",
    "https://randompicturegenerator.com/img/car-generator/g9bb86129888f745636e5fbecad664a4876b527558d4ce0f9597fe74f9c5bcadff217f28765325333a0101074ec31d64f_640.jpg",
    "https://randompicturegenerator.com/img/car-generator/g3f3c8f4af303d1723f5d5e2f3050e53373d2708f67a2db6ae4e920d6e88c8242790303c2abea53e744b1b690e79613e5_640.jpg",
    "https://randompicturegenerator.com/img/car-generator/g91d447ecfe72f9eec67075695beb60be3f06e9f341d675a76e847a2fd150139425d7ca3a1de19130389065a4706df7a5_640.jpg",
];

const midIndex = Math.floor(images.length / 2);

const Carousel = () => {
    const [carouselImageList, setCarouselList] = useState([]);
    const nextSlide = () => {
        arrayRotate();
    };

    const prevSlide = () => {
        arrayRotate(true);
    };

    function arrayRotate(reverse) {
        if (reverse) carouselImageList.unshift(carouselImageList.pop());
        else carouselImageList.push(carouselImageList.shift());
        const newList = carouselImageList.map((item, index) => {
            if (index === midIndex) {
                item["active"] = true;
            } else {
                item["active"] = false;
            }
            return item;
        });
        setCarouselList(newList);
    }

    useEffect(() => {
        const items = Array.from({ length: 5 }, (_, index) => ({
            id: index,
            image: images[index],
            title: `Item ${index + 1}`,
            active: index === midIndex ? true : false,
        }));
        setCarouselList(items);
    }, []);

    return (
        <div className="carousel">
            <div className="carousel-content">
                {carouselImageList.map((item) => (
                    <div
                        key={item.id}
                        className={`carousel-item ${
                            item.active ? "active" : ""
                        }`}
                    >
                        <img src={item.image} alt={item.title} />
                        <div className="carousel-item-title">{item.title}</div>
                    </div>
                ))}
            </div>
            <div className="carousel-controls">
                <button className="prev" onClick={prevSlide}>
                    &#9664;
                </button>
                {carouselImageList.map((item, index) => {
                    return (
                        <div
                            className={`navigation-dot ${
                                item.active ? "active" : ""
                            }`}
                            key={index}
                        ></div>
                    );
                })}
                <button className="next" onClick={nextSlide}>
                    &#9654;
                </button>
            </div>
        </div>
    );
};

export default Carousel;
