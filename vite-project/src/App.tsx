

import './App.css'
import BooksComponent from './components/BooksComponent.tsx'
import HeaderComponent from './components/HeaderComponent.tsx'
import FooterComponent from './components/FooterComponent.tsx'


function App() {

  //BookArray
  const BookArr = [{
    title: "Lord of the Rings",
    author: "JR. Tolkien",
    read: true,
    ISBN: 1231323
  },
  {
    title: "Pippi Långstrump",
    author: "Astrid Lindgren",
    read: false,
    ISBN: 1231556
  },
  {
    title: "Into The Wild",
    author: "John Krakauer",
    read: true,
    ISBN: 12323556
  },
  {
    title: "Harry Potter and the chamber of secrets",
    author: "JK. Rowling",
    read: false,
    ISBN: 1212435556
  },
  {
    title: "The Hunger Games",
    author: "Jennifer Lawrence",
    read: true,
    ISBN: 1231512556
  }
  ]

  return ( //components, main point of app
    //prop for title
    <> <HeaderComponent title={"My Book App"} />
      <br />
      {BookArr.map((book) => ( //Map Book array to write out books, using interface and props for books
        <BooksComponent title={book.title} author={book.author} read={book.read} ISBN={book.ISBN} />
      ))}
    
      <FooterComponent /> 
  </>
  )
}


export default App
