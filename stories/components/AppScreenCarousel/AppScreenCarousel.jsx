import React from 'react';
import PropTypes from 'prop-types';
import './AppScreenCarousel.scss';

/**
 * Carousel for showing App Screens. Will work for any vertically oriented graphic.
 * 
 * When using with app screens, works best with a transparent background and any shadow already applied to the image. Controls can be operated by clicking the adjacent screens to navigate, or programmatically with JS. Active screen is controlled by a hidden group of radio buttons with name `app-screen-carousel-slider`.
 * 
 * **Supports screen counts between 3 and 7**
 * 
 * For JS controls, targets include:
 * 
 * **Active Screen**: check radio button with ID `item-[Active Screen]`
 * 
 */
export const AppScreenCarousel = ({ screenCount, activeScreen, ...props }) => {
  return (
    <div className="app-screen-carousel-container">
        {Array.apply(0, Array(screenCount)).map(function(x,i) {
            return <input type="radio" name="app-screen-carousel-slider" id={"item-"+(i+1)} defaultChecked={activeScreen == i+1} />
        })}
      
        
        <div className={"app-screen-carousel-screens app-screen-carousel-count-"+screenCount}>
            {Array.apply(0, Array(screenCount)).map(function(x,i) {
                return (
                    <label className="app-screen-carousel-screen-card" htmlFor={"item-"+(i+1)} id={"app-screen-carousel-screen-"+(i+1)}>
                        <img src="https://drive.google.com/uc?id=18CVqk5MfSm3WmolbGrIok3OIdqwCWtL4" />
                    </label>
                )
            })}
        </div>
    </div>
  )
};

AppScreenCarousel.propTypes = {
    screenCount: PropTypes.number,
    activeScreen: PropTypes.number
};

AppScreenCarousel.defaultProps = {
    screenCount: 5,
    activeScreen: 1
};
