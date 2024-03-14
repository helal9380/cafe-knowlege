
import img from '../../assets/profile.png'
const Header = () => {
    return (
        <div className='max-w-screen-lg mx-auto border-b-2 mt-5'>
            <div className='flex justify-between items-center py-3'>
                <h2 className="text-3xl font-bold">Cafe knowlege</h2>
                <img src={img} alt="" />
            </div>
        </div>
    );
};

export default Header;