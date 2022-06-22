import React from 'react';
import './Hemisphere.css'
import northernPic from './img/NorthernHemisphere.jpg';
import southernPic from './img/SouthernHemisphere.jpg';

const hemipshereConfig = {
    Norte: {
        text: 'Hemisferio Norte',
        picture: northernPic
    },
    Sur: {
        text: 'Hemisferio Sur',
        picture: southernPic

    }
}

const HemisphereDisplay = ({ latitude }) => {
    //console.log(latitude);


    const hemisphere = latitude > 0 ? 'Norte' : 'Sur';
    //const picture = latitude >0 ? northernPic : southernPic;
    const { text, picture } = hemipshereConfig[hemisphere];
    return (
        <div className={hemisphere}>
<div className='ui raised text container segment'>
	<div className='image'>
	<img src={picture} alt='hemisphere'/>
		
	</div>
<div className='ui teal bottom attached label'>
	
	<h1>
	{text}
		
	</h1>
</div>

</div>
 
	</div>
    )
}

export default HemisphereDisplay;