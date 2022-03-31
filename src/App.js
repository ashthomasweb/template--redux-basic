import logo from './logo.svg'
import './App.css'

// redux methods
import { connect } from 'react-redux'

// for use with dispatch connection method 4 & 5
import { bindActionCreators } from 'redux'

// for use with dispatch connection method 1, 2, 4, 5
// various actions from slices
import { setCurrentUser } from './redux/user/user.action'
import {
  setHTMLBackgroundColor,
  setFrameBackgroundColor,
} from './redux/display/display.action'

// for use with dispatch connection method 3
// import all actions as object for later destructuring
// import * as userActions from './redux/user/user.action'
// import * as displayActions from './redux/display/display.action'



function App(props) {
  return (
    <div className='App'>
      <header className='App-header' >
        <img
          style={{ backgroundColor: props.backgroundColor, zIndex: '0', borderRadius: '100%', pointerEvents: 'all' }}
          src={logo}
          onClick={props.clickTheImage}
          className='App-logo'
          alt='logo'
        />
        <div
          style={{
            zIndex: 1,
            padding: '15px 50px 50px 50px',
            backgroundColor: props.frameColor,
            borderRadius: '100%'
          }}>
          <p>
            Welcome, {props.currentUser}.
            <br />
            This is a basic Redux architecture.
          </p>

          <button type='button' onClick={() => console.log(props)}>
            Log Store
          </button>

          <br />
          <button
            type='button'
            onClick={() =>
              props.setCurrentUser(document.getElementById('name-input').value)
            }>
            Change User
          </button>
          <input id='name-input' type='text' placeholder="'self' or 'other'" />
          <br />

          <button
            type='button'
            onClick={() =>
              props.setHTMLBackgroundColor(
                document.getElementById('test-input').value
              )
            }>
            Pass HTML color
          </button>
          <input id='test-input' type='text' placeholder="'blue' or 'green'" />
          <br />

          <button
            type='button'
            onClick={() =>
              props.setFrameBackgroundColor(
                document.getElementById('frame-input').value
              )
            }>
            Pass Frame color
          </button>
          <input
            id='frame-input'
            type='text'
            placeholder="'yellow' or 'black'"
          />
        </div>
      </header>
    </div>
  )
}

// wire redux store state to component
const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
  backgroundColor: state.display.backgroundColor,
  frameColor: state.display.frameColor,
})



// connect() dispatch actions methodologies.
// remember to select correct import method at top


// 1
// wire reducer dispatch actions to component with ability to inject non-action function
// const mapDispatchToProps = (dispatch) => ({
//   setCurrentUser: (user) => dispatch(setCurrentUser(user)),
//   setHTMLBackgroundColor: (color) => dispatch(setHTMLBackgroundColor(color)),
//   setFrameBackgroundColor: (color) => dispatch(setFrameBackgroundColor(color)),
// })


// 2
// automatic wrapper from connect(). No ability to interact with wrapper
// const mapDispatchToProps = {
//   setCurrentUser, // will be wrapped into a dispatch call
//   setHTMLBackgroundColor, // will be wrapped into a dispatch call
//   setFrameBackgroundColor, // will be wrapped into a dispatch call
// };


// 3
// automatic wrapper from connect(). No ability to interact with wrapper
// const mapDispatchToProps = {
//   ...userActions, // will be wrapped into a dispatch call
//   ...displayActions, // will be wrapped into a dispatch call
// };


// 4
// have access to wrapping, must call dispatch()
// const mapDispatchToProps = dispatch => bindActionCreators(
//   {
//     setCurrentUser,
//     setHTMLBackgroundColor,
//     setFrameBackgroundColor,
//   },
//   dispatch,
// )


// 5
// create and extend props with non-dispatch functions
const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators(
    {
      setCurrentUser,
      setHTMLBackgroundColor,
      setFrameBackgroundColor,
    },
    dispatch
  ),
  clickTheImage, // this is not to be wrapped into dispatch
})

function clickTheImage() { // component level extended non-dispatch function, assigned to header
  alert('Hi Dave')
}

export default connect(mapStateToProps, mapDispatchToProps)(App)

// END of document
