import React, { useState, useEffect } from 'react'
import Banner from './Banner'
import Searchneeds from './Searchneeds'
import ResearchYourApt from '../../containers/ResearchYourApt'
import PropertiesNearby from './PropertiesNearby'
import PopularCities from '../../containers/PopularCities'
import FeaturedRentalsInCity from '../../containers/FeaturedRentalsInCity'
import AffordableHousingByRegions from './AffordableHousingByRegions'
import ProudPartners from '../../containers/ProudPartners'
import EmailSubs from '../../containers/EmailSubs'
import MultiRangeSlider from '../../containers/multiRangeSlider'
import ImageSliderCarousel from '../PropertyDetail/ImageSliderCarousel'
import Footer from '../../containers/Footer'

import axios from 'axios'
import GoogleADS from '../../containers/GoogleADS'


const Index = (props) => {
    document.title = "Rental Housing Deals"

    const [latlngdata, setlatlngdata] = useState();

    let latlngurl = 'https://pro.ip-api.com/json?key=JQ2bhI11BHF1bzV';

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios.post(latlngurl)
                .then(res => {
                    setlatlngdata(res.data);
                }).catch(error => {
                    console.log('error', error);
                });
        };
        fetchData();
    }, [latlngurl]);



    // navigator.geolocation.getCurrentPosition(function (position) {
    //     console.log("Latitude is :", position.coords.latitude);
    //     console.log("Longitude is :", position.coords.longitude);
    // });

    let nearbypropurl;
    const [nearbypropdata, setnearbypropdata] = useState([]);
    if (latlngdata == undefined || latlngdata == [] || latlngdata == null) {
        nearbypropurl = `http://thomasthecat.rentalhousingdeals.com/apis/v1/api/v1/nearByproperty?state=&city=`;
    }
    else {
        nearbypropurl = `http://thomasthecat.rentalhousingdeals.com/apis/v1/api/v1/nearByproperty?state=${latlngdata.region}&city=${latlngdata.city}`;
    }
    useEffect(() => {
        const fetchData = async () => {
            const result = await axios.post(nearbypropurl)
                .then(res => {
                    setnearbypropdata(res.data.data);
                }).catch(error => {
                    console.log('error', error);
                });
        };
        fetchData();
    }, [nearbypropurl]);

    // console.log(latlngdata);
    return (
        <>
            <Banner latlngdata={latlngdata} />


            {/* Static part */}
            <Searchneeds latlngdata={latlngdata} />
            <ResearchYourApt />


            <section className="secPad">
                <div className="container">

                    <GoogleADS placeholderId='108' width='728px' height='90px' slotno='3956446321' />

                </div>
            </section>


            HIIII



            <section className="secPad">
                <div className="container">

                    <div>
                        <div id="ezoic-pub-ad-placeholder-108">
                            <ins class="adsbygoogle"
                                style={{ display: "inline-block", width: "728px", height: "90px" }}
                                data-ad-client="ca-pub-2836217214879103"
                                data-ad-slot="6662484805"></ins>
                        </div>
                    </div>
                </div>
            </section>




            {/* dynamic part  */}
            <PropertiesNearby propertynearby={nearbypropdata} titletext={"Affordable Properties Near You"} />
            <PopularCities titletext={"Find Low Income Affordable Properties in Popular Cities"} />

            <FeaturedRentalsInCity latlngdata={latlngdata} titletext={""} />
            <AffordableHousingByRegions page={1} />


            <ProudPartners />

            <EmailSubs />

            <Footer />

        </>
    )
}
export default Index