import Image from "next/image"

const About = () => {

    return (
        <div>
            <div className="topic-header">
                <h1>ABOUT</h1>
            </div>
            <div className="container-flex-about">
                <div className="container-flex-about-left">
                    <Image id="about-picture" src="/headshot.jpg" alt="Headshot" width={274} height={274} />
                </div>
                <div className="container-flex-about-right">
                    <div className="text-blurbs-about" >
                        <h1>Who is Russell Monteith?</h1>
                            <p className="text-blurbs-content-about">
                            I am Russell Monteith, a Certified Public Accountant licensed in the State of New York and sole owner of this PLLC. 
                            The bulk of my prior tax experience was working in New York City for a prestigious accounting firm. I treat each client&apos;s tax
                            situation as unique and thrive to deliver the utmost care and value as if it was my own.
                            <br/>
                            <br/>
                            I have focused on tax accounting professionally for over a decade. I&apos;ve done great work with businesses 
                            large and small as well as non-profits. I&apos;ve worked with individuals both small and wealthy; 
                            clients both domestic and international. I&apos;m also familiar with the 
                            intricacies of trusts and gift taxes, as well as inheritance. My wide array of experience sets me apart from
                            others in the industry.
                            </p>
                            <br/>
                        <h1>What else can Russell do?</h1> 
                            <p className="text-blurbs-content-about">
                            I also offer web development services. In addition to traditional website services, my financial knowledge makes me 
                            uniquely qualified to help your company develop your own internal accounting, financial, or bookkeeping applications. 
                            There are many areas of a business that can be improved which can save you and
                            your clients lots of time and I can help you make it happen.
                            See some of my <a href="https://github.com/russelltheprogrammer" rel="noreferrer" target="_blank">programming work here</a>. 
                            I also built this entire website from scratch.
                            <br/>
                            </p>
                    </div>
                </div>
            </div>
        </div>
      );
}
 
export default About;