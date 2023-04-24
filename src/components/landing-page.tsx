import styles from '@/styles/Landing.module.css'
import Image from 'next/image'
import image1 from '../../public/1. Smart People 1.svg'
import image2 from '../../public/2. Being Creative 1.svg'
import image3 from '../../public/3. Order Completed 2.svg'
import image4 from '../../public/4. Designer Desk 2.svg'
import image5 from '../../public/5. Diversity Unity-2.svg'
import image6 from '../../public/5. Diversity Unity.svg'
import { Dispatch, SetStateAction } from 'react'
import { type } from 'os'

type props = {
    setPage: Dispatch<SetStateAction<string>>;
    data: string[][]
}

export default function Landing({setPage, data}: props){
    return <div id="carouselExampleDark" className={"carousel carousel-dark slide " + styles.container}>
    <div className="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
    <div className={"carousel-inner " + styles.innerContainer}>
      <div className={"carousel-item active " + styles.block} data-bs-interval="10000">
        <Image src={image1} className="d-block" alt="..."/>
        <div className={"carousel-caption " + styles.details}>
          <h5>{data[0][0]}</h5>
          <p>{data[0][1]}</p>
          <button type="button" onClick={() => setPage(() => "login")} className="btn btn-dark">Get Started</button>
        </div>
      </div>
      <div className={"carousel-item " + styles.block}  data-bs-interval="2000">
        <Image src={image2} className="d-block" alt="..."/>
        <div className={"carousel-caption " + styles.details}>
          <h5>{data[1][0]}</h5>
          <p>{data[1][1]}</p>
          <button type="button" onClick={() => setPage(() => "login")} className="btn btn-dark">Get Started</button>
        </div>
      </div>
      <div className={"carousel-item " + styles.block} >
        <Image src={image3} className="d-block" alt="..."/>
        <div className={"carousel-caption " + styles.details}>
          <h5>{data[2][0]}</h5>
          <p>{data[2][1]}</p>
          <button type="button" onClick={() => setPage(() => "login")} className="btn btn-dark">Get Started</button>
        </div>
      </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>
}