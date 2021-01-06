import React from 'react';
import {
Container,
Segment,
} from 'semantic-ui-react'

import PageHeader from '../components/PageHeader';
import PageFooter from '../components/PageFooter';
import { InlineWidget } from "react-calendly";
import {
    Link
} from 'react-router-dom'

class Booking extends React.Component {
    render() {
        return (
            <div className='Booking'>
                <LayoutContainer />
            </div>
        )
    }
}

class LayoutContainer extends React.Component {
    render() {
        return (
            <div className='LayoutContainer'>
                <PageHeader />
                <PageContent />
                <PageFooter />
            </div>
        )
    }
}

class PageContent extends React.Component {
    render() {
        return(
            <Calendly />
        )
    }
}

class Calendly extends React.Component {
    componentDidMount() {
      const head = document.querySelector('head');
      const script = document.createElement('script');
      script.setAttribute('src',  'https://assets.calendly.com/assets/external/widget.js');
      head.appendChild(script);
    }
    componentWillUnmount() {
      
    }
    render(){
      return (
        <div>
          <div id="schedule_form">
            <div 
              className="calendly-inline-widget"
              data-url="https://calendly.com/chwong1996?hide_gdpr_banner=1"
              style={{ minWidth: '320px', height: '580px' }} />
          </div>
        </div>
      );
    }
  }

export default Booking