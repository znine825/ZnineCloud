import './MExperience.css'
import Header from './../Components/Header/Header.jsx'
import Background from './../Components/Background/Background.jsx'

function MExperience() {

    return (
        <div>
            <div className = 'ME_header'><Header where = {2} /></div>
            <Background className = 'ME_Background'/>
        </div>
    )
}

export default MExperience