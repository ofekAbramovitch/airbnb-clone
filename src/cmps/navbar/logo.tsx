import { useNavigate } from "react-router-dom"
import logo from '../../assets/img/logo/logo.svg'

export default function Logo() {
    const navigate = useNavigate()

    function onLogo() {
        navigate('/')
    }

    return (
        <img src={logo} alt="Logo" className="logo" onClick={onLogo} />
    )
}