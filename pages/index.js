import Image from 'next/image';
import Contact from './contact';
import Link from "next/link";

export default function Home() {

  return (
    <div>
      <div className="text-blurbs">
          <br/>
            <h1>Welcome to RUSSELL MONTEITH CPA PLLC</h1>
            <h3>A digital tax accounting practice based out of the New York City area</h3>
          <br/>
            <p className="text-blurbs-content-home">
                Please take a look around the website, you can contact Russell right away by 
                clicking <Link href="/contact">HERE</Link>.
                <br/>
                <br/>
                Russell is currently accepting new clients. Contact Russell today for a free consultation!
            </p>
      </div>
        <br/>
        <br/>
         <Image id="homepage-image" src="/homepageimage.jpg" alt="Home Page" width={800} height={300} />
        <br />
        <br />
        <br />
          <Image id="homepage-logo-img" src="/homepagelogoimage.png" alt="Home Page Logo" width={760} height={200} />
          <Contact header={false} homepagelink={false} logo={false} />
</div>
  )
}
