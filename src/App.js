import './App.css';
import Form from './Form'
import Table from './Table'
import React, { useState } from 'react';

function App() {

const [data, setData] = useState('')

function tableDataHandler(data){
setData(data);
}

  return (
    <div className="App">
      <Form dataHandler={tableDataHandler}>
        <Table data={data}/>
        </Form>
      
    </div>
  );
}

export default App;
