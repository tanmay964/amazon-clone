import React from 'react'
import SearchIcon from '@material-ui/icons/Search'
import CartIcon from '@material-ui/icons/AddShoppingCartOutlined'
import {Link} from 'react-router-dom'
import { useStateValue } from './StateProvider'
import {auth} from './firebase'
function Header() {
    const[{basket, user}, dispatch] = useStateValue()

    const handleAuthenticaton = () => {
        if (user) {
          auth.signOut();
        }
      }
    return (
        <div className = "header">
         <Link to ="/">
         <img className = "header-logo"
            src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"/></Link>   
        
        <div className ="header-searchOption">
                <select>
                    <option value = "1">All</option>
                    <option value = "1">Books</option>
                </select>
        </div>
        <div className = "header-search">
            <input className = "header-searchInput" type="text">

            </input>
            <SearchIcon className = "header-searchIcon"></SearchIcon>
            </div>
        <div className = "header-nav">
            <Link to= "/signin" style={{ textDecoration: 'none' }}>
            <div onClick={handleAuthenticaton} className = "header-option">

                
                <span className = "header-lineOne">
                    Hello {user?user.email : "Guest"}
                </span>
                
                <span className = "header-lineTwo">
                    {user ? "Sign Out" : "Sign In"}
                </span>
                </div>
            </Link>
            
                
               
            
            <div className = "header-option">
            <span className = "header-lineOne">
                    Returns
                </span>
                <span className = "header-lineTwo">
                    & Orders
                </span>
                </div>
            <div className = "header-option">
            <span className = "header-lineOne">
                    Your
                </span>
            <span className = "header-lineTwo">
                    Prime
            </span>
            </div>
            <Link to="/checkout" style={{ textDecoration: 'none' }}>
            <div className = "header-optionCart">
                <CartIcon/>
                    <span className = "header-optionTwo header-optionCartCount">{basket?.length}</span>
            </div>  
            </Link>
                  
        </div>
    </div>
    )
}

export default Header
