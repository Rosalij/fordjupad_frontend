import React from 'react'
interface HeaderComponentProps {
    title: string;
}
function HeaderComponent({title} : HeaderComponentProps) {
  return (
    <div>
      <div className="banner">
      <img src="gulfer-ergin-LUGuCtvlk1Q-unsplash.jpg" alt="books" width="100%" style={{borderRadius:"5em"}}/>
    <h1>{title}</h1>
    </div>
    </div>
  )
}

export default HeaderComponent
