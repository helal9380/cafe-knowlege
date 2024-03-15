
import PropTypes from 'prop-types';
const Bookmarks = ({blog}) => {
    

    return (
        <div className="w-2/6">
            <div className="bg-gray-200 p-5 rounded-lg">
                <h2 className="text-xl font-semibold">Book marks:{blog.length}</h2>
                <div>
                {
                    // eslint-disable-next-line react/jsx-key
                    blog.map((b) => <div className="bg-white mt-2 rounded p-2">
                        <h2 className='font-semibold'>{b.title}</h2>
                    </div>)
                }
                </div>
            </div>
        </div>
    );
};
Bookmarks.propTypes = {
    blog: PropTypes.array.isRequired
}
export default Bookmarks;