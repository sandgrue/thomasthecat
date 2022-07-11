import React from 'react'
import Footer from '../../containers/Footer'
import AffordabilityCal from '../AgencyDetail/AffordabilityCal'
import { CityCountyQuickFacts } from '../AgencyDetail/CityCountyQuickFacts'
import { NearbyAgenciesAccordion } from '../HousingAuthority/NearbyAgenciesAccordion'
import RentalAssistance from '../../containers/RentalAssistance'
import Fbpage from '../fbpage/Fbpage'

const IncomeLimits = () => {
    document.title = "Income Limits - Rental Housing Deals"

    return (
        <>
            <section className="secPad24">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <nav className="navbar resNavbarBread" aria-label="breadcrumb">
                                <ol className="breadcrumb font-weight500 mb-0">
                                    <li className="breadcrumb-item"><a href="" className="purpleText">Home</a></li>
                                    <li className="breadcrumb-item" aria-current=""><a className="purpleText" href='/housingAuthority'>Housing Authority</a></li>
                                    <li className="breadcrumb-item active" aria-current="page">Income Limits</li>
                                </ol>
                            </nav>
                        </div>
                        <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12">
                            <div className="leftContSection">
                                <h2 className="primaryColor font-weight700">Income Limits</h2>
                                <p className="para">Each year, HUD publishes .income limits. for each geographical area. Income
                                    limits are based on family size and the median income in that area. When applying for
                                    housing assistance, the household income for the number of people in the household must be
                                    at or below the income limits for that household size in that geographical area.</p>
                                <p className="para">Here is a sample table for Income Limits for Orange County, CA:</p>
                                <h3 className="priceGreenText colorGreen font-weight700 itemWebsite marginTop16 fontSize24">$103,000
                                </h3>
                                <p className="mb-0 para secondaryColor itemWebsite">Median Income Limits of Orange County, CA</p>
                                <div className="itemMobile mobileIncomeLimit">
                                    <div className="brdrLine3 responsive-15"></div>
                                    <h3 className="colorBlue font-weight700 incomeLimtMobileText">Income Limits</h3>
                                    <p className="mb-0 para colorBlue mt-0">HUD sets Income Limits for each area based on the median
                                        family income in that area. Each Public Housing Agency (PHA) will use... <a
                                            href="">Read More</a></p>
                                    <h3 className="priceGreenText colorGreen font-weight700">$103,000</h3>
                                    <p className="mb-0 para secondaryColor">Median Income Limits of Orange County, CA</p>
                                </div>
                                <div className="brdrLine3 itemWebsite"></div>
                                <div className="itemWebsite">
                                    <div className="tablePad">
                                        <table className="table basicInfoTable">
                                            <thead>
                                                <tr>
                                                    <th scope="col" className="secondaryColor font-weight500 fontSize14">Persons
                                                        in<br /> Family</th>
                                                    <th scope="col">
                                                        <h5 className="mb-0 skyBlueColor font-weight700">80%</h5>
                                                        <div
                                                            className="d-flex align-items-center secondaryColor font-weight500 fontSize14">
                                                            Low Income Limit<span><a href="" className="infoIcon">



                                                                <img src={require('../../assets/img/info.svg').default} /></a></span></div>
                                                    </th>
                                                    <th scope="col">
                                                        <h5 className="mb-0 skyBlueColor font-weight700">50%</h5>
                                                        <div
                                                            className="d-flex align-items-center secondaryColor font-weight500 fontSize14">
                                                            Low Income Limit<span><a href="" className="infoIcon"><img
                                                                src={require('../../assets/img/info.svg').default} /></a></span></div>
                                                    </th>
                                                    <th scope="col">
                                                        <h5 className="mb-0 skyBlueColor font-weight700">30%</h5>
                                                        <div
                                                            className="d-flex align-items-center secondaryColor font-weight500 fontSize14">
                                                            Low Income Limit<span><a href="" className="infoIcon"><img
                                                                src={require('../../assets/img/info.svg').default} /></a></span></div>
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <th scope="row">1 Person</th>
                                                    <td>$71,750</td>
                                                    <td>$44,850</td>
                                                    <td>$26,950</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">2 Person</th>
                                                    <td>$82,000</td>
                                                    <td>$51,250</td>
                                                    <td>$30,800</td>
                                                </tr>
                                                <tr className="backColorGround">
                                                    <th scope="row">3 Person</th>
                                                    <td>$92,250</td>
                                                    <td>$57,650</td>
                                                    <td>$34,650</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">4 Person</th>
                                                    <td>$102,450</td>
                                                    <td>$64,050</td>
                                                    <td>$41,550</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">5 Person</th>
                                                    <td>$110,650</td>
                                                    <td>$69,200</td>
                                                    <td>$44,650</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                <div className="itemMobile">
                                    <div className="owl-carousel owl-theme tableSlider">
                                        <div className="item">
                                            <div className="tableBox">
                                                <div className="tableHeader">
                                                    <h4 className="mb-0 secondaryColor fontSize16 font-weight700">1 Person</h4>
                                                </div>
                                                <div className="tableBody">
                                                    <ul className="noMarginPad">
                                                        <li className="d-flex align-items-center tableRow">
                                                            <div
                                                                className="d-flex align-items-center secondaryColor font-weight500 fontSize12">
                                                                Low Income Limit
                                                                <span><a href=""><i className="fas fa-info-circle"></i></a></span>
                                                            </div>
                                                            <p className="mb-0 ml-auto font-weight400 fontSize12 secondaryColor">
                                                                Amount</p>
                                                        </li>
                                                        <li className="d-flex align-items-center tableRow percentBlock">
                                                            <div
                                                                className="d-flex align-items-center secondaryColor font-weight500 fontSize12">
                                                                <h5 className="skyBlueColor font-weight700 fontSize14 mb-0">80%</h5>
                                                                <span
                                                                    className="font-weight500 fontSize12 secondaryColor">Low</span>
                                                            </div>
                                                            <p className="mb-0 ml-auto font-weight400 fontSize14 secondaryColor">
                                                                $71,750</p>
                                                        </li>
                                                        <li className="d-flex align-items-center tableRow percentBlock">
                                                            <div
                                                                className="d-flex align-items-center secondaryColor font-weight500 fontSize12">
                                                                <h5 className="skyBlueColor font-weight700 fontSize14 mb-0">50%</h5>
                                                                <span className="font-weight500 fontSize12 secondaryColor">Very
                                                                    Low</span>
                                                            </div>
                                                            <p className="mb-0 ml-auto font-weight400 fontSize14 secondaryColor">
                                                                $44,850</p>
                                                        </li>
                                                        <li className="d-flex align-items-center tableRow percentBlock">
                                                            <div
                                                                className="d-flex align-items-center secondaryColor font-weight500 fontSize12">
                                                                <h5 className="skyBlueColor font-weight700 fontSize14 mb-0">30%</h5>
                                                                <span className="font-weight500 fontSize12 secondaryColor">Extremely
                                                                    Low</span>
                                                            </div>
                                                            <p className="mb-0 ml-auto font-weight400 fontSize14 secondaryColor">
                                                                $26,950</p>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="item">
                                            <div className="tableBox">
                                                <div className="tableHeader">
                                                    <h4 className="mb-0 secondaryColor fontSize16 font-weight700">1 Person</h4>
                                                </div>
                                                <div className="tableBody">
                                                    <ul className="noMarginPad">
                                                        <li className="d-flex align-items-center tableRow">
                                                            <div
                                                                className="d-flex align-items-center secondaryColor font-weight500 fontSize12">
                                                                Low Income Limit
                                                                <span><a href=""><i className="fas fa-info-circle"></i></a></span>
                                                            </div>
                                                            <p className="mb-0 ml-auto font-weight400 fontSize12 secondaryColor">
                                                                Amount</p>
                                                        </li>
                                                        <li className="d-flex align-items-center tableRow percentBlock">
                                                            <div
                                                                className="d-flex align-items-center secondaryColor font-weight500 fontSize12">
                                                                <h5 className="skyBlueColor font-weight700 fontSize14 mb-0">80%</h5>
                                                                <span
                                                                    className="font-weight500 fontSize12 secondaryColor">Low</span>
                                                            </div>
                                                            <p className="mb-0 ml-auto font-weight400 fontSize14 secondaryColor">
                                                                $71,750</p>
                                                        </li>
                                                        <li className="d-flex align-items-center tableRow percentBlock">
                                                            <div
                                                                className="d-flex align-items-center secondaryColor font-weight500 fontSize12">
                                                                <h5 className="skyBlueColor font-weight700 fontSize14 mb-0">50%</h5>
                                                                <span className="font-weight500 fontSize12 secondaryColor">Very
                                                                    Low</span>
                                                            </div>
                                                            <p className="mb-0 ml-auto font-weight400 fontSize14 secondaryColor">
                                                                $44,850</p>
                                                        </li>
                                                        <li className="d-flex align-items-center tableRow percentBlock">
                                                            <div
                                                                className="d-flex align-items-center secondaryColor font-weight500 fontSize12">
                                                                <h5 className="skyBlueColor font-weight700 fontSize14 mb-0">30%</h5>
                                                                <span className="font-weight500 fontSize12 secondaryColor">Extremely
                                                                    Low</span>
                                                            </div>
                                                            <p className="mb-0 ml-auto font-weight400 fontSize14 secondaryColor">
                                                                $26,950</p>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="item">
                                            <div className="tableBox">
                                                <div className="tableHeader">
                                                    <h4 className="mb-0 secondaryColor fontSize16 font-weight700">1 Person</h4>
                                                </div>
                                                <div className="tableBody">
                                                    <ul className="noMarginPad">
                                                        <li className="d-flex align-items-center tableRow">
                                                            <div
                                                                className="d-flex align-items-center secondaryColor font-weight500 fontSize12">
                                                                Low Income Limit
                                                                <span><a href=""><i className="fas fa-info-circle"></i></a></span>
                                                            </div>
                                                            <p className="mb-0 ml-auto font-weight400 fontSize12 secondaryColor">
                                                                Amount</p>
                                                        </li>
                                                        <li className="d-flex align-items-center tableRow percentBlock">
                                                            <div
                                                                className="d-flex align-items-center secondaryColor font-weight500 fontSize12">
                                                                <h5 className="skyBlueColor font-weight700 fontSize14 mb-0">80%</h5>
                                                                <span
                                                                    className="font-weight500 fontSize12 secondaryColor">Low</span>
                                                            </div>
                                                            <p className="mb-0 ml-auto font-weight400 fontSize14 secondaryColor">
                                                                $71,750</p>
                                                        </li>
                                                        <li className="d-flex align-items-center tableRow percentBlock">
                                                            <div
                                                                className="d-flex align-items-center secondaryColor font-weight500 fontSize12">
                                                                <h5 className="skyBlueColor font-weight700 fontSize14 mb-0">50%</h5>
                                                                <span className="font-weight500 fontSize12 secondaryColor">Very
                                                                    Low</span>
                                                            </div>
                                                            <p className="mb-0 ml-auto font-weight400 fontSize14 secondaryColor">
                                                                $44,850</p>
                                                        </li>
                                                        <li className="d-flex align-items-center tableRow percentBlock">
                                                            <div
                                                                className="d-flex align-items-center secondaryColor font-weight500 fontSize12">
                                                                <h5 className="skyBlueColor font-weight700 fontSize14 mb-0">30%</h5>
                                                                <span className="font-weight500 fontSize12 secondaryColor">Extremely
                                                                    Low</span>
                                                            </div>
                                                            <p className="mb-0 ml-auto font-weight400 fontSize14 secondaryColor">
                                                                $26,950</p>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <RentalAssistance />
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                            <div className="agencyLandingRightSec detailRightSec">
                                {/* <div className="advertisementBlock">
                                <img src={require('../../assets/img/image 147.png').default} />
                            </div> */}
                                <div className="mb24">
                                    <Fbpage />
                                    {/* <img className="w-100" src={require('../../assets/img/image147.png').default} /> */}
                                </div>
                                {/* <div className="nearbyAgecyBlock">
                                <div className="accordionBoxInfo">
                                    <div id="accordion">
                                        <div className="card">
                                            <div className="card-header cardHeaderBorder0" id="headingOne">
                                                <h5 className="mb-0 d-flex align-items-center">
                                                    <button className="btn btn-link font-weight700 colorBlue"
                                                        data-toggle="collapse" data-target="#collapseOne"
                                                        aria-expanded="true" aria-controls="collapseOne">
                                                        Nearby Agencies
                                                    </button>
                                                    <span className="ml-auto" data-toggle="collapse" data-target="#collapseOne"
                                                        aria-expanded="true" aria-controls="collapseOne">
                                                        <img src={require('../../assets/img/upArrow.png').default} />
                                                    </span>
                                                </h5>
                                            </div>
                                            <div id="collapseOne" className="collapse show" aria-labelledby="headingOne"
                                                data-parent="#accordion">
                                                <div className="nearbyAgencyBlock boxscroll4">
                                                    <div className="wrapperScroll">
                                                        <ul className="noMarginPad listStyleNone">
                                                            <li>
                                                                <a href="">
                                                                    <div className="media">
                                                                        <img className="" src={require('../../assets/img/nearbyAgency1.png').default}
                                                                            alt="Image" />
                                                                        <div className="media-body">
                                                                            <div className="d-flex align-items-top">
                                                                                <div className="headingSec">
                                                                                    <h5
                                                                                        className="mt-0 mb-0 fontSize14 font-weight500 colorBlue">
                                                                                        Garden Grove Housing Authority</h5>
                                                                                    <p
                                                                                        className="mb-0 secondaryColor fontSize14">
                                                                                        Garden Grove, CA</p>
                                                                                </div>
                                                                                <div className="ml-auto">
                                                                                    <span
                                                                                        className="statusTag fontSize12 font-weight500 closed">
                                                                                        Closed
                                                                                    </span>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="">
                                                                    <div className="media">
                                                                        <img className="" src={require('../../assets/img/nearbyAgency2.png').default}
                                                                            alt="Image" />
                                                                        <div className="media-body">
                                                                            <div className="d-flex align-items-top">
                                                                                <div className="headingSec">
                                                                                    <h5
                                                                                        className="mt-0 mb-0 fontSize14 font-weight500 colorBlue">
                                                                                        Orange Housing Authority</h5>
                                                                                    <p
                                                                                        className="mb-0 secondaryColor fontSize14">
                                                                                        Garden Grove, CA</p>
                                                                                </div>
                                                                                <div className="ml-auto">
                                                                                    <span
                                                                                        className="statusTag fontSize12 font-weight500 openingSoon">
                                                                                        Opening Soon
                                                                                    </span>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="">
                                                                    <div className="media">
                                                                        <img className="" src={require('../../assets/img/nearbyAgency3.png').default}
                                                                            alt="Image" />
                                                                        <div className="media-body">
                                                                            <div className="d-flex align-items-top">
                                                                                <div className="headingSec">
                                                                                    <h5
                                                                                        className="mt-0 mb-0 fontSize14 font-weight500 colorBlue">
                                                                                        Santa Ana Housing Authority</h5>
                                                                                    <p
                                                                                        className="mb-0 secondaryColor fontSize14">
                                                                                        Garden Grove, CA</p>
                                                                                </div>
                                                                                <div className="ml-auto">
                                                                                    <span
                                                                                        className="statusTag fontSize12 font-weight500 open">
                                                                                        Open
                                                                                    </span>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="">
                                                                    <div className="media">
                                                                        <img className="" src={require('../../assets/img/nearbyAgency4.png').default}
                                                                            alt="Image" />
                                                                        <div className="media-body">
                                                                            <div className="d-flex align-items-top">
                                                                                <div className="headingSec">
                                                                                    <h5
                                                                                        className="mt-0 mb-0 fontSize14 font-weight500 colorBlue">
                                                                                        Norwalk Housing Authority</h5>
                                                                                    <p
                                                                                        className="mb-0 secondaryColor fontSize14">
                                                                                        Garden Grove, CA</p>
                                                                                </div>
                                                                                <div className="ml-auto">
                                                                                    <span
                                                                                        className="statusTag fontSize12 font-weight500 open">
                                                                                        Open
                                                                                    </span>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="">
                                                                    <div className="media">
                                                                        <img className="" src={require('../../assets/img/nearbyAgency5.png').default}
                                                                            alt="Image" />
                                                                        <div className="media-body">
                                                                            <div className="d-flex align-items-top">
                                                                                <div className="headingSec">
                                                                                    <h5
                                                                                        className="mt-0 mb-0 fontSize14 font-weight500 colorBlue">
                                                                                        Lawndale Housing Authority</h5>
                                                                                    <p
                                                                                        className="mb-0 secondaryColor fontSize14">
                                                                                        Garden Grove, CA</p>
                                                                                </div>
                                                                                <div className="ml-auto">
                                                                                    <span
                                                                                        className="statusTag fontSize12 font-weight500 open">
                                                                                        Open
                                                                                    </span>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="">
                                                                    <div className="media">
                                                                        <img className="" src={require('../../assets/img/nearbyAgency5.png').default}
                                                                            alt="Image" />
                                                                        <div className="media-body">
                                                                            <div className="d-flex align-items-top">
                                                                                <div className="headingSec">
                                                                                    <h5
                                                                                        className="mt-0 mb-0 fontSize14 font-weight500 colorBlue">
                                                                                        Lawndale Housing Authority</h5>
                                                                                    <p
                                                                                        className="mb-0 secondaryColor fontSize14">
                                                                                        Garden Grove, CA</p>
                                                                                </div>
                                                                                <div className="ml-auto">
                                                                                    <span
                                                                                        className="statusTag fontSize12 font-weight500 open">
                                                                                        Open
                                                                                    </span>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div> */}

                                <NearbyAgenciesAccordion />


                                {/* <div className="accordionBoxInfo calculatorForm">
                                <div id="accordion3">
                                    <div className="card">
                                        <div className="card-header" id="headingOne">
                                            <h5 className="mb-0 d-flex align-items-center">
                                                <button className="btn btn-link font-weight700 colorBlue" data-toggle="collapse"
                                                    data-target="#collapseThree" aria-expanded="true"
                                                    aria-controls="collapseThree">
                                                    Affordability Calculator
                                                </button>
                                                <span className="ml-auto" data-toggle="collapse" data-target="#collapseThree"
                                                    aria-expanded="true" aria-controls="collapseThree">
                                                    <img src={require('../../assets/img/upArrow.png').default} />
                                                </span>
                                            </h5>
                                        </div>
                                        <div id="collapseThree" className="collapse show" aria-labelledby="headingThree"
                                            data-parent="#accordion3">
                                            <div className="card-body">
                                                <p className="fontSize12 colorBlue">Please enter your MONTHLY gross income
                                                    (income before taxes, number only)</p>
                                                <div className="d-flex align-items-center rentalForm">
                                                    <div className="form-group mb-0">
                                                        <input type="email" className="form-control" id=""
                                                            aria-describedby="emailHelp" placeholder="$" />
                                                    </div>
                                                    <a href="" className="calculteBtn brdrRadius4 colorWhite">Calculate</a>
                                                </div>
                                                <p className="fontSize16 secondaryColor mb-0 mt-1">You should not be paying more
                                                    than <b>$1650</b> on your rent morgage each month.</p>
                                                <a href="" className="purpleText font-weight700">Why?</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div> */}



                                <AffordabilityCal />

                                {/* <div className="accordionBoxInfo losAngeles">
                                <div id="accordion4">
                                    <div className="card">
                                        <div className="card-header" id="headingFour">
                                            <h5 className="mb-0 d-flex align-items-center">
                                                <button className="btn btn-link font-weight700 colorBlue" data-toggle="collapse"
                                                    data-target="#collapseFour" aria-expanded="true"
                                                    aria-controls="collapseFour">
                                                    Orange County Quick Facts
                                                </button>
                                                <span className="ml-auto" data-toggle="collapse" data-target="#collapseFour"
                                                    aria-expanded="true" aria-controls="collapseFour">
                                                    <img src={require('../../assets/img/upArrow.png').default} />
                                                </span>
                                            </h5>
                                        </div>
                                        <div id="collapseFour" className="collapse show" aria-labelledby="headingFour"
                                            data-parent="#accordion4">
                                            <div className="card-body">
                                                <ul className="noMarginPad listStyleNone">
                                                    <li>
                                                        <p className="mb-0 d-flex align-items-center secondaryColor fontSize16">
                                                            Population<span className="ml-auto colorBlue">10,116,705</span></p>
                                                    </li>
                                                    <li>
                                                        <p className="mb-0 d-flex align-items-center secondaryColor fontSize16">
                                                            Persons per household<span className="ml-auto colorBlue">3.01</span>
                                                        </p>
                                                    </li>
                                                    <li>
                                                        <p className="mb-0 d-flex align-items-center secondaryColor fontSize16">
                                                            Housing units in multi-units<br />structure<span
                                                                className="ml-auto colorBlue">42.2%</span></p>
                                                    </li>
                                                    <li>
                                                        <p className="mb-0 d-flex align-items-center secondaryColor fontSize16">
                                                            Homeownership Rate<span className="ml-auto colorBlue">46.9%</span>
                                                        </p>
                                                    </li>
                                                    <li>
                                                        <p className="mb-0 d-flex align-items-center secondaryColor fontSize16">
                                                            Housing Units<span className="ml-auto colorBlue">3,462,202</span>
                                                        </p>
                                                    </li>
                                                    <li>
                                                        <p className="mb-0 d-flex align-items-center secondaryColor fontSize16">
                                                            Yearly Income per Person<span
                                                                className="ml-auto colorBlue">$27,749</span></p>
                                                    </li>
                                                    <li>
                                                        <p className="mb-0 d-flex align-items-center secondaryColor fontSize16">
                                                            Median Household Income<span
                                                                className="ml-auto colorBlue">$55,909</span></p>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div> */}
                                <CityCountyQuickFacts />


                                <div className="margin24">
                                    <img className="w-100" src={require('../../assets/img/image145.png').default} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
            <Footer />
        </>
    )
}
export default IncomeLimits