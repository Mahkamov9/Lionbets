import './navbar.css' ;

import navLogo from '../../assets/img/navLogo.png';


const Navbar =()=> {
    return(
        <div className="navbar">
            <div className="container">
                <ul className="nav-list">
                    <li className="nav-list-item">
                        <img src={navLogo} alt="Logo" />
                    </li>

                    <li className="nav-list-item">
                        <ul className="nav-links">
                            <li className='nav-links-box' ><a  className="nav-links-item" href="#">Mahsulotlar</a></li>
                            <li className='nav-links-box' ><a  className="nav-links-item" href="#">Biz haqimizda</a></li>
                            <li className='nav-links-box' ><a  className="nav-links-item" href="#">Lion yangiliklari</a></li>
                            <li className='nav-links-box' ><a  className="nav-links-item" href="#">Ishlab chiqarish</a></li>
                        </ul>
                    </li>
                    <li className="nav-list-item">
                        <ul className="nav-btn">
                            <li className="nav-btn-item"><a className='nav-btn-link' href="">+998 93 191 97 37</a></li>
                            <li className="nav-btn-item"><select className='nav-language'><option>UZ</option><option>RU</option><option>ENG</option></select></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    )
}


export default Navbar ;
