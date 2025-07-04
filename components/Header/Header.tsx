import css from './Header.module.css';
import Link from 'next/link';

const Header = () => {
  return (
    <header className={css.header}>
   <div className={css.headermenu}>
    <Link href={'/'}>
      <h2>NoteHub</h2>
    </Link>
      <nav>
        <ul className={css.navigation}>
          <li>
            <Link href="/">Home</Link>
            </li>
          <li>
            <Link href="/notes">Notes</Link>
            </li>
          <li>
            <Link href="/about">About</Link>
            </li>
          <li>
            <Link href="/profile">Profile</Link>
          </li>
        </ul>
      </nav>
      </div>
    </header>
  );
};

export default Header;