import React, { useState, useEffect } from 'react'
import Searchbox from './Searchbox'
import ResearchYourApt from '../../containers/ResearchYourApt'
import PropertiesNearby from '../Index/PropertiesNearby'
import FeaturedRentalsInCity from '../../containers/FeaturedRentalsInCity'
import ProudPartners from '../../containers/ProudPartners'
import EmailSubs from '../../containers/EmailSubs'
import PopularCities from '../../containers/PopularCities'
import AffordableHousingByRegions from '../Index/AffordableHousingByRegions'
import Footer from '../../containers/Footer'
import axios from 'axios';
import GoogleADS from '../../containers/GoogleADS'
import { Helmet } from 'react-helmet'

const Seniorhousing = () => {
    { document.title = "Senior Housing - Rental Housing Deals" }


    const [latlngdata, setlatlngdata] = useState();

    let latlngurl = 'https://pro.ip-api.com/json?key=JQ2bhI11BHF1bzV';

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios.post(latlngurl)
                .then(res => {
                    setlatlngdata(res.data)
                }).catch(error => {
                    console.log('error', error);
                });
        };
        fetchData();
    }, [latlngurl]);


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
    ezstandalone.define(619, 145);
    ezstandalone.enable();
    ezstandalone.display();
    });`

    return (
        <>

            <Helmet>
                <script type="text/javascript">
                    {adsHeadScript}
                </script>
            </Helmet>

            <Searchbox latlngdata={latlngdata} />

            <ResearchYourApt />

            <section className="secPad">
                <div className="container">
                    <GoogleADS placeholderId='619' width='728px' height='90px' slotno='6857091773' />
                </div>
            </section>

            <PropertiesNearby propertynearby={nearbypropdata} titletext={"Economic Properties For Seniors Near You"} />
            <PopularCities titletext={"Find Low Income Affordable Properties in Popular Cities"} />

            <FeaturedRentalsInCity latlngdata={latlngdata} page={2} />
            {/* <FeaturedRentalsInCity /> */}
            <AffordableHousingByRegions page={2} />

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
export default Seniorhousing