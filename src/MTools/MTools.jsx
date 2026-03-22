import './MTools.css'
import Header from './../Components/Header/Header.jsx'
import Background from './../Components/Background/Background.jsx'

function MTools() {

    return (
        <div>
            <div className = 'MT_header'><Header where = {3} /></div>
            <Background className = 'MT_Background'/>
        </div>
    )
}

export default MTools