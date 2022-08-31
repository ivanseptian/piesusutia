import React, {useState} from 'react'

const ToTopButton = () => {
    const [visible, setVisible] = useState(false)
  
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300){
      setVisible(true)
    } 
    else if (scrolled <= 300){
      setVisible(false)
    }
  };
  
  const scrollToTop = () =>{
    window.scrollTo({
      top: 0
    });
  };
  
  window.addEventListener('scroll', toggleVisible);
  return (
    <a href="#" className="btn btn-secondary px-2 back-to-top" onClick={scrollToTop} style={{display: visible ? 'inline' : 'none'}}><i className="fa fa-angle-double-up"></i></a>
  )
}

export default ToTopButton