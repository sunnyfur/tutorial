import { useState } from 'react';
import ReactDOM from 'react-dom';
// import { Container, Button, Alert } from 'react-bootstrap';
import { CSSTransition } from 'react-transition-group';

import './styles.css';

function Example() {
  const [showButton, setShowButton] = useState(true);
  const [showMessage, setShowMessage] = useState(false);
  return (
    <div style={{ paddingTop: '2rem' }}>
      {showButton && (
        <button type='button' onClick={() => setShowMessage(true)}>
          Show Message
        </button>
      )}
      <CSSTransition
        in={showMessage}
        timeout={300}
        classNames='alert'
        unmountOnExit
        onEnter={() => setShowButton(false)}
        onExited={() => setShowButton(true)}
      >
        <div
          variant='primary'
          dismissible
          onClose={() => setShowMessage(false)}
        >
          {/* <Alert.Heading>Animated alert message</Alert.Heading> */}
          <p>This alert message is being transitioned in and out of the DOM.</p>
          <button type='button' onClick={() => setShowMessage(false)}>
            Close
          </button>
        </div>
      </CSSTransition>
    </div>
  );
}

ReactDOM.render(<Example />, document.getElementById('root'));

export default Example;
