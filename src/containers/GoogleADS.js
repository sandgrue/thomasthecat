import React from 'react'
import { GOOGLEADSCLIENTID } from '../constants/constants'

const GoogleADS = ({ placeholderId, width, height, slotno }) => {

    // useEffect(() => {
    //     (window.adsbygoogle = window.adsbygoogle || []).push({});
    // });



    return (
        <>
            <div id={`ezoic-pub-ad-placeholder-${placeholderId}`}>
                <ins class="adsbygoogle"
                    style={{ display: "inline-block", width: width, height: height }}
                    data-ad-client={GOOGLEADSCLIENTID}
                    data-ad-slot={slotno}></ins>
            </div>
        </>
    )
}

export default GoogleADS