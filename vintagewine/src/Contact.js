import React, {useEffect} from "react";
import SubpageBanner from "./components/SubpageBanner";
import { FaPhoneAlt, FaEnvelope, FaFax   } from "react-icons/fa";
function Contact(){
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    return (
        <>
           <SubpageBanner name="Contact" indexpage="Home" indexvisit="/" activepage="Contact" />
           <section className="total-body sub-pages py-5 d-block">
               <div className="container">
                   <div className="row ">
                       <div className="col-lg-5">
                          <div className="left-sec-div1 cm-text-n">
                                <h6 className=""> Let's Talk </h6>
                                <h2> We Are Here To Help You </h2>
                                <ul className="list-unstyled mt-4">
                                    <li className="d-flex">
                                    <span  className="icon-c"> <FaPhoneAlt/> </span> 
                                    <span className="text-c">  Call Us 
                                        <small className="d-block"> +990-123-4567 </small> 
                                    </span>
                                    </li>
                                    <li className="d-flex">
                                    <span  className="icon-c"> <FaEnvelope/> </span> 
                                    <span className="text-c">  
                                        Email: 
                                        <small className="d-block"> support@rdememe.com </small> 
                                    </span>
                                    </li>
                                    <li className="d-flex">
                                    <span  className="icon-c"> <FaFax/> </span> 
                                    <span className="text-c"> Fax: 
                                        <small className="d-block"> +990-123-4567 </small> 
                                    </span>
                                    </li>
                                </ul>
                          </div>
                       </div>
                       <div className="col-lg-7">
                            <div className="contact-form-div">
                                <h6 className="">Send us a message</h6>
                                <h2> Fill The Form Below </h2>
                                <div className="row mt-5 mt-md-0 mt-lg-0 mt-xl-5">
                                    <div className="col-lg-6">
                                        <input type="text" className="form-control" placeholder="Name"/>
                                    </div>
                                    <div className="col-lg-6">
                                        <input type="text" className="form-control" placeholder="Email"/>
                                    </div>
                                    <div className="col-lg-6">
                                        <input type="text" className="form-control" placeholder="Phone"/>
                                    </div>
                                    <div className="col-lg-6">
                                        <input type="text" className="form-control" placeholder="Subject"/>
                                    </div>
                                    <div className="col-lg-12">
                                        <textarea className="form-control mesg-fild" placeholder="Message"></textarea>
                                    </div>
                                    <div className="col-lg-12">
                                        <input type="submit" className="btn subimt-message" value="Submit" />
                                    </div>
                                </div>
                            </div>
                       </div>
                   </div>
               </div>
           </section>
        </>
    );
}
export default Contact;