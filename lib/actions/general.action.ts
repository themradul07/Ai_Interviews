'use server';

import { auth, db } from "@/firebase/admin";


export async function getInterviewsByUserId(userId:  string): Promise<Interview[] | null>{
    try {
        const interviews= await db
            .collection('interviews')
            .where('userId', '==', userId)
            .orderBy('createdAt', 'desc')
           .get();
        
        if(interviews.empty) return null;
        return interviews.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
        })) as Interview[];



        
    } catch (e) {
        console.log(e);
        return null;
        
    }
}


export async function getLatestInterviews(params : GetLatestInterviewsParams): Promise<Interview[] | null>{ 
    try {
        const {userId , limit} = params;
        const interviews= await db
            .collection('interviews')
            .orderBy('createdAt', 'desc')
            .where('finalized','==', true)
            .where('userId', '==', userId)
            .limit(limit || 10)
           .get();
        
        if(interviews.empty) return null;
        return interviews.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
        })) as Interview[];        
    } catch (e) {
        console.log(e);
        return null;
        
    }
}


export async function getInterviewById(id: string): Promise<Interview | null> {
  const interview = await db.collection("interviews").doc(id).get();

  return interview.data() as Interview | null;
}