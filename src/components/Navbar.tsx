import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <ul className='flex p-2'>
            <li className='mx-6 my-4 text-white p-2 bg-black '><Link to={"/"}>All</Link></li>
            <li className='mx-6 my-4 text-white p-2 bg-black '><Link to={"/?todos=active"}>Active</Link></li>
            <li className='mx-6 my-4 text-white p-2 bg-black '><Link to={"/?todos=completed"}>Completed</Link></li>

        </ul>
    </div>
  )
}

export default Navbar