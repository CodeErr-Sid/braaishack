import React, { useEffect, useRef, useState } from 'react';
import SimpleImageSlider from 'react-simple-image-slider';
import styles from './HotRockGrill.module.css'; // import your CSS module
import { assets } from '../../assets/assets';

const DynamicSlider = () => {
    const images = [
        { url: assets.braai1 },
        { url: assets.braai2 },
        { url: assets.HotRockGrill },
    ];
    const childContainerRef = useRef(null);
    const [sliderDimensions, setSliderDimensions] = useState({
        width: 400,  // default width
        height: 300  // default height
    });

    useEffect(() => {
        const updateSliderDimensions = () => {
            if (childContainerRef.current) {
                const containerWidth = childContainerRef.current.offsetWidth;
                const containerHeight = childContainerRef.current.offsetHeight;
                setSliderDimensions({
                    width: containerWidth / 2,
                    height: containerHeight
                });
            }
        };

        // Set initial dimensions
        updateSliderDimensions();

        // Update the dimensions on window resize
        window.addEventListener('resize', updateSliderDimensions);

        // Cleanup event listener on component unmount
        return () => window.removeEventListener('resize', updateSliderDimensions);
    }, []);

    return (
        <div className={styles.parentcontainer}>
            <div className={styles.childcontainer} ref={childContainerRef}>
                <div className={styles.imagecontainer}>
                    <SimpleImageSlider
                        width={sliderDimensions.width}  // dynamically set width
                        height={sliderDimensions.height}         // fixed height
                        images={images}
                        showBullets={false}
                        showNavs={true}
                    />
                </div>
                <div className={styles.contentcontainer}>
                    <p className={styles.content}>
                        <span className={styles.highlight}>Hot Rock</span> is an dining experience we offer the customers to cook steaks at their table.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default DynamicSlider;
