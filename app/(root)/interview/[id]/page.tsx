import Agent from '@/components/agent';
import DisplayTechIcons from '@/components/DisplayTechIcons';
import { getCurrentUser } from '@/lib/actions/auth.actions';
import { getInterviewById } from '@/lib/actions/general.action';
import { getRandomInterviewCover } from '@/lib/utils';
import { get } from 'http';
import Image from 'next/image';
import { redirect } from 'next/navigation';
import React from 'react'

const page = async({params}: RouteParams) => {
    const {id} = await params;
    const interview = await  getInterviewById(id);
    const user = await getCurrentUser();
    console.log(interview);

    if(!interview) redirect('/');

  return (
    <>
        <div className='flex flex-row gap-4 justify-between'>
            <div className='flex flex-col gap-4 items-center max-sm:flex-col'>
                <div className='flex flex-row gap-4 items-center'>
                    <Image src={getRandomInterviewCover()} alt="cover image" width={40} height={40} className='rounded-full object-cover size-[40px]' />
                    <h3 className='capitalize'>
                        {interview.role}
                    </h3>

                    <DisplayTechIcons techStack={interview.techstack}/>

                </div>
                

            </div>
                <p className='bg-dark-200 px-4 py-2 rounded-lg h-fit capitalize'>
                    {interview.type} 
                </p>
        </div>
                <Agent userName={user?.name ?? ''} userId={user?.id} interviewId={id} type='interview' questions={interview.questions} />
    </>
  )
}

export default page