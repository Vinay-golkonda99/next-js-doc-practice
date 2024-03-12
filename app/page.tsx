// page.tsx
import Link from 'next/link';

const Page = () => {
  return (
    <div>
      <h1>Landing Page</h1>
      <p>This is the landing page content.</p>
      <nav>
        <ul>
          <li>
            <Link href="/about">
              <a>About Me</a>
            </Link>
          </li>
        </ul>
      </nav>
      <footer>
        <p>Email: vinay1234@gmail.com</p>
      </footer>
    </div>
  );
};

export default Page;
