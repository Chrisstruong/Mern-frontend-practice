import { Link } from "react-router-dom"
import '../styles/header.css';


function Header(props) {
    return (
        <header style={{ height: "480px", overflow: 'hidden' }}>
            <nav className="nav">
                <Link to="/">
                    <img style={{ width: "100%" }} src="https://media.istockphoto.com/photos/group-portrait-of-a-creative-business-team-standing-outdoors-three-picture-id1146473249?b=1&k=20&m=1146473249&s=612x612&w=0&h=-q1guVCuei7X3BFKwWC2bLUOX8BeIaC04pG5s_xfn_c=" />
                </Link>
                <div>People App</div>
            </nav>
            <img style={{width:"100%"}} src="...your header image"/>
        </header>
    )
}

export default Header