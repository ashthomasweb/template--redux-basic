import logo from './logo.svg'
import './App.css'

// redux method
import { connect } from 'react-redux'

// various actions from slices
import { setCurrentUser } from './redux/user/user.action'
import { setHTMLBackgroundColor } from './redux/display/display.action'

function App(props) {
  return (
    <div className='App'>
      <header className='App-header'>
        <img
          style={{ backgroundColor: props.backgroundColor, zIndex: '0' }}
          src={logo}
          className='App-logo'
          alt='logo'
        />
        <div style={{ zIndex: 1 }}>
          <p>
            Welcome, {props.currentUser}.
          </p>
          <p>
            This is a basic Redux architecture.
          </p>
          <br />
          <button type='button' onClick={() => props.setCurrentUser('joe')}>
            Change User
          </button>
          <button type='button' onClick={() => console.log(props)}>
            Log Store
          </button>
          <button
            type='button'
            onClick={() =>
              props.setHTMLBackgroundColor(
                document.getElementById('test-input').value
              )
            }>
            Pass HTML color
          </button>
          <input id='test-input' type='text' placeholder="'blue' or 'green'"/>
        </div>
      </header>
    </div>
  )
}

// wire store state to component
const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
  backgroundColor: state.display.backgroundColor,
})

// wire reducer dispatch actions to component
const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
  setHTMLBackgroundColor: (color) => dispatch(setHTMLBackgroundColor(color)),
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
