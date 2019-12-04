import React from "react"
import { Link, grapql, useStaticQuery } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Logo from '../images/logo-v1-1.svg'
// import Photo1 from '../images/photo1.jpg'
// import Photo2 from '../images/photo2.jpg'
// import Photo3 from '../images/photo3.jpg'
// import Photo4 from '../images/photo4.jpg'
// import Photo5 from '../images/photo5.jpg'
import Icon1 from '../images/icon-capacity.svg'
import Icon2 from '../images/icon-nature.svg'
import Icon3 from '../images/icon-price.svg'
import Icon4 from '../images/icon-transport.svg'
import styles from "../styles/body.scss"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
  query{
    site{
      siteMetadata {
        title
      }
    }
  }
  `) 
  return(
  <Layout>
    <SEO title="Home" />
        <div className="grid menu">
      <Logo className="cc-Profile-Image column-xs-12 column-md-12"></Logo>
      <div className="column-xs-12 column-md-12">
        <div className="social">
          <a href="https://www.facebook.com/naturalneswiece/" className="facebook">
            <svg viewBox="0 0 35 40">
              <g>
                <path
                  d="M 17.996,32L 12,32 L 12,16 l-4,0 l0-5.514 l 4-0.002l-0.006-3.248C 11.993,2.737, 13.213,0, 18.512,0l 4.412,0 l0,5.515 l-2.757,0 c-2.063,0-2.163,0.77-2.163,2.209l-0.008,2.76l 4.959,0 l-0.585,5.514L 18,16L 17.996,32z">
                </path>
              </g>
            </svg>
          </a>
          <a href="https://www.instagram.com/naturalneswiece/" className="Instagram">
            <svg viewBox="0 0 40 40">
              <g fill="none">
                <rect />
                <path
                  d="M27.5 5c1.988 0 3.872.787 5.297 2.203A7.433 7.433 0 0 1 35 12.5v15a7.488 7.488 0 0 1-2.203 5.297A7.433 7.433 0 0 1 27.5 35h-15a7.488 7.488 0 0 1-5.297-2.203A7.433 7.433 0 0 1 5 27.5v-15c0-1.988.787-3.872 2.203-5.297A7.433 7.433 0 0 1 12.5 5h15zm0-3h-15C6.725 2 2 6.725 2 12.5v15C2 33.275 6.725 38 12.5 38h15C33.275 38 38 33.275 38 27.5v-15C38 6.725 33.275 2 27.5 2z"
                  fill="#000"  />
                <path
                  d="M29.75 12.5a2.245 2.245 0 0 1-2.25-2.25 2.25 2.25 0 1 1 2.25 2.25zM20 14c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6 2.69-6 6-6zm0-3c-4.969 0-9 4.031-9 9s4.031 9 9 9 9-4.031 9-9-4.031-9-9-9z"
                  fill="#000"  />
              </g>
            </svg>
          </a>
        </div>
      </div>
    </div>
    <div className="container">
      <div className="grid product">
        <div className="column-xs-12 column-md-7">
          <div className="product-gallery">
            <div className="product-image">
              <Image />
            </div>
            <ul className="image-list">
              <li className="image-item"></li>
              <li className="image-item"></li>
              <li className="image-item"></li>
            </ul>
          </div>
        </div>
        <div className="column-xs-12 column-md-5">
          <h1>Świece ręcznie robione </h1>
          <h2>w cenie od 40 PLN</h2>
          <div className="description">
            <p>Świece Sojowe robione są ręcznie z Naturalnego czystego w 100% wosku sojowego i naturalnych olejków zapachowych. Knoty są z czystej, ekologicznej bawełny
            </p>
            
            <p>
              Świece sojowe są bezpieczne dla alergików, astmatyków i dzieci. Gdy Świeca się pali nie wydziela ona żadnych szkodliwych substancji. Wosk Sojowy spala się wolno Nasze świece 120 ml palą się około 20h.</p>
            <p>
              Świece są Naturalne i zdrowe dają efekt pięknego zapachu. Będą pasowały również jako dodatek do wnętrz i świetny pomysł na prezent.
            </p>
          </div>
          <button className="add-to-cart">Zapytaj o ofertę</button>
        </div>
      </div>
      <div className="grid related-products">
        <div className="column-xs-12">
          <h3>Inne propozycje z tej serii</h3>
        </div>
        <div className="column-xs-12 column-md-6">
          {/* <Photo5 /> */}
          <h4>Figa z wanilią</h4>
          <p className="price">40 PLN</p>
        </div>
        <div className="column-xs-12 column-md-6">
          {/* <Photo5 /> */}
          <h4>Drzewo sandałowe z wanilii</h4>
          <p className="price">40 PLN</p>
        </div>
      </div>

      <div className="grid offer-box">
        <div className="offer-block icon-capacity column-xs-6 column-md-3 wow animated pulse" data-wow-duration="1s"
          data-wow-delay="0s">
          <Icon1 />
          <h4>Pojemność 120 ml</h4>

        </div>
        <div className="offer-block column-xs-6 column-md-3 wow animated pulse" data-wow-duration="1s" data-wow-delay="1s">
          <Icon2 />
          <h4>Promocyjna cena</h4>

        </div>
        <div className="offer-block column-xs-6 column-md-3 wow animated tada" data-wow-duration="1s" data-wow-delay="2s">
          <Icon4 />
          <h4>Przesyłka gratis*</h4>

        </div>
        <div className="offer-block column-xs-6 column-md-3 wow animated pulse" data-wow-duration="1s" data-wow-delay="3s">
          <Icon3 />
          <h4>Naturalny wosk sojowy</h4>
        </div>

      </div>
      
      <div className="aster1 column-xs12 column-md-12">
        <p>przy zamówieniu powyżej 100 PLN</p>
      </div>
      <div className="b2 column-xs12 column-md-12">
        <button className="add-to-cart">Zarezerwuj swoje zapachy</button>
      </div>
    </div>
    <Link to="/page-2/">{data.site.siteMetadata.title}</Link>
  </Layout>
  )
  }

export default IndexPage
