import Link from 'next/link';

const HomePage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <nav className="flex flex-col justify-center p-8">
          <Link href="/">
            <a className="my-2">Home</a>
          </Link>
          <Link href="/about">
            <a className="my-2">About</a>
          </Link>
          <Link href="/contact">
            <a className="my-2">Contact</a>
          </Link>
        </nav>
        <div className="flex flex-col items-center justify-center w-full">
          <h1 className="text-4xl mb-8">Hi, Welcome to my website</h1>
          <p className="text-lg">This is my Home Page.</p>
        </div>
      </main>
      {/* Footer */}
      <footer className="text-bottom py-4 bg-gray-200">
        <p className="text-sm">© 2024 Your Website. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;



export default HomePage;

const Page = () => {
  return (
    <div>
      <h1>Landing Page</h1>
      <p>This is the landing page content.</p>
      <nav>
        <ul>
          <li>
            <Link href="/about">
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};


