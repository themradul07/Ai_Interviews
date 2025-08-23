import Agent from '@/components/agent'
import { getCurrentUser } from '@/lib/actions/auth.actions'
import React from 'react'

const Page = async () => {
  const user = await getCurrentUser();
  console.log(user);
  return (
    <>
        <h3>Interview Generation</h3>
        
        <Agent userName={user?.name ?? ''} userId={user?.id} type="generate"/>
    </>
  )
}

export default Page