import { useParams } from 'react-router-dom';
import './User.css'


export default function User(){

    const {name} = useParams()

   return (
    <>
    <h3 className='user'>User: {name}</h3>
    </> 
   ); 
}