import React from 'react';
import '../styles/Components.css'
import CatatanList from './CatatanList';

class Arsipan extends React.Component{ 
  constructor(props) {
    super(props);
    // Menginisialisasi props onDelete dan onArchivedHandler
    this.onDelete = props.onDelete;
    this.onArchivedHandler = props.onArchivedHandler;
  }
 render() {
  const { data } = this.props;
   return (
    <>
      <CatatanList data={data} onDelete={this.onDelete} onArchivedHandler={this.onArchivedHandler}/>
    </>
   )
 }
}
 
export default Arsipan;