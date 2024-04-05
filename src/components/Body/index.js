// Write your code here
import './index.css'
import ConfigurationContext from '../../context/ConfigurationContext'

const Body = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {showContent, showLeftNavbar, showRightNavbar} = value
      return (
        <div className="body_bgContainer">
          {showLeftNavbar && (
            <div className="body_leftNavBar">
              <h1 className="body_leftNavBar_heading">Left Navbar Menu</h1>
              <ul className="body_leftNavBar_itemscontainer">
                <li className="body_leftNavBar_itemslist">item 1</li>
                <li className="body_leftNavBar_itemslist">item 2</li>
                <li className="body_leftNavBar_itemslist">item 3</li>
                <li className="body_leftNavBar_itemslist">item 4</li>
              </ul>
            </div>
          )}
          {showContent && (
            <div className="body_content">
              <h1 className="body_content_heading">Content</h1>
              <p className="body_content_para">
                Lorem ipsum dolor sit amet,consectetur adipiscing elit sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim venium
              </p>
            </div>
          )}
          {showRightNavbar && (
            <div className="body_rightNavBar">
              <h1 className="body_rightNavBar_heading">Right NavBar</h1>
              <div className="body_rightNavBar_itemsContainer">
                <p className="body_rightNavBar_ad">Ad 1</p>
                <p className="body_rightNavBar_ad">Ad 2</p>
              </div>
            </div>
          )}
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)
export default Body
