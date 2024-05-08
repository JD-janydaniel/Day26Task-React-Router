import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import All from './Pages/All';
import FullStack from './Pages/FullStack';
import DataScience from './Pages/DataScience';
import CyberSecurity from './Pages/CyberSecurity';
import Career from './Pages/Career';
const App = () => {
  let courses = [
    //fullStack
    {
      id: 1,
      image: "/src/assets/images/img1.jpg",
      coursesName: "Best Full-Stack Development Project Ideas oin 2024",
      tutorName: "Isha Sharma",
      date: "13 DEC,2023",
    },
    {
      id: 2,
      image: "/src/assets/images/img2.jpg",
      coursesName: "How Long Would It Take to Be a Full-Stack Developer?",
      tutorName: "Meghana D",
      date: "20 OCT,2023",
    },
    {
      id: 3,
      image: "/src/assets/images/img3.jpg",
      coursesName: "How does Apache work ? A detailed introduction to Apache",
      tutorName: "Tushar Vinocha",
      date: "03 OCT,2023",
    },
    {
      id: 4,
      image: "/src/assets/images/img4.jpg",
      coursesName:
        "Hot Topics That You Need To Know In Full Stack Developer Syllabus|2020[UPDATE]",
      tutorName: "Archana",
      date: "14 DEC,2023",
    },
    {
      id: 5,
      image: "/src/assets/images/img5.jpg",
      coursesName: "6 Essential Prerequisites For Learning ReactJS",
      tutorName: "Ramkumar",
      date: "06 OCT,2023",
    },
    {
      id: 6,
      image: "/src/assets/images/img6.jpg",
      coursesName:
        "10 Best Database Management Systems for Software Developers",
      tutorName: "Isha Sharma",
      date: "22 Mar,2023",
    },
    {
      id: 7,
      image: "/src/assets/images/img7.jpg",
      coursesName: "Best Web Development Road Map For Beginers 2024",
      tutorName: "Isha Sharma",
      date: "14 DEC,2023",
    },
    {
      id: 8,
      image: "/src/assets/images/img8.jpg",
      coursesName: "7 Best Full-Stack Development Online Courses[2024]",
      tutorName: "Srinithi Sankar",
      date: "13 DEC,2023",
    },
    {
      id: 9,
      image: "/src/assets/images/img9.jpg",
      coursesName: "8 Top Full Stack Web Developer Coding Projects For You",
      tutorName: "Archana",
      date: "06 OCt,2023",
    },
    {
      id: 10,
      image: "/src/assets/images/img10.jpg",
      coursesName: "Top 10 Full-Stack Development Frameworks 2024",
      tutorName: "Isha Sharma",
      date: "13 DEC,2023",
    },
    {
      id: 11,
      image: "/src/assets/images/img11.jpg",
      coursesName: "Now Become A Full Stack Developer In 90 Days",
      tutorName: "Archana",
      date: "21 Mar,2023",
    },
    {
      id: 12,
      image: "/src/assets/images/img12.jpg",
      coursesName: "Best Ways to Learn Full Stack Development in 2024",
      tutorName: "Isha Sharma",
      date: "21 Mar,2023",
    },
    //Data Science
    {
      id: 13,
      image: "/src/assets/images/img13.jpg",
      coursesName: "12 Real World Data Science Example:Power of Data Science",
      tutorName: "Lukesh S",
      date: "21 Oct,2023",
    },
    {
      id: 14,
      image: "/src/assets/images/img14.jpg",
      coursesName: "Top 10 High Paying Non-Coding Jobs in Data Science in 2024",
      tutorName: "Isha Sharma",
      date: "13 Dec,2023",
    },
    {
      id: 15,
      image: "/src/assets/images/img15.jpg",
      coursesName: "Can A Commerce Student Do Data science?",
      tutorName: "Saakshi Priyadarshini",
      date: "08 Sep,2023",
    },
    {
      id: 16,
      image: "/src/assets/images/img16.jpg",
      coursesName: "Roles And Responsibilities of a Data Scientist",
      tutorName: "Jaishree Tomar",
      date: "20 Oct,2023",
    },
    {
      id: 17,
      image: "/src/assets/images/img17.jpg",
      coursesName:
        "How To Become A Data Scientist After Mechanical Engineering?",
      tutorName: "Lahari Chandana",
      date: "03 Oct,2023",
    },
    {
      id: 18,
      image: "/src/assets/images/img18.jpg",
      coursesName: "Data Science VS Data Analytics| Best Career Choice in 2024",
      tutorName: "Lahari Chandana",
      date: "16 Mar,2024",
    },
    {
      id: 19,
      image: "/src/assets/images/img19.jpg",
      coursesName: "Top Product-Based Companies For Data Scientists In 2024",
      tutorName: "Jaishree Tomar",
      date: "13 Dec,2024",
    },
    {
      id: 20,
      image: "/src/assets/images/img20.jpg",
      coursesName: "How Long Would It Take To Learn Data Science?",
      tutorName: "Meghana D",
      date: "20 Oct,2024",
    },
    {
      id: 21,
      image: "/src/assets/images/img21.jpg",
      coursesName: "Top Product-Based Companies For Data Science Freshers",
      tutorName: "Jaishree Tomar",
      date: "10 Nov,2023",
    },
    {
      id: 22,
      image: "/src/assets/images/img22.jpg",
      coursesName: "Top 100 Amazon Data Scientist Interview Questions!",
      tutorName: "Archana",
      date: "05 Oct,2023",
    },
    {
      id: 23,
      image: "/src/assets/images/img23.jpg",
      coursesName: "Everything About Data Scientist Salary in India| 2024",
      tutorName: "Srinithi Sankar",
      date: "13 Dec,2024",
    },
    {
      id: 24,
      image: "/src/assets/images/img24.jpg",
      coursesName: "Data Science Webinar And WorkShops",
      tutorName: "Saanchin Bhardwaj",
      date: "21 Oct,2024",
    },
    //Cyber Security
    {
      id: 25,
      image: "/src/assets/images/img25.jpg",
      coursesName: "Cyber Security VS Ethical Hacking: Top 10 Difference",
      tutorName: "Tushar Vinocha",
      date: "04 Oct,2023",
    },
    {
      id: 26,
      image: "/src/assets/images/img26.jpg",
      coursesName: "Non-Coding Jobs in CyberSeccurity : A Comprehensive Guide",
      tutorName: "Jaishree",
      date: "04 Dec,2023",
    },
    {
      id: 27,
      image: "/src/assets/images/img27.jpg",
      coursesName: "8 Different Types Of Cyber Security And Threats Involved",
      tutorName: "Tushar Vinocha",
      date: "08 Sep,2023",
    },
    {
      id: 28,
      image: "/src/assets/images/img28.jpg",
      coursesName:
        "What Is CyberSecurity? Importans And Its Uses & The Growing Challenges In 2023!",
      tutorName: "Tushar Vinocha",
      date: "04 Oct,2023",
    },
    {
      id: 29,
      image: "/src/assets/images/img29.jpg",
      coursesName: "What Is Hacking? Types Of Hacking & More",
      tutorName: "Meghana",
      date: "26 Oct,2023",
    },
    {
      id: 30,
      image: "/src/assets/images/img30.jpg",
      coursesName:
        "Is Coding Required For CyberSecurity? If Yes, How Crucial is Coding For CyberSecurity?",
      tutorName: "Tushar Vinocha",
      date: "05 Oct,2023",
    },
    {
      id: 31,
      image: "/src/assets/images/img31.jpg",
      coursesName: "Top 7 Cyber Security Attacks In Real Life",
      tutorName: "Lahari Chandana",
      date: "05 Oct,2023",
    },
    {
      id: 32,
      image: "/src/assets/images/img32.jpg",
      coursesName:
        "The CyberSecurity Surge :5 Must-Have CyberSecurity Cerifications!",
      tutorName: "Tushar Vinocha",
      date: "07 Oct,2023",
    },
    {
      id: 33,
      image: "/src/assets/images/img33.jpg",
      coursesName: "The Ultimate CyberSecurity Roadmap FOr Beginners",
      tutorName: "Srinithi Sankar",
      date: "14 Nov,2023",
    },
    {
      id: 34,
      image: "/src/assets/images/img34.jpg",
      coursesName: "How Is Cyber Security Important To Our Lives?",
      tutorName: "Guvi Geek",
      date: "06 Oct,2023",
    },
  ];

  let careerCourse = [
    //Career
    {
      id: 1,
      image: "/src/assets/images/img35.jpg",
      coursesName: "Java Full-Stack Development Course",
      language: "English,Tamil",
      payment: "EMI Options Available",
      placement: "100 % Placement Support",
      mentor: "1:1 Mentor Doubt Clearing Session",
    },
    {
      id: 2,
      image: "/src/assets/images/img36.jpg",
      coursesName: "MERN Full-Stack Development Course",
      language: "English,Tamil,Hindi",
      payment: "EMI Options Available",
      placement: "100 % Placement Support",
      mentor: "1:1 Mentor Doubt Clearing Session",
    },
    {
      id: 3,
      image: "/src/assets/images/img37.jpg",
      coursesName: "Data Science Course",
      language: "English,Tamil",
      payment: "EMI Options Available",
      placement: "100 % Placement Support",
      mentor: "1:1 Mentor Doubt Clearing Session",
    },
    {
      id: 5,
      image: "/src/assets/images/img38.jpg",
      coursesName: "Automation Testing Course With Java",
      language: "English,Tamil",
      payment: "EMI Options Available",
      placement: "100 % Placement Support",
      mentor: "1:1 Mentor Doubt Clearing Session",
    },
    {
      id: 6,
      image: "/src/assets/images/img39.jpg",
      coursesName: "Automation Testing Course With Python",
      language: "English",
      payment: "EMI Options Available",
      placement: "100 % Placement Support",
      mentor: "1:1 Mentor Doubt Clearing Session",
    },
    {
      id: 7,
      image: "/src/assets/images/img40.jpg",
      coursesName: "UI/UX Design Course",
      language: "English,Tamil",
      payment: "EMI Options Available",
      placement: "100 % Placement Support",
      mentor: "1:1 Mentor Doubt Clearing Session",
    },
    {
      id: 8,
      image: "/src/assets/images/img41.jpg",
      coursesName: "Data Engineering Course With Bigdata And Hadoop",
      language: "English",
      payment: "EMI Options Available",
      placement: "100 % Placement Support",
      mentor: "1:1 Mentor Doubt Clearing Session",
    },
    {
      id: 9,
      image: "/src/assets/images/img42.jpg",
      coursesName: "AutoCAD Course Mechanical Engineers",
      language: "English,Tamil",
      payment: "EMI Options Available",
      placement: "100 % Placement Support",
      mentor: "1:1 Mentor Doubt Clearing Session",
    },
    {
      id: 10,
      image: "/src/assets/images/img43.jpg",
      coursesName: "AutoCAD Course Civil Engineers",
      language: "English,Tamil",
      payment: "EMI Options Available",
      placement: "100 % Placement Support",
      mentor: "1:1 Mentor Doubt Clearing Session",
    },
  ];
  return (
    <>
      <BrowserRouter>
      <div>
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<All courses={courses} />}/>
        <Route path="/fullstack" element={<FullStack courses={courses}/>}/>
        <Route path="/datascience" element={<DataScience courses={courses} />}/>
        <Route path="/cybersecurity" element={<CyberSecurity courses={courses} />}/>
        <Route path="/career" element={<Career careerCourse={careerCourse} />}/>
      </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;