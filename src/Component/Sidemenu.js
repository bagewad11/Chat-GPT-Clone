import React from 'react'
import gptlogo from '../imgs/chatgpt.svg'

const Sidemenu = () => {
  return (
    <>
    <div className="App">
      <div className="sideBar">
        <div className="upperSide">
        <div className="upperSidetop"><img src={gptlogo} alt="" className="logo" /><span className="brand">ChatGPT</span></div>
            <button className="midbtn"><img src="" alt="" className="addBtn" />New Chat</button>
            <div className="upperSideBottom">
                <button className="query"><img src="" alt="" />what is Programing</button>
                <button className="query"><img src="" alt="" />what is Programing</button>
            </div>
        </div>
        <div className="lowerSide"></div>
      </div>
      </div>
    </>
  )
}

export default Sidemenu
