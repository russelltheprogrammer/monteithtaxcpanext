import Link from 'next/link';

const NotFound = () => {
  return (
    <div className="container-notfound">
      <h1>Sorry, but this page cannot be found</h1>
      <Link href="/">Click here to go back to the homepage</Link>
    </div>
  );
}
 
export default NotFound;
