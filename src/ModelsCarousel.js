import React, { Component, useContext } from "react";
import { useState, useEffect } from 'react';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import Card from './Card';
import './carousel.css'
import Context from "./Context";


function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height
    };
  }

function ModelsCarousel({active, setActive}) {
    
    console.log(getWindowDimensions()['width'])
    const settings = {
        dots: true,
        fade: false,
        infinite: true,
        speed: 500,
        autoPlay: true,
        autoPlaySpeed: 2000,
        slidesToShow: 4,
        arrows: true,
        slidesToScroll: 4,
        className: "modelsSlider"
      }
    if (getWindowDimensions()['width'] <= 600) {
        settings['slidesToShow'] = 2
        settings['slidesToScroll'] = 2
    }
    return(
        <Slider {...settings}>
        <div><Card active = { active } setActive = { setActive } /></div>
        <div><Card active = { active } setActive = { setActive } /></div>
        <div><Card active = { active } setActive = { setActive } /></div>
        <div><Card active = { active } setActive = { setActive } /></div>
        <div><Card active = { active } setActive = { setActive } /></div>
        <div><Card active = { active } setActive = { setActive } /></div>
        <div><Card active = { active } setActive = { setActive } /></div>
        </Slider>
    )
}

export default ModelsCarousel