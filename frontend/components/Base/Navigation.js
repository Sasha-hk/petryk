import PropTypes from 'prop-types';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Navigation = () => {
  const router = useRouter().route;

  return (
    <div className="navigation balance">
      <nav>
        <Link
          href="/"
        >
          <a
            className={
              router === '/'
                ? 'navigation-active'
                : null
            }
          >
            home
          </a>
        </Link>

        <Link
          href="/about"
        >
          <a
            className={
              router === '/about'
                ? 'navigation-active'
                : null
            }
          >
            about
          </a>
        </Link>
      </nav>
    </div>
  );
};

export default Navigation;
