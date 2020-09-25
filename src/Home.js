import React from 'react';
import mobile from "./img/juno-mobile.png";
import email from "./img/email.svg";
import juno from "./img/juno.svg";
import flag from "./img/flag.png";
import aapp from "./img/aapp.png";
import iapp from "./img/iapp.png";
import a from "./img/a-image.png";
import b from "./img/b-image.png";
import c from "./img/c-image.png";
import black_card from "./img/black-card.png";
import blue_card from "./img/blue-card.png";
import pink_card from "./img/pink-card.png";
// import { Link } from 'react-router-dom';

function Home() {
    return (
        <div>
         {/* ===============top section===================================== */}
          <div className="row">
          <div className="col-lg-7 col-md-12 mt-5 text-center mx-auto">
          <h1 className="heading mt-xl-5 mt-lg-5 mt-md-5"><span>T</span>he Most Powerful <br />Checking <span>A</span>ccount</h1>
          <p className="mt-3 mb-4 top-desc">Our checking account gives you higher returns <br /> than a savings account with no hidden fees.
          </p>
          <div className="top-input row">
          <div className="border mx-auto">
          <img alt="Email" src={email} />
          <input className="top-inputi mx-4" type="text" placeholder="Enter Email Address" />
          <button className="btn primary-btn text-white" type="submit" >Join Now</button>
          </div>
          </div>

          <div className="mt-3">
          <img className="flag" alt="Email" src={flag} />
          <span className="top-desc ml-3">283 spots left for Priority Access</span>
          </div>
          <div className="app mt-4">
          <img src={aapp} alt="android application" />
          <img src={iapp} alt="ios application" />
          </div>
          </div>
          
          {/* img section */}
          <div className="col-lg-5 col-md-12 mt-5">
          <img src={mobile} className="mobile_img" alt="event" />
          </div>
          </div>
         
          {/* top section end */}

          {/* ===============second section===================================== */}

          <div className="row sec_sect">
          <div className="col-lg-8 col-11 my-5 text-center mx-auto">
          <p className="second_title">BACKED BY THE BEST</p>
          <div className="row comp_img">
          <img src={a} className="a_img mx-auto mb-4" alt="event" />
          <img src={b} className="b_img mx-auto mb-4" alt="event" />
          <img src={c} className="c_img mx-auto mb-4" alt="event" />
          </div>
          </div>
          </div>

        {/* ===============third saving section===================================== */}

          <div className="row tsec">
          <div className="col-lg-7 col-11 mx-auto my-5">
          <div className="ml-xl-5 ml-lg-5 ml-md-5">
          <p className="mt-5 top-third">Start saving for a rainy day fund</p>
          <h1 className="heading-third">Use Our Checking Account to Achieve Your Financial Goals</h1>
          <p className="mt-3 mb-4 third-desc">With the latest Federal rate cut, the largest banks are offering close to 0% APY on their checking and savings accounts. OnJuno checking will earn you more than 20x the national average*. Deposits up to $250,000 are FDIC insured through our partner bank. Grow your idle money faster with our checking account and start saving towards a rainy day fund, big expense, or vacation.</p>
          </div>
          </div>
          <div className="col-lg-5 col-md-6 col-11 text-center mx-auto my-xl-5 my-lg-5 mt-sm-5 mt-5">
          <img src={juno} className="mx-auto mb-4 w-100" alt="event" />
          </div>
          </div>


          {/* ===============card section===================================== */}
          <div className="row text-center">
          <h1 className="heading-third mx-auto">Sign up early to save more</h1>
          <p className="mt-1 mb-5 top-desc mx-auto col-12">Depending on the level of your checking account, you’ll earn<br /> between 1.15%3 to 2.15%1 bonus rate.</p>
          </div>

          <div className="hidden-card">
          <div className="mx-auto">
          <span className="px-1 px-sm-2 cursor-pointer METAL_l active">
                    METAL
                </span>
                <span className="px-1 px-md-2 cursor-pointer PREMIUM_l">
                    PREMIUM
                </span>
              <span className="px-1 px-md-2 cursor-pointer BASIC_l">
                    BASIC
                </span>
         </div>
          </div>

          <div className="my-5 py-5">
          <div className="row">
          
          <div className="col-xl-3 col-lg-3 col-11 mx-auto cards METAL">
          <div className="w-100 card-bg">
          <img src={black_card} className="mx-auto d-block card_img" alt="black_card" />
          <div className="mt-1 card-desc text-center card-top">METAL
          <p className="text-54-first">
          <span>
          2.15%
          </span> <span className="text-24">
               3
          </span></p>
          <span className="text-per-first mr-2">5%</span>cash back
          </div>
          </div>
          <div className="mx-auto mt-3 card-sec">
          <span className="sec-num">2217</span><span className="sec-num-bold">/ 2500</span>
          <span className="sec-num-small ml-1">sports</span>
          <span className="right-num-small ml-1">spots left</span>
          <span className="right-num">283</span>
          <div className="w-full h-025 flex bg-white-smoke rounded-05">
          <div className="h-full rounded-05 juno-green-loader" style={{width: '88.72%'}}>
          </div></div>
          <div className="mx-auto mt-4 ">
          <button className="w-full text-center cursor-pointer primary-btn py-3 px-5">
            Sign Up Now
            </button></div>
          </div>
          <div className="mx-auto mt-4 pt-5 border-top">
          <p className="item-slate-gray ml-3">INCLUDES</p>
          <div className="ml-3">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 13" className="w-045 h-0381 object-contain">
          <path stroke="#00A86B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 1L6 12 1 7">
          </path></svg><span className="ml-3 svg-font">Charcoal Black Metal Card</span>
          <br />
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 13" className="w-045 h-0381 object-contain">
          <path stroke="#00A86B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 1L6 12 1 7">
          </path></svg><span className="ml-3 svg-font">2.15%<sup>1</sup> Bonus Rate Checking Account</span>
          <br />
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 13" className="w-045 h-0381 object-contain">
          <path stroke="#00A86B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 1L6 12 1 7">
          </path></svg><span className="ml-3 svg-font">5% Cash back on brands you love</span>
          <br />
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 13" className="w-045 h-0381 object-contain">
          <path stroke="#00A86B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 1L6 12 1 7">
          </path></svg><span className="ml-3 svg-font">Free Cash Withdrawals</span>
          <br />
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 13" className="w-045 h-0381 object-contain">
          <path stroke="#00A86B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 1L6 12 1 7">
          </path></svg><span className="ml-3 svg-font">Phone & Chat Support</span>
          </div>
          <p className="card-bt-des mt-4 ml-3">Fund your account with a minimum opening deposit of <b>$1000</b>. 3 additional free ATM withdrawals per month from out of network ATMs.</p>
          </div>
          <div className="mx-auto mt-4 pt-3 last-sec-one">
          <p className="ml-3"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="sv-img w-6 h-6 object-contain" data-v-5602b450="">
          <path fill="#00A86B" d="M11 9h4c.265 0 .52-.105.707-.293C15.895 8.52 16 8.265 16 8c0-.265-.105-.52-.293-.707C15.52 7.105 15.265 7 15 7h-2V6c0-.265-.105-.52-.293-.707C12.52 5.105 12.265 5 12 5c-.265 0-.52.105-.707.293C11.105 5.48 11 5.735 11 6v1c-.796 0-1.559.316-2.121.879C8.316 8.44 8 9.204 8 10s.316 1.559.879 2.121C9.44 12.684 10.204 13 11 13h2c.265 0 .52.105.707.293.188.187.293.442.293.707 0 .265-.105.52-.293.707-.187.188-.442.293-.707.293H9c-.265 0-.52.105-.707.293C8.105 15.48 8 15.735 8 16c0 .265.105.52.293.707.187.188.442.293.707.293h2v1c0 .265.105.52.293.707.187.188.442.293.707.293.265 0 .52-.105.707-.293.188-.187.293-.442.293-.707v-1c.796 0 1.559-.316 2.121-.879.563-.562.879-1.325.879-2.121s-.316-1.559-.879-2.121C14.56 11.316 13.796 11 13 11h-2c-.265 0-.52-.105-.707-.293C10.105 10.52 10 10.265 10 10c0-.265.105-.52.293-.707C10.48 9.105 10.735 9 11 9zm1-8c-2.176 0-4.302.645-6.111 1.854-1.81 1.209-3.22 2.926-4.052 4.936-.832 2.01-1.05 4.222-.626 6.356.425 2.134 1.472 4.094 3.01 5.632 1.54 1.539 3.5 2.586 5.633 3.01 2.134.425 4.346.207 6.355-.625 2.01-.833 3.729-2.243 4.937-4.052C22.355 16.302 23 14.176 23 12c0-2.917-1.159-5.715-3.222-7.778C17.715 2.159 14.918 1 12 1zm0 20c-1.78 0-3.52-.528-5-1.517-1.48-.989-2.634-2.394-3.315-4.039-.681-1.644-.86-3.454-.512-5.2.347-1.746 1.204-3.35 2.463-4.608 1.259-1.259 2.862-2.116 4.608-2.463 1.746-.347 3.556-.17 5.2.512 1.645.681 3.05 1.835 4.04 3.315C20.471 8.48 21 10.22 21 12c0 2.387-.948 4.676-2.636 6.364C16.676 20.052 14.387 21 12 21z" data-v-5602b450=""></path></svg>
          <span className="ml-3 line-through-first">$11.99/m Membership Fee</span></p>
          <div className="ml-5 mb-4 pb-3 bottom-cards-first">
          Free for 6 months
          <p>$60 Savings</p>
          </div>
          </div>
          </div>
          
          
      
          {/* card second */}
          <div className="col-xl-3 col-lg-3 col-11 mx-auto cards PREMIUM">
          <div className="w-100 card-bg">
          <img src={pink_card} className="mx-auto d-block card_img" alt="black_card" />
          <div className="mt-1 card-desc text-center card-top">PREMIUM
          <p className="text-54">
          <span>
          1.65%
          </span> <span className="text-24">
               2
          </span></p>
          <span className="text-per mr-2">4%</span>cash back
          </div>
          </div>
          <div className="mx-auto mt-3 card-sec">
          <span className="sec-num-bold">2000</span>
          <span className="sec-num-small ml-1">sports</span>
          <span className="right-num-small ml-1">spots left</span>
          <span className="right-num">2000</span>
          <div className="w-full h-025 flex bg-white-smoke rounded-05">
          <div className="h-full rounded-05 juno-green-loader">
          </div></div>
          <div className="mx-auto mt-4 ">
          <button className="w-full text-center disabled-btn py-3 px-5">
            Up Next
            </button></div>
          </div>
          <div className="mx-auto mt-4 pt-5 border-top">
          <p className="item-slate-gray ml-3">INCLUDES</p>
          <div className="ml-3">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 13" className="w-045 h-0381 object-contain">
          <path stroke="#00A86B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 1L6 12 1 7">
          </path></svg><span className="ml-3 svg-font">Free Debit Card</span>
          <br />
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 13" className="w-045 h-0381 object-contain">
          <path stroke="#00A86B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 1L6 12 1 7">
          </path></svg><span className="ml-3 svg-font">1.65%<sup>2</sup> Bonus Rate Checking Account</span>
          <br />
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 13" className="w-045 h-0381 object-contain">
          <path stroke="#00A86B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 1L6 12 1 7">
          </path></svg><span className="ml-3 svg-font">4% Cash back on brands you love</span>
          <br />
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 13" className="w-045 h-0381 object-contain">
          <path stroke="#00A86B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 1L6 12 1 7">
          </path></svg><span className="ml-3 svg-font">Free Cash Withdrawals</span>
          <br />
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 13" className="w-045 h-0381 object-contain">
          <path stroke="#00A86B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 1L6 12 1 7">
          </path></svg><span className="ml-3 svg-font">Phone & Chat Support</span>
          </div>
          <p className="card-bt-des mt-4 ml-3">Fund your account with a minimum opening deposit of <b>$500</b>. 2 additional free ATM withdrawals per month from out of network ATMs.</p>
          </div>
          <div className="mx-auto mt-4 pt-3 last-sec">
          <p className="ml-3"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="sv-img w-6 h-6 object-contain" data-v-5602b450="">
          <path fill="#B3B3B3" d="M11 9h4c.265 0 .52-.105.707-.293C15.895 8.52 16 8.265 16 8c0-.265-.105-.52-.293-.707C15.52 7.105 15.265 7 15 7h-2V6c0-.265-.105-.52-.293-.707C12.52 5.105 12.265 5 12 5c-.265 0-.52.105-.707.293C11.105 5.48 11 5.735 11 6v1c-.796 0-1.559.316-2.121.879C8.316 8.44 8 9.204 8 10s.316 1.559.879 2.121C9.44 12.684 10.204 13 11 13h2c.265 0 .52.105.707.293.188.187.293.442.293.707 0 .265-.105.52-.293.707-.187.188-.442.293-.707.293H9c-.265 0-.52.105-.707.293C8.105 15.48 8 15.735 8 16c0 .265.105.52.293.707.187.188.442.293.707.293h2v1c0 .265.105.52.293.707.187.188.442.293.707.293.265 0 .52-.105.707-.293.188-.187.293-.442.293-.707v-1c.796 0 1.559-.316 2.121-.879.563-.562.879-1.325.879-2.121s-.316-1.559-.879-2.121C14.56 11.316 13.796 11 13 11h-2c-.265 0-.52-.105-.707-.293C10.105 10.52 10 10.265 10 10c0-.265.105-.52.293-.707C10.48 9.105 10.735 9 11 9zm1-8c-2.176 0-4.302.645-6.111 1.854-1.81 1.209-3.22 2.926-4.052 4.936-.832 2.01-1.05 4.222-.626 6.356.425 2.134 1.472 4.094 3.01 5.632 1.54 1.539 3.5 2.586 5.633 3.01 2.134.425 4.346.207 6.355-.625 2.01-.833 3.729-2.243 4.937-4.052C22.355 16.302 23 14.176 23 12c0-2.917-1.159-5.715-3.222-7.778C17.715 2.159 14.918 1 12 1zm0 20c-1.78 0-3.52-.528-5-1.517-1.48-.989-2.634-2.394-3.315-4.039-.681-1.644-.86-3.454-.512-5.2.347-1.746 1.204-3.35 2.463-4.608 1.259-1.259 2.862-2.116 4.608-2.463 1.746-.347 3.556-.17 5.2.512 1.645.681 3.05 1.835 4.04 3.315C20.471 8.48 21 10.22 21 12c0 2.387-.948 4.676-2.636 6.364C16.676 20.052 14.387 21 12 21z" data-v-5602b450=""></path></svg>
          <span className="ml-3 line-through">$6.99/m Membership Fee</span></p>
          <div className="ml-5 mb-4 pb-5 pt-2 bottom-cards">
          Coming Soon
          </div>
          </div>
          </div>



          {/* card third */}
          <div className="col-xl-3 col-lg-3 col-11 mx-auto cards BASIC">
          <div className="w-100 card-bg">
          <img src={blue_card} className="mx-auto d-block card_img" alt="black_card" />
          <div className="mt-1 card-desc text-center card-top">BASIC
          <p className="text-54">
          <span>
          1.15%
          </span> <span className="text-24">
               3
          </span></p>
          <span className="text-per mr-2">3%</span>cash back
          </div>
          </div>
          <div className="mx-auto mt-3 card-sec">
          <span className="sec-num-bold">10000</span>
          <span className="sec-num-small ml-1">sports</span>
          <span className="right-num-small ml-1">spots left</span>
          <span className="right-num">10000</span>
          <div className="w-full h-025 flex bg-white-smoke rounded-05">
          <div className="h-full rounded-05 juno-green-loader">
          </div></div>
          <div className="mx-auto mt-4 ">
          <button className="w-full text-center disabled-btn py-3 px-5">
           Comming Soon
            </button></div>
          </div>
          <div className="mx-auto mt-4 pt-5 border-top">
          <p className="item-slate-gray ml-3">INCLUDES</p>
          <div className="ml-3">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 13" className="w-045 h-0381 object-contain">
          <path stroke="#00A86B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 1L6 12 1 7">
          </path></svg><span className="ml-3 svg-font">Free Debit Card</span>
          <br />
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 13" className="w-045 h-0381 object-contain">
          <path stroke="#00A86B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 1L6 12 1 7">
          </path></svg><span className="ml-3 svg-font">1.15%<sup>3</sup> Bonus Rate Checking Account</span>
          <br />
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 13" className="w-045 h-0381 object-contain">
          <path stroke="#00A86B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 1L6 12 1 7">
          </path></svg><span className="ml-3 svg-font">3% Cash back on brands you love</span>
          <br />
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 13" className="w-045 h-0381 object-contain">
          <path stroke="#00A86B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 1L6 12 1 7">
          </path></svg><span className="ml-3 svg-font">Free Cash Withdrawals</span>
          <br />
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 13" className="w-045 h-0381 object-contain">
          <path stroke="#00A86B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 1L6 12 1 7">
          </path></svg><span className="ml-3 svg-font">Phone & Chat Support</span>
          </div>
          <p className="card-bt-des mt-4 mb-5 pb-3 ml-3">Fund your account with a minimum opening deposit of <b>$0</b></p>
          </div>
          <div className="mx-auto mt-5 pt-4 last-sec">
          <p className="ml-3"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="sv-img w-6 h-6 object-contain" data-v-5602b450="">
          <path fill="#B3B3B3" d="M11 9h4c.265 0 .52-.105.707-.293C15.895 8.52 16 8.265 16 8c0-.265-.105-.52-.293-.707C15.52 7.105 15.265 7 15 7h-2V6c0-.265-.105-.52-.293-.707C12.52 5.105 12.265 5 12 5c-.265 0-.52.105-.707.293C11.105 5.48 11 5.735 11 6v1c-.796 0-1.559.316-2.121.879C8.316 8.44 8 9.204 8 10s.316 1.559.879 2.121C9.44 12.684 10.204 13 11 13h2c.265 0 .52.105.707.293.188.187.293.442.293.707 0 .265-.105.52-.293.707-.187.188-.442.293-.707.293H9c-.265 0-.52.105-.707.293C8.105 15.48 8 15.735 8 16c0 .265.105.52.293.707.187.188.442.293.707.293h2v1c0 .265.105.52.293.707.187.188.442.293.707.293.265 0 .52-.105.707-.293.188-.187.293-.442.293-.707v-1c.796 0 1.559-.316 2.121-.879.563-.562.879-1.325.879-2.121s-.316-1.559-.879-2.121C14.56 11.316 13.796 11 13 11h-2c-.265 0-.52-.105-.707-.293C10.105 10.52 10 10.265 10 10c0-.265.105-.52.293-.707C10.48 9.105 10.735 9 11 9zm1-8c-2.176 0-4.302.645-6.111 1.854-1.81 1.209-3.22 2.926-4.052 4.936-.832 2.01-1.05 4.222-.626 6.356.425 2.134 1.472 4.094 3.01 5.632 1.54 1.539 3.5 2.586 5.633 3.01 2.134.425 4.346.207 6.355-.625 2.01-.833 3.729-2.243 4.937-4.052C22.355 16.302 23 14.176 23 12c0-2.917-1.159-5.715-3.222-7.778C17.715 2.159 14.918 1 12 1zm0 20c-1.78 0-3.52-.528-5-1.517-1.48-.989-2.634-2.394-3.315-4.039-.681-1.644-.86-3.454-.512-5.2.347-1.746 1.204-3.35 2.463-4.608 1.259-1.259 2.862-2.116 4.608-2.463 1.746-.347 3.556-.17 5.2.512 1.645.681 3.05 1.835 4.04 3.315C20.471 8.48 21 10.22 21 12c0 2.387-.948 4.676-2.636 6.364C16.676 20.052 14.387 21 12 21z" data-v-5602b450=""></path></svg>
          <span className="ml-3 line-through">$6.99/m Membership Fee</span></p>
          <div className="ml-5 mb-4 pb-5 pt-2 bottom-cards">
          Coming Soon
          </div>
          </div>
          </div>

          </div>
          </div>
          

            {/* end */}
        </div>
    )
}

export default Home;
