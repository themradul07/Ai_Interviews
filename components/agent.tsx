import { cn } from '@/lib/utils';
import Image from 'next/image'
import React from 'react'

enum CallStatus {
    INACTIVE = 'INACTIVE',
    CONNECTING = 'CONNECTING',
    ACTIVE = 'ACTIVE',
    FINISHED = 'FINISHED',
}

const Agent = ({ userName }: AgentProps) => {
    const callStatus = CallStatus.FINISHED;
    const isSpeaking = true;
    const messages = [
        'Whats your name?',
        'My name is John Doe, nice to meet you!'
    ];
    const lastmessage = messages[messages.length-1];
    return (
        <>

            <div className='call-view'>
                <div className='card-interviewer'>
                    <div className='avatar'>
                        <Image src={"/ai-avatar.png"} alt="Vapi" width={65} height={54} className='object-cover' />
                        {isSpeaking && <span className='animate-speak'></span>}


                    </div>
                    <h3>AI Interviewer</h3>
                </div>

                <div className='card-border'>
                    <div className='card-content'>
                        <Image src={"/user-avatar.png"} alt="User" width={540} height={540} className='object-cover rounded-full size-[120px]' />
                        <h3>{userName}</h3>
                    </div>
                </div>
            </div>

            <div className='w-full flex justify-center'>
                {messages.length > 0 && (<div className='transcript-border'>
                        <div className='transcript'>

                        <p key={lastmessage} className={cn('transition-opacity duration-500 opacity-0', 'animate-fadeIn opacity-100')}>{lastmessage}</p>
                        </div>
                        </div>
                )}
                {callStatus!=='ACTIVE' ? (
                    <button className='relative btn-call'>
                        <span className={cn('absolute animate-ping rounded-full opacity-75', callStatus !== CallStatus.CONNECTING && 'hidden')}/>
                        <span>
                            {callStatus === 'INACTIVE' || callStatus==='FINISHED'?'Call':'. . .'}
                        </span>
                    </button>
                ) : (
                    <button className='btn-disconnect'>End</button>
                )}

            </div>
        </>
    )
}

export default Agent;