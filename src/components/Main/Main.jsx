import React from 'react'
import './Main.css'
import { assets } from '../../assets/assets'
import { useContext } from 'react'
import { Context } from '../../context/Context'

const Main = () =>{

    const {onSent, recentPrompt, showResult, loading, resultData, setInput, input} = useContext(Context)

    const handleCardClick = (text) => {
        setInput(text); // Set input value
        onSent(text); // Send input immediately
    };

    return(
      
      <div className='main'>

            <div className="nav">
                <p>Gemini</p>
                {/* <p>ABBKaRo</p> */}
                <img src={assets.user_icon} alt="" />
            </div>

            <div className="main-container">

                {!showResult
                ?
                <>
                
                <div className="greet">
                    <p><span>Hello, Avinash.</span></p>
                     <p>How can I Help You?</p>
                    {/* <p><span>Hello, User.</span></p>
                    <p>Welcome To ABBKaRo <br />The Finest Content Detector</p> */}
                </div>

                <div className="cards">

                        <div className="card" onClick={() => handleCardClick("Suggest some new courses")}>
                            <p>Suggest some new courses</p>
                            {/* <p>Stay Compliant with IT Laws and Digital Safety Regulations in India!</p> */}
                            <img src={assets.code_icon} alt="" />
                        </div>
                        
                        <div className="card" onClick={() => handleCardClick("Test my knowledge")}>
                            <p>Test my knowledge</p>
                            {/* <p>Are you aware of the legal and ethical guidelines for sharing content on social media?</p> */}
                            <img src={assets.bulb_icon} alt="" />
                        </div>
                        
                        <div className="card" onClick={() => handleCardClick("Suggest a roadmap to Aruku Valley in Visakhapatnam")}>
                            <p>Suggest a roadmap to Aruku</p>
                            {/* <p>Would you like to check if your content complies with IT laws and platform policies?</p> */}
                            <img src={assets.compass_icon} alt="" />
                        </div>
                        
                        <div className="card" onClick={() => handleCardClick("Suggest places to visit in Visakhapatnam")}>
                            <p>Suggest places to visit in Visakhapatnam</p>
                            {/* <p>The consequences of sharing fake news, hate speech, or sensitive data online?</p> */}
                            <img src={assets.message_icon} alt="" />
                        </div>

                </div>

                
                </>: <div className="result">
                    <div className="result-title">
                        <img src={assets.user_icon} alt="" />
                        <p>{recentPrompt}</p>
                    </div>
                    <div className="result-data">
                        <img src={assets.gemini_icon} alt="" />
                        {loading
                            ?<div className="loader">
                                    <hr />
                                    <hr />
                                    <hr />
                            </div>

                        
                            :<p dangerouslySetInnerHTML={{__html:resultData}} ></p>
                        }
                    </div>
                </div>
                }

                <div className="main-bottom">
                    <div className="search-box">
                        <input onChange={(e) => setInput(e.target.value)} value={input}  type="text" placeholder='Enter a prompt here'/>
                        <div>
                            <img src={assets.gallery_icon} alt="" />
                            <img src={assets.mic_icon} alt="" />
                            {input?<img onClick={() => onSent()} src={assets.send_icon} alt="" />:null}
                        </div>
                    </div>
                    <p className="bottom-info">
                        Gemini may display inaccurate info, so double-check the responses.
                    </p>
                </div>

            </div>

      </div>
    
    )
  }
  
  export default Main