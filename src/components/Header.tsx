import {Link} from 'react-router-dom'

export default function Header(){
    return(<>
    <h1 className='text-center my-3'><Link to="/">Spaceflight News</Link></h1>
    </>)
}