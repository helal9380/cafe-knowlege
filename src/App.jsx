
import { useState } from 'react'
import './App.css'
import Bloges from './Components/Blogs/Bloges'
import Bookmarks from './Components/Bookmarks/Bookmarks'
import Header from './Components/Header/Header'

function App() {
const [bookmark, setBookMark] = useState([])

const handleBookMarks = (blog,id) => {
  console.log(id)
  const newId = bookmark.find(item => item.id == id)
  if(!newId) {
    setBookMark([...bookmark,blog])
  }
  else{
    alert('already exist')
  }
}

const deleteItem = (id) => {
  const deletId = bookmark.filter(item => item.id !== id);
  setBookMark(deletId)
}

  return (
    <>
      <Header></Header>
      <div className='flex mt-5 max-w-screen-lg mx-auto gap-4'>
        <Bloges handleBookMarks={handleBookMarks}></Bloges>
        <Bookmarks blog={bookmark} deleteItem={deleteItem}></Bookmarks>
      </div>
    </>
  )
}

export default App
