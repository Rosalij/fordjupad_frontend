import React from 'react'  

   interface BookComponentProps {
    title: string,
    author: string,
    read: boolean,
    ISBN: number
}


export default function BookComponent({title, author, read, ISBN} : BookComponentProps) {

  return (
    <div>
  <section>
  <h1 style={{color: "green", fontFamily:"monospace"}}>Contactcards</h1>
  <p>{title} by {author}</p>
  <p>{read}</p>
  <p>{ISBN}</p>
 </section>
    </div>
  )
}
