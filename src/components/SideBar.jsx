import React from 'react'

function SideBar(props) {

 const {handleToggleModal} = props

  return (
    <div className='sidebar'>
        <div onClick={handleToggleModal} className="bgOverlay"></div>
        <div className="sidebarContents">
        <h2>The Brutal Martian Landscape</h2>
        <div>
            <p>Description</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor officia aspernatur quaerat reprehenderit alias veniam tempora eligendi, </p>
        </div>
        <button onClick={handleToggleModal}>
        <i className="fa-solid fa-arrow-right"></i>
        </button>
        </div>
    </div>
  )
}

export default SideBar