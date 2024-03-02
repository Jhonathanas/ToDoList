import React from 'react';
import '../styles/Components.css';

class BuatCatatan extends React.Component {
  constructor(props) {
    super(props);
  
    this.state = {
      title: '',
      body: '',
    }
  
    this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
    this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
  }
  
  onTitleChangeEventHandler(event) {
    this.setState(() => {
      return {
        title: event.target.value,
      }
    });
  }
  
  onBodyChangeEventHandler(event) {
    this.setState(() => {
      return {
        body: event.target.value,
      }
    });
  }
  
  onSubmitEventHandler(event) {
    event.preventDefault();
    this.props.addCatatan(this.state);
  }
 render() {
   return (
    <div className='BuatCatatan'>
     <h1>Buat catatan</h1>
     <form className='InputCatatan' onSubmit={this.onSubmitEventHandler}>
       <input type="text" placeholder='title' value={this.state.title} onChange={this.onTitleChangeEventHandler}/>
       <textarea type="text" placeholder='body' value={this.state.body} onChange={this.onBodyChangeEventHandler}/>
       <button type="submit">Tambah</button>
     </form>
    </div>
   )
 }
}
 
export default BuatCatatan;