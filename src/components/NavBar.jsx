import React from 'react';
import { Link } from 'react-router-dom';
import { DiAtom } from 'react-icons/di';
import { BsPencilSquare } from 'react-icons/bs';

import User from './User';
import Button from './ui/Button';
import { useAuthContext } from './context/AuthContext';

export default function NavBar() {
  const { user, login, logout } = useAuthContext();
  return (
    <header className='fixed top-0 bg-zinc-900 flex justify-between items-center w-full max-w-screen-2xl border-b border-gray-300 mb-4 p-4 z-50'>
      <div>
        <Link
          to='/'
          className='flex items-center text-4xl text-brand md:text-5xl'
        >
          <DiAtom className='font-bold' />
          <h1 className='font-bold'>AMC-OR</h1>
        </Link>
      </div>
      <nav className='flex items-center gap-4 font-semibold'>
        {/* <Link to='/materials/test' className='flex items-center gap-2 text-xl'>
          Test
        </Link> */}
        {
          // search 데이터는 홈에서 같이 보여주는 게 나을 거 같음
        }
        {/* <Link to='/materials' className='flex items-center gap-2 text-xl'>
          <BsSearch />
          Search
        </Link> */}
        {user && user.isAdmin && (
          <Link to='/materials/new' className='text-2xl hidden md:flex'>
            <BsPencilSquare />
          </Link>
        )}
        {user && <User user={user} />}
        {!user && <Button text={'Login'} onClick={login} />}
        {user && <Button text={'Logout'} onClick={logout} />}

        {/* 나중에 필요하면 추가해서 페이지 삽입 */}
        {/* <Link></Link> */}
      </nav>
    </header>
  );
}
