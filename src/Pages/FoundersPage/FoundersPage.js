import React from 'react'
import Founder from '../../Container/Founder/Founder'
import {motion} from 'framer-motion'

function TeamPage() {
    return (
        <motion.div initial={{ opacity:0 }} animate={{ opacity:1 }} exit={{ opacity:0 }} transition={{ duration: 0.5}}>
            <div>
                {/* <Nav /> */}
                <Founder/>
                {/* <Footer /> */}
            </div>
        </motion.div>
    )
}

export default TeamPage
