import {Component} from 'react'
import './index.css'

class EditableText extends Component {
  state = {userTxt: '', isEditable: false}

  handleOnChange = event => {
    this.setState({userTxt: event.target.value})
  }

  handleOnClickBtn = () => {
    this.setState(prevState => ({isEditable: !prevState.isEditable}))
  }

  render() {
    const {userTxt, isEditable} = this.state
    return (
      <div className="main-container">
        <div className="container">
          <h1>Editable Text Input</h1>
          <div className="input-and-btn-container">
            {isEditable ? (
              <p>{userTxt}</p>
            ) : (
              <input
                value={userTxt}
                type="text"
                onChange={this.handleOnChange}
              />
            )}
            <button
              onClick={this.handleOnClickBtn}
              className="save-btn"
              type="button"
            >
              {isEditable ? 'Edit' : 'Save'}
            </button>
          </div>
        </div>
      </div>
    )
  }
}
export default EditableText
