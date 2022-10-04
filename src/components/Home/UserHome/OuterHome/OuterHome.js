import React from 'react';
import './OuterHome.css';
import DiscussionNavbar from '../InnerHome/DiscussionArea/DiscussionNavbar/DiscussionNavbar';
import DiscussionArea from '../InnerHome/DiscussionArea/DiscussionArea';
import TopicArea from '../InnerHome/TopicArea/TopicArea';

export default function OuterHome() {
  return (
    <div className='Home row'>
       
        {/* Discussion Area */}
        {/* Left side of the home page */}
        <div className='left col-sm-10 scrolable scrollbar-primary force-overflow'>
        <TopicArea/>


        </div>

        
    </div>
  )
}
