import './App.css';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

function App() {
  return (
    <Box component="form" noValidate autoComplete="off">
      <div className='container_white'>
        <div className='container_padding'>
          <h3 className='container_title'>Back to your digital life</h3>
          <h3 className='container_para'>Choose one of the option to go</h3>
          <div className='input_card'>
            <TextField className='input'
              id='outlined-basic'
              label='email'
              variant='outlined' />
            <TextField className='input'
              id='outlined-basic'
              label='password'
              type='password'
              variant='outlined' />
          </div>
          <div className='line'>
           <p className='line_para'>Or continue with</p> 
          </div>
        </div>
      </div>
    </Box>
  );
}

export default App;
