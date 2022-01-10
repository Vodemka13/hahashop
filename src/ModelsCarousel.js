import React, { Component, useContext } from "react";
import { useState, useEffect } from 'react';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import Card from './Card';
import './carousel.css'
import Context from "./Context";
import defaultProps from "react-slick/lib/default-props";


function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height
    };
  }

function ModelsCarousel(props) {
    
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        className: "modelsSlider",
        arrows: false
      }
    if (getWindowDimensions()['width'] <= 600) {
        settings['slidesToShow'] = 2
        settings['slidesToScroll'] = 2
    }

    
    return(
        <Slider {...settings}>
            {props.models['models'].map(model =>
                <Card setItem = {props.setItem} key = {model.name} model = { model } active = { props.active } setActive = { props.setActive } />
                // <div><h1> {model.name} </h1></div>
            ) }
        </Slider>
    )
}

export default ModelsCarousel