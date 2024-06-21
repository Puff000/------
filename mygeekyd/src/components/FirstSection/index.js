import barnner1 from '../../assets/barnner1.jpg'
import barnner2 from '../../assets/barnner2.jpg'
import barnner3 from '../../assets/barnner3.jpg'
import barnner4 from '../../assets/barnner4.jpg'
import styles from './index.css'
import React from 'react';
import { Carousel } from 'antd';


const FirstSection = () => {
    return (
        <div style={styles}>
            <Carousel effect="fade" autoplay>
                <div>
                    <h3>
                        <img style={{ height: '160px' }} src={barnner1} alt='barnnr1'></img>
                    </h3>
                </div>
                <div>
                    <h3 >
                        <img style={{ height: '160px' }} src={barnner2} alt='barnnr2'></img>
                    </h3>
                </div>
                <div>
                    <h3>
                        <img style={{ height: '160px' }} src={barnner3} alt='barnnr3'></img>
                    </h3>
                </div>
                <div>
                    <h3>
                        <img style={{ height: '160px' }} src={barnner4} alt='barnnr4'></img>
                    </h3>
                </div>
            </Carousel>
        </div>
    )
}

export default FirstSection