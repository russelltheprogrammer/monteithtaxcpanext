import Image from 'next/image';

const About = () => {


  return (
    <div className="container-about">
      <div className="wrapper-about">
        <div className="container-about-picture">
          <Image id='about-picture' src="/headshot.jpg" alt="Headshot" width={274} height={274} />
        </div>
        <div className="container-about-content">
          <div className="topic-header">
            <h1 className="container-about-content-main-title">ABOUT</h1>
          </div>
          <h2 className='container-about-content-name-title'>Russell Monteith</h2>
          <p className="about-content">
            I am Russell Monteith, a Certified Public Accountant licensed in the State of New York, a software engineer, and sole owner of this PLLC.
            I previously worked at a prestigious accounting firm in New York City where I focused on tax work such as consulting, planning, preparation, review,
            accounting, software efficiency, and account management of high net worth individuals and their businesses. 
            I also have experience in the technology industry where I have worked with startup companies and established businesses in areas such as 
            software engineering, product development, account management, business development, and project management.
            <br/>
            <br/>
            Unlike most accountants, I focus on the technology side. I have always had an interest in technology from a young age but I really discovered
            my calling for programming and other areas of tech during the pandemic when I deciced to learn what software engineering was really about from 
            programming, to development, to design, to deployment. 
            I treat each client&apos;s business and tax situation as unique and thrive to deliver the utmost care and value as if it was my own.
            <br/>
            <br/>
            I currently consult and contract with accounting technology businesses, startup companies, and accounting firms to help them with their business needs,
            such as software development, product development, account management, business development, custom solutions, project management, and other general 
            consulting. I am always looking to help businesses grow and improve their processes. In addition, I offer traditional tax services to individuals and
            businesses.
            <br/>
            <br/>
            I am a graduate of Binghamton University with a Bachelor of Science in Accounting and a Master of Science in Accounting. I passed the CPA exam while attending
            graduate school full time. I am certified in many different software engineering skills, a member of the AICPA, a member of the NYSSCPA, and always looking to learn more. 
            In my free time, I enjoy exercising, sports, spending time with family and friends, being outside in nature, anime, board games, and food.
          </p>
        </div>
      </div>
    </div>
  )
}
 
export default About;
