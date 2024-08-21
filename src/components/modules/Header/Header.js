import React from 'react'
import Nav from './Nav/Nav'
import { authUser } from '@/utils/serverHelpers';

export default async function Header() {

  const user = await authUser();
  

  return (
    <>
      <header>
        <Nav isLogin={user ? true : false} />
      </header>
    </>
  )
}
