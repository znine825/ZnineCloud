import './MDocs.css'
import Header from './../Components/Header/Header.jsx'
import Background from './../Components/Background/Background.jsx'

function MDocs() {

    return (
        <div>
            <div className = 'MD_header'><Header where = {4} /></div>
            <Background className = 'MD_Background'/>
        </div>
    )
}

export default MDocs