import React from 'react';
// import '';
import DiscussionNavbar from './DiscussionArea/DiscussionNavbar/DiscussionNavbar';
import DiscussionArea from './DiscussionArea/DiscussionArea';
import TopicArea from './TopicArea/TopicArea';


export default function InnerHome() {
  return (
    <>
    <div className='Home row'>
       
        {/* Discussion Area */}
        {/* Left side of the home page */}
        <div className='left col-sm-3 scrolable scrollbar-primary force-overflow'>
        <TopicArea/>


        </div>

        <div className='center  col-sm-9   scrollbar-primary force-overflow'>
          <DiscussionNavbar/>
          
         
        
     
        </div>
    </div>
    </>
  )
}
