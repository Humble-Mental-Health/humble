import React from 'react';
import './Services.css';
import Card from '../../../Components/ServicesCard/ServicesCard';
import Text from '../../../Components/ServicesText/ServicesText';
import { FaChalkboardTeacher } from 'react-icons/fa';
import { FaLaptopMedical } from 'react-icons/fa';
import { FaAssistiveListeningSystems } from 'react-icons/fa';
import { MdPeople } from 'react-icons/md';
<<<<<<< HEAD
=======
import Zoom from 'react-reveal/Zoom';
import Flip from 'react-reveal/Flip';
>>>>>>> Krishna

const ServicesDb = [
  {
    icon: FaChalkboardTeacher,
    title: 'Online Session',
    content: 'Weekly online sessions by psychologists from our team, where they do seminars on current topics related to mental health and general awareness around mental health, which includes interactive sessions as well.'
  },
  {
    icon: FaLaptopMedical,
    title: 'Mental Kit',
    content: 'Coming soon ! It is going to be a customisable kit that will help you to cope up with your daily stress related to work, relationships or Studies. Will be made in such a way that will suit all age groups.'
  },
  {
    icon: FaAssistiveListeningSystems,
    title: 'Listeners',
    content: 'One of the best services that we are providing out there and that too without any charges. you are not able to distinguish between whether you are feeling depressed or you have depression ? or maybe you just need someone to talk ! We provide anonymous, trained and non-judgemental human beings who will patiently listen to you.'
  },
  {
    icon: MdPeople,
    title: 'Community',
    content: 'People from the Humble community share one common goal that is to create this world a better place for conversations around mental health. We are on a quest to make the society more open towards mental health problems and we are here to encourage people to express themselves. Come join us!'
  }
];

function App() {

  return (
    <div className="AppMain">
      <div className='appmain__services'>
        <Text />
        <div className="cardbox">
<<<<<<< HEAD
          <Card icon={ServicesDb[0].icon} title={ServicesDb[0].title} content={ServicesDb[0].content} />
          <Card icon={ServicesDb[1].icon} title={ServicesDb[1].title} content={ServicesDb[1].content} />
          <Card icon={ServicesDb[2].icon} title={ServicesDb[2].title} content={ServicesDb[2].content} />
          <Card icon={ServicesDb[3].icon} title={ServicesDb[3].title} content={ServicesDb[3].content} />
=======
          <Zoom duration={1000}>
            <Card icon={ServicesDb[0].icon} title={ServicesDb[0].title} content={ServicesDb[0].content} />
          </Zoom>
          <Zoom duration={1000} delay={500}>
            <Card icon={ServicesDb[1].icon} title={ServicesDb[1].title} content={ServicesDb[1].content} />
          </Zoom>
          <Zoom duration={1000} delay={1000}>
            <Card icon={ServicesDb[2].icon} title={ServicesDb[2].title} content={ServicesDb[2].content} />
          </Zoom>
          <Zoom duration={1000} delay={1500}>
            <Card icon={ServicesDb[3].icon} title={ServicesDb[3].title} content={ServicesDb[3].content} />
          </Zoom>
>>>>>>> Krishna
        </div>
      </div>
    </div>
  );
}

export default App;
