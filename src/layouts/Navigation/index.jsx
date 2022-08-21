import { Link, useLocation } from 'react-router-dom';

function Navigation() {
  const location = useLocation().pathname;

  return (
    <nav
      id='Navigation'
      className={
        location === '/create'
          ? 'right'
          : location === '/list'
          ? 'left'
          : 'hide'
      }
    >
      <Link to='/list' className='list'>
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'>
          <path d='M64 360C94.93 360 120 385.1 120 416C120 446.9 94.93 472 64 472C33.07 472 8 446.9 8 416C8 385.1 33.07 360 64 360zM64 200C94.93 200 120 225.1 120 256C120 286.9 94.93 312 64 312C33.07 312 8 286.9 8 256C8 225.1 33.07 200 64 200zM64 152C33.07 152 8 126.9 8 96C8 65.07 33.07 40 64 40C94.93 40 120 65.07 120 96C120 126.9 94.93 152 64 152z' />
        </svg>
      </Link>
      <Link to='/create' className='create'>
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'>
          <path d='M432 256c0 17.69-14.33 32.01-32 32.01H256v144c0 17.69-14.33 31.99-32 31.99s-32-14.3-32-31.99v-144H48c-17.67 0-32-14.32-32-32.01s14.33-31.99 32-31.99H192v-144c0-17.69 14.33-32.01 32-32.01s32 14.32 32 32.01v144h144C417.7 224 432 238.3 432 256z' />
        </svg>
      </Link>
    </nav>
  );
}

export default Navigation;
