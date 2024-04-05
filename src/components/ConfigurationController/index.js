// Write your code here
import ConfigurationContext from '../../context/ConfigurationContext'
import './index.css'

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        showContent,
        showLeftNavbar,
        showRightNavbar,
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
      } = value
      const onContent = event => {
        console.log(1)
        onToggleShowContent(event.target.value)
      }
      const onLeftNavbar = event => {
        console.log(2)
        onToggleShowLeftNavbar(event.target.value)
      }
      const onRightNavbar = event => {
        console.log(3)
        onToggleShowRightNavbar(event.target.value)
      }
      return (
        <div className="Configuration_bgContainer">
          <h1 className="Configuration_heading">Layout</h1>
          <div>
            <input
              type="checkbox"
              id="content"
              className="Configuration_input"
              checked={showContent}
              onChange={onContent}
            />
            <label htmlFor="content" className="Configuration_label">
              Content
            </label>
          </div>
          <div>
            <input
              type="checkbox"
              id="LeftNavbar"
              className="Configuration_input"
              checked={showLeftNavbar}
              onChange={onLeftNavbar}
            />
            <label htmlFor="LeftNavbar" className="Configuration_label">
              Left Navbar
            </label>
          </div>
          <div>
            <input
              type="checkbox"
              id="rightNavbar"
              className="Configuration_input"
              checked={showRightNavbar}
              onChange={onRightNavbar}
            />
            <label htmlFor="rightNavbar" className="Configuration_label">
              Right Navbar
            </label>
          </div>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)
export default ConfigurationController
