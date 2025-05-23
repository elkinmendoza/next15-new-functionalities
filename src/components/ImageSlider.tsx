"use client";
import React from "react";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "@/styles/ImageSlider.scss";
import Image from "next/image";


export const ImageSlider=()=> {
  const settings = {
    dots: true,
  };
  return (
    <section className="w-full h-screen  my-12 m-auto">
      <div className="image-slider-container">
        <Slider {...settings}>
          <div>
            <Image width={'400'} height={'200'} alt="pro" src="https://picsum.photos/400/200" />
          </div>
          <div>
            <Image width={'400'} height={'200'} alt="pro" src="https://picsum.photos/400/200" />
          </div>
          <div>
            <Image width={'400'} height={'200'} alt="pro" src="https://picsum.photos/400/200" />
          </div>
          <div>
            <Image width={'400'}height={'200'} alt="pro" src="https://picsum.photos/400/200" />
          </div>
        </Slider>
      </div>{" "}
    </section>
  );
}
