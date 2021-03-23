import React from 'react';
import PageHeader from '../components/PageHeader';
import PageFooter from '../components/PageFooter';


class Booking extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: null
        }
    }
    
    componentDidMount () {
        this.setState({
            user: this.props.match.params.user
        });
        
    }
    
    render() {
        return (
            <div className='Booking' style={{backgroundColor: '#3c95bd', height: '100vh'}}>
                <LayoutContainer user={this.state.user}/>
            </div>
        );
    }
}

class LayoutContainer extends React.Component {
    render() {
        return (
            <div className='LayoutContainer' >
                <PageHeader />
                <PageContent user={this.props.user}/>
                <PageFooter />
            </div>
        )
    }
}

class PageContent extends React.Component {
    render() {
        return(
            <div>
            <Calendly user={this.props.user}/>
            <UserReview />
            </div>
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

    render() {
        var calendlylink = 'https://calendly.com/' + this.props.user + '?hide_gdpr_banner=1'
        return (
            <div>
              <div id="schedule_form">
                <div 
                  className="calendly-inline-widget"
                  data-url = {calendlylink}
                  style={{ minWidth: '320px', height: '920px' }} />
              </div>
            </div>
        );
    }
}

class UserReview extends React.Component {
    render() {
        return(
            <h1>User Reviews</h1>
        );
    }
}

export default Booking