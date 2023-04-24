import Image4 from '../../public/4. Designer Desk 2.svg'
import Image5 from  '../../public/5. Diversity Unity-2.svg'
import Image from 'next/image'
import styles from '@/styles/Login.module.css'
import { useState } from 'react'

export default function Login(){
    const [login, setLogin] = useState(true)
    return <div className={styles.container}>
        <div className={styles.header}><h1>{login ? "Login" : "Register"}</h1></div>
    <ul className="nav nav-tabs border-1 border-dark" id="myTab" role="tablist">
  <li className="nav-item" role="presentation">
    <button className={"nav-link active " + styles.buttons}  onClick={() => setLogin(true)} id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true">Login</button>
  </li>
  <li className="nav-item" role="presentation">
    <button className={"nav-link " + styles.buttons}  onClick={() => setLogin(false)} id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile-tab-pane" type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false">Sign-Up</button>
  </li>
  </ul>
<div className={"tab-content " + styles.login} id="myTabContent">

  {/* Tab Info   */}
  <div className="tab-pane fade show active" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabindex="0">
  <div className={"card mb-3 " + styles.cards}>
  <div className="row g-0">
    <div className="col-md-4">
      <Image src={Image4} className="img-fluid rounded-start" alt="..."/>
    </div>
    <div className="col-md-8">
    <div className="mb-3 ms-5">
  <label htmlFor="Email" className="form-label">Email or Username</label>
  <input type="email" className="form-control" id="Email" placeholder="name@example.com"/>
</div>
<div className="mb-3 ms-5">
  <label htmlFor="Password" className="form-label">Password</label>
  <input className="form-control" id="Password" placeholder='Password' />
</div>
<input type="button" className="btn btn-dark mt-5" value="Login" />
    </div>
  </div>
</div>
  </div>
  
  {/* Tab Info   */}
  <div className="tab-pane fade" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabIndex="0">
  <div className={"card mb-3 " + styles.cards}>
  <div className="row g-0">
    <div className="col-md-4">
      <Image src={Image5} className="img-fluid rounded-start me-5" alt="..."/>
    </div>
    <div className="col-md-8">
    <div className="mb-3 ms-5">
  <label htmlFor="Username" className="form-label">Username</label>
  <input type="email" className="form-control" id="Username" placeholder="Username"/>
</div>
<div className="mb-3  ms-5">
  <label htmlFor="Reg_Email" className="form-label">Email</label>
  <input type="email" className="form-control" id="Reg_Email" placeholder="name@example.com"/>
</div>
<div className="mb-3  ms-5">
  <label htmlFor="Reg_Password" className="form-label">Password</label>
  <input className="form-control" id="Reg_Password" placeholder='Password'></input>
</div>
<input type="button" className="btn btn-dark" value="Sign-Up" />

    </div>
  </div>
</div>
  </div>
  
</div>
</div>
}