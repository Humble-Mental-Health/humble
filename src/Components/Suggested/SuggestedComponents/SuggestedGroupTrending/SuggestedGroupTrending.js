import React from 'react'
import BlogSuggested from '../../SuggestedSmallComponents/BlogSuggested/BlogSuggested'
import './SuggestedGroupTrending.css'

function SuggestedGroupTrending() {
    return (
        <div className='suggested__group__trending'>
            <BlogSuggested 
                photoUrl='https://images.unsplash.com/photo-1610014205112-051396496937?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1073&q=80'
                userName='Ved Vyapak' 
                topic='5 Must-Read Research in Image Processing Against COVID 19.' 
                date='Dec 23, 2020 · 5 min read' 
                postPhotoUrl='https://miro.medium.com/fit/c/125/125/1*YaE4Yj7H-1IyGHtwCBSIjw.png' />

            <BlogSuggested 
                photoUrl='https://miro.medium.com/fit/c/25/25/1*2dvTVo0Sra9GP7FQC-3N8Q.png'
                userName='Krissanawat Kaewsanmuang' 
                topic='Building a “Motivation Bot” with TensorFlow.js, Face Detection, and Emotion Classification.' 
                date='Sep 14, 2020 · 7 min read' 
                postPhotoUrl='https://miro.medium.com/fit/c/125/125/1*V8_txhw8VmtJoEbJNoa--g.jpeg' />

            <BlogSuggested 
                photoUrl='https://miro.medium.com/fit/c/25/25/1*2HK4fHNcE-fcuI5UdVxSkw.png'
                userName='MP Channels' 
                topic='MACHINE LEARNING BASED OBJECT RECOGNITION SYSTEM AS A BLIND AID' 
                date='Sep 2, 2020 · 5 min read' 
                postPhotoUrl='https://miro.medium.com/fit/c/125/125/1*lY3zY_AsH53ynKsMf2KubQ.jpeg' />

            <BlogSuggested 
                photoUrl='https://miro.medium.com/fit/c/25/25/1*hsrde_lUsLoxrMXy8Z7Jfg.jpeg'
                userName='Harsh Malra' 
                topic='Playing Tekken with OpenCV and Python' 
                date='Oct 19, 2020 · 5 min read' 
                postPhotoUrl='https://miro.medium.com/freeze/fit/c/125/125/1*Mb-SLTg0h6ppZjMZbo1nKQ.gif' />     
        </div>
    )
}

export default SuggestedGroupTrending
