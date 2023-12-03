import React,{ useState} from 'react';
import '../Styles/Faq.css';
import cross from '../assests/cross.svg';
import plus from '../assests/plus.svg';
import close from '../assests/cross.svg';

function Faq() {
    const [openQuestions, setOpenQuestions] = useState([]);

    const faqData = [
      {
        question: 'What is Manage Wise and what does it offer?',
        answer: 'Manage Wise is a comprehensive management platform designed to streamline your business operations, enhance productivity, and drive success. It offers a range of features inlcuding task management,scheduling, communication tools, analytics, and more.',
      },
      {
        question: 'Is Manage Wise suitable for small businesses and larger enterprise alike',
        answer: 'Yes, Manage Wise is designed to cater to the needs of both small businesses and larger eneterprises. Its scalable features and customizable options make it versatile for various business sizes.',
      },
      {
        question: 'Can I access Manage Wise from different devices and platforms?',
        answer: 'Yes, Manage Wise offers cross-platform compatibility, allowing you to access and use the platform seamlessly on desktops, web browsers, and mobile devices.',
      },
      {
        question: 'What kind of support options do you offer to users?',
        answer: 'We provide responsive customer support via chat and email to assist you with any inquiries, issues, or guidance you may need while using Manage Wise.',
      },
      {
        question: 'How secure is the data stored within Manage Wise?',
        answer: 'Your data security is a top priority. Manage Wise employs robust data encryption and follows industry best practices to ensure your sensitive information is safe and protected.',
      },
     
    ];
  
    const handleClick = (index) => {
      if (openQuestions.includes(index)) {
        
        setOpenQuestions(openQuestions.filter((item) => item !== index));
      } else {
      
        setOpenQuestions([...openQuestions, index]);
      }
    };
  

  return (
    <section id ="faq" className="faq-container">
        <div className ="faq-whole">
              <div className ="faq-left">
                <div className="faq-button"><span style={{ fontSize: '19px' }}>🙋‍♀️ </span>FAQ</div>
                <div className="faq-need">Need <br /> <span style={{color : '#FE8162'}}>Answers?</span></div>
                <div className='faq-paragraph'>Check out our most commonly<br/> asked questions below to find the<br/> information you need.</div>
              </div>

              <div className="faq-right">
          {faqData.map((item, index) => (
            <div key={index} className={`faq-item ${openQuestions.includes(index) ? 'clicked' : ''}`}>
              <div
                className={`faq-question ${openQuestions.includes(index) ? 'clicked' : ''}`}
                onClick={() => handleClick(index)}
              >
                {item.question}
                <img
                  className="icon"
                  src={openQuestions.includes(index) ? cross : plus}
                  alt={openQuestions.includes(index) ? 'cross' : 'plus'}
                  width={openQuestions.includes(index) ? '20' : '25'}
                />
              </div>

              {openQuestions.includes(index) && (
                <div className={`faq-answer ${openQuestions.includes(index) ? 'clicked' : ''}`}>{item.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default Faq;

