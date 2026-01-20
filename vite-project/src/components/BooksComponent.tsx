 
import "./BooksComponent.css"
//interface for book
   interface BookComponentProps {
    title: string,
    author: string,
    read: boolean,
    ISBN: number
}



export default function BookComponent({title, author, read, ISBN} : BookComponentProps) {
//book component with props
  return (
    <div>
  <section style= {{boxShadow: "2px 2px 5px"}}>
  <h1 style={{color: "grey", fontFamily:"monospace"}}>Book:</h1>
  <p>{title} by {author}</p>
  <p>Read: {read ? "Yes" : "No"}</p>
  <p>ISBN: {ISBN}</p>
 </section>
    </div>
  )
}
