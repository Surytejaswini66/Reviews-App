// Write your code here
import React, { Component } from 'react';
import './index.css';

class ReviewsCarousel extends Component {
  state = {
    currentIndex: 0,
  };

  onClickLeftArrow = () => {
    this.setState(prevState => {
      if (prevState.currentIndex > 0) {
        return { currentIndex: prevState.currentIndex - 1 };
      }
      return { currentIndex: 0 };
    });
  };

  onClickRightArrow = () => {
    const { reviewsList } = this.props;
    this.setState(prevState => {
      if (prevState.currentIndex < reviewsList.length - 1) {
        return { currentIndex: prevState.currentIndex + 1 };
      }
      return { currentIndex: reviewsList.length - 1 };
    });
  };

  render() {
    const { reviewsList } = this.props;
    const { currentIndex } = this.state;
    const { imgUrl, username, companyName, description } = reviewsList[currentIndex];

    return (
      <div className="reviews-carousel-container">
        <h1 className="heading">Reviews</h1>
        <img src={imgUrl} alt={username} className="profile-image" />
        <p className="username">{username}</p>
        <p className="company-name">{companyName}</p>
        <p className="description">{description}</p>
        <div className="arrows-container">
          <button 
            type="button" 
            className="arrow-button" 
            onClick={this.onClickLeftArrow} 
            data-testid="leftArrow"
            style={{ cursor: currentIndex === 0 ? 'not-allowed' : 'pointer' }}
          >
            <img 
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png" 
              alt="left arrow" 
              className="arrow"
            />
          </button>
          <button 
            type="button" 
            className="arrow-button" 
            onClick={this.onClickRightArrow} 
            data-testid="rightArrow"
            style={{ cursor: currentIndex === reviewsList.length - 1 ? 'not-allowed' : 'pointer' }}
          >
            <img 
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png" 
              alt="right arrow" 
              className="arrow"
            />
          </button>
        </div>
      </div>
    );
  }
}

export default ReviewsCarousel;
