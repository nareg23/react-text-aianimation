import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { AiText } from 'react-text-aianimation';

const App = () => {
  return (
    <div style={{ background: 'black', height: '100vh' }}>
      <div style={{ minWidth: '400px' }}>
        <AiText
          text="terminator"
          speed={100}
          styles={{
            color: 'white',
            fontWeight: 'bold',
            fontSize: '5rem',
          }}
          loops={3}
        />
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
