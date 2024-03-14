import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from 'prop-types';
const Bloges = ({handleBookMarks}) => {
    const [bloges, setBloges] = useState([])
    

    useEffect(() => {
        fetch('blogs.json')
        .then(res => res.json())
        .then(data => setBloges(data))
    }, [])

    return (
        <div className="w-4/6">
            {
                bloges.map(blog => <Blog
                key={blog.id} blog={blog} 
                handleBookMarks={handleBookMarks}
                ></Blog>)
            }
        </div>
    );
};
Bloges.propTypes = {
    handleBookMarks: PropTypes.func.isRequired,
}
export default Bloges;