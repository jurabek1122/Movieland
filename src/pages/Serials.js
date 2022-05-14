import SerialCard from '../components/SerialCard';
import { Link } from 'react-router-dom';


const Serials = ({ serials }) => {

    return (
        <div className='cards'>
            {serials?.map((serial) => {
                return <Link key={serial.id} to={'/serial/' + serial.id}><SerialCard key={serial.id} serial={serial} /></Link>;
            })}
        </div>
    )
}

export default Serials;