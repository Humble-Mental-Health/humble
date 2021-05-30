import React from 'react'
import './Suggested.css'

import SuggestedMainTrending from '../../Components/Suggested/SuggestedComponents/SuggestedMainTrending/SuggestedMainTrending'
import SuggestedGroupTrending from '../../Components/Suggested/SuggestedComponents/SuggestedGroupTrending/SuggestedGroupTrending'



function Suggested() {
    return (
        <div className='suggested'>
                <SuggestedMainTrending/>
                <SuggestedGroupTrending/>
        </div>
    )
}

export default Suggested
 