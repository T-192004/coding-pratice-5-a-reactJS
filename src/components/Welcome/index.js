// Write your code here
import './index.css'
import {Component} from 'react'

class Welcome extends Component {
  state = {isSubscribed: true, isSubscribedStatus: 'Subscribe'}

  onSubscribe = () => {
    const {isSubscribed, isSubscribedStatus} = this.state
    console.log(isSubscribed)
    console.log(isSubscribedStatus)
    if (isSubscribed) {
      this.setState(prevState => ({
        isSubscribed: false,
        isSubscribedStatus: 'Subscribe',
      }))
    } else {
      this.setState(prevState => ({
        isSubscribed: true,
        isSubscribedStatus: 'Subscribed',
      }))
    }
  }

  render() {
    const {isSubscribedStatus} = this.state
    return (
      <div className="container">
        <h1 className="heading">Welcome</h1>
        <p className="description">Thank you! Happy Learning</p>
        <button className="btn" type="button" onClick={this.onSubscribe}>
          {isSubscribedStatus}
        </button>
      </div>
    )
  }
}

export default Welcome
