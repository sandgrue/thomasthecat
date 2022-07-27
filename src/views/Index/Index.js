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
import { Helmet } from 'react-helmet'


const Index = (props) => {
    document.title = "Rental Housing Deals";

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

    const adsHeadScript = `var ezstandalone = ezstandalone || { };
    ezstandalone.cmd = ezstandalone.cmd || [];
    ezstandalone.cmd.push(function () {
    ezstandalone.define(618, 145);
    ezstandalone.enable();
    ezstandalone.display();
    });`

    // console.log(latlngdata);
    return (
        <>



            <Helmet>
                <script type="text/javascript">
                    {adsHeadScript}
                </script>
            </Helmet>

            <Banner latlngdata={latlngdata} />


            {/* <section className="secPad">
                <div className="container">
                    <GoogleADS placeholderId='618' width='728px' height='90px' slotno='3956446321' />
                </div>
            </section> */}


            {/* Static part */}
            <Searchneeds latlngdata={latlngdata} />
            <ResearchYourApt />


            <section className="secPad">
                <div className="container">
                    <GoogleADS placeholderId='618' width='728px' height='90px' slotno='3956446321' />
                </div>
            </section>


            {/* HIIII */}



            {/* <section className="secPad">
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
            </section> */}




            {/* dynamic part  */}
            <PropertiesNearby propertynearby={nearbypropdata} titletext={"Affordable Properties Near You"} />
            <PopularCities titletext={"Find Low Income Affordable Properties in Popular Cities"} />

            <FeaturedRentalsInCity latlngdata={latlngdata} titletext={""} />
            <AffordableHousingByRegions page={1} />


            <ProudPartners />

            <EmailSubs />

            <section className="secPad">
                <div className="container">
                    <GoogleADS placeholderId='145' width='970px' height='250px' slotno='1279625173' />
                </div>
            </section>

            <Footer />

        </>
    )
}
export default Index