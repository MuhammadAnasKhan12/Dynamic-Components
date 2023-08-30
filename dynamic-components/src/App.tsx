import React from 'react';
import './App.css';
import Buttons from './components/button';
import Table from './components/table'; 
import SInput from './components/input';
import Select from './components/Select';
import IButton from './components/IButton';
import { useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import DSwitch from './components/Dswitch';
import DatePicker from './components/DatePicker';

function App() {
  
const [text, setText] = useState("");
  function change1(val:string) {
    setText(val);
  }
  
  const [changes, setChange] = useState("none");
  function change2(val:string) {
    setChange(val)
  }
  const options = [
     { value: "Apple" },
     { value: "Mango" },
     { value: "Banana"},
  ];
  const Data = [
  {
    id: 1,
    name: "Ali Khan",
    job: "Software Engineer",
    email: "ali.khan@example.com",
  },
  {
    id: 2,
    name: "Sana Ahmed",
    job: "Graphic Designer",
    email: "sana.ahmed@example.com",
  },
  {
    id: 3,
    name: "Rizwan Malik",
    job: "Doctor",
    email: "rizwan.malik@example.com",
  },
  {
    id: 4,
    name: "Ayesha Khan",
    job: "Teacher",
    email: "ayesha.khan@example.com",
  },
  {
    id: 5,
    name: "Imran Qureshi",
    job: "Accountant",
    email: "imran.qureshi@example.com",
  },
  {
    id: 6,
    name: "Nadia Shah",
    job: "Journalist",
    email: "nadia.shah@example.com",
  },
  {
    id: 7,
    name: "Fahad Mahmood",
    job: "Marketing Manager",
    email: "fahad.mahmood@example.com",
  },
  {
    id: 8,
    name: "Samina Akram",
    job: "Architect",
    email: "samina.akram@example.com",
  },
  {
    id: 9,
    name: "Usman Butt",
    job: "Sales Executive",
    email: "usman.butt@example.com",
  },
  {
    id: 10,
    name: "Mehak Ali",
    job: "Content Writer",
    email: "mehak.ali@example.com",
  },
];
  const [clicks, setClicks] = useState("");
  function clicked() {
    setClicks("Khan")
  }
  const [clickes, setClicked] = useState("");
  function deleted() {
    setClicked("deleted")
  }
  
  const [switchState, setSwitchState] = useState(false);
  const handleSwitchChange = (newValue:boolean) => {
    setSwitchState(newValue);
  };

  const [selectedDate, setSelectedDate] = useState<string>('');
  const changeDate = (date: string) => {
    setSelectedDate(date);
  };



  return (
    <div className="App">
      <div className='input'>
      <h1>INPUT</h1>
      <SInput type={"text"} value={text} placeholder={"type here"} change={change1} />
      <p>{text}</p>
      <hr />
      </div>

      <div className='select'>
        <h1>SELECT</h1>
        <Select label={changes} value={changes} optionList={options} onChange={change2} />
        <p>you selected: {changes}</p>
        <hr />
      </div>
      <div className='Table'>
        <h1>TABLE</h1>
        <Table data={Data} col={[
          {
            heading: "ID",
            key:"id"
          },
          {
            heading: 'Name',
            key:"name"
          },
          {
            heading: 'Job',
            key:"job"
          },
          {
            heading: 'Email',
            key:"email"
          }
        ]} />
        <hr />
      </div>

      <div className='Button'>
        <h1>BUTTON</h1>
        <Buttons label1={'Click'} Click={clicked} />
        <p>{clicks}</p>
        <hr />
      </div>

        <div className='Icon-Button'>
        <h1>ICON-BUTTON</h1>
        <IButton variants='contained' startIcon={<DeleteIcon/>} label1={"erase"} Click={deleted} />
        <p>{clickes}</p>
        <hr />
      </div>

      <div>
      <h1> Switch </h1>
      <DSwitch checked={switchState} onChange={handleSwitchChange} labels={switchState?"Open":"Close"} />
      <p>Switch is {switchState?"Open":"Close"}</p>
        <hr />
      </div>
      
      <div className='Datepicker'>
      <h1> DatePicker </h1>
        <DatePicker selectedDate={selectedDate } onChange={changeDate}/>
        <hr />
      </div>

    </div>
  );
}

export default App;
