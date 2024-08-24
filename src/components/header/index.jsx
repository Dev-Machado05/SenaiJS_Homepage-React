import './style.css'
import CompanyLogo from "../../assets/img/Company_Logo.svg"
import ChevrDown from "../../assets/img/Chevron Down.svg"

export default function Header() {
    return (
        <header>
            <img src={CompanyLogo} alt="" />
            <nav>
                <a href="">Link One</a>
                <a href="">Link Two</a>
                <a href="">Link Three</a>
                <a href=''>Link Four <img src={ChevrDown} alt="" /></a>    
            </nav>
            <button>Try it for free</button>
        </header>
    )
}