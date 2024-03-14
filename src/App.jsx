
import { useState } from 'react'
import './App.css'
import Bloges from './Components/Blogs/Bloges'
import Bookmarks from './Components/Bookmarks/Bookmarks'
import Header from './Components/Header/Header'

function App() {
const [bookmark, setBookMark] = useState([])

const handleBookMarks = (blog) => {
  const newBook = [...bookmark, blog]
  setBookMark(newBook)
 
}
console.log(bookmark)
  return (
    <>
      <Header></Header>
      <div className='flex mt-5 max-w-screen-lg mx-auto gap-4'>
        <Bloges handleBookMarks={handleBookMarks}></Bloges>
        <Bookmarks blog={bookmark}></Bookmarks>
      </div>
    </>
  )
}

export default App
