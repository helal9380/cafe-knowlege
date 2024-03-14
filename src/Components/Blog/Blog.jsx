
import { FaBookmark } from 'react-icons/fa';
import PropTypes from 'prop-types';
const Blog = ({blog, handleBookMarks}) => {
    console.log(blog)
    const {cover, title,posted_date, reading_time,author,author_img} = blog;
    return (
        <div>
            <img className='rounded-lg w-full' src={cover} alt="" />
            <span>{posted_date}</span>
            <h2 className='text-2xl font-bold my-4'>{title}</h2>
            <div className='flex justify-between items-center'>
                <div className='flex gap-2 items-center'>
                    <img className='w-14' src={author_img} alt="" />
                    <h4>{author}</h4>
                </div>
                <div className='flex items-center'>
                    <h4 className='font-semibold'>reading time {reading_time} minite </h4>
                    <button
                    onClick={() => handleBookMarks(blog)}
                    className='ml-4 text-red-500'>
                        <FaBookmark></FaBookmark>
                    </button>
                </div>
            </div>
            <button className='border-2 border-black rounded mt-4 mb-10 py-2 px-4 text-red-600'>Read in time</button>
        </div>
    );
};
Blog.propTypes ={
    blog: PropTypes.object.isRequired,
    handleBookMarks: PropTypes.func.isRequired,
  
}
export default Blog;