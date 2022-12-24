import React from 'react'
import './Header.css'
import Glass from '../Icons/Glass.svg'
import Cart from '../Icons/Cart.png'
import {Link} from 'react-router-dom'
import { useStateValue } from '../StateProvider'
import { signOut } from 'firebase/auth'
import { auth } from '../firebase'

function Header() {
  const [{user},dispatch] = useStateValue();
  const handelAuth = ()=>{
    if(user){
      signOut(auth)
    }
  }
  return (
    <div className='header'>
      <Link to='/' >
      <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOkuoaZhOPgeDFgR1A8ltOLR-Xjz-p0mbGcg&usqp=CAU' />
      </Link>
      <div className='header-search'>
        <input type='text' className='search-input'/>
        <img src={Glass} className='search-icon'/>
      </div>

      <div className='header-nav'>
        <Link to='/login'>
        <div className='header-option' onClick={handelAuth}>
            <span className='header-option-1'>Hello Guest</span>
            <span className='header-option-2'>{user?'Sign Out':
            'Sign In'}</span>
        </div>
        </Link>

        <div className='header-option'>
        <span className='header-option-1'>Returns</span>
        <span className='header-option-2'>&Orders</span>
        </div>

        <div className='header-option'>
        <span className='header-option-1'>Your</span>
        <span className='header-option-2'>Prime</span>
        </div>

        <div className='basket'>
            <Link to='/checkout'><img src={Cart} className='basket-icon'/></Link>
            <span>0</span>

        </div>

      </div>
    </div>
    )}

export default Header;
