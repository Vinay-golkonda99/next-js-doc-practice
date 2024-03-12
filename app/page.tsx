import Link from 'next/link';

const HomePage = () => {
  return (
    <main className="flex min-h-screen">
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
  );
};

export default HomePage;
