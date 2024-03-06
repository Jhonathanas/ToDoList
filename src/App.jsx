import React from 'react';
import Navbar from './components/Navbar';
import { getAllNotes } from './utils/local-data'

import { Route, Routes } from 'react-router-dom';
import Homepage from './Pages/Homepage';
import Archived from './Pages/Archived';
import DetailWrap from './components/Detail';

class App extends React.Component {
  constructor(props){
    super(props)
      this.state = {
        data : getAllNotes(),
      }
      
  }  
  render(){
    const { data } = this.state;
  
  return (
    <>
      <Navbar/>
      <main>
        <Routes>
          <Route path='/' element={<Homepage data={data}/>} />
          <Route path='/archived' element={<Archived data={data}/>} />
          <Route path="/catatan/:id" element={<DetailWrap />} />

        </Routes>
      </main>
    </>
    );
  }
}

export default App;
