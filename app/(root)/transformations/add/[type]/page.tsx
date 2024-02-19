import Header from '@/components/shared/Header'
import TransformationForm from '@/components/shared/TransformationForm'
import { transformationTypes } from '@/constants'
import { getUserById } from '@/lib/actions/user.actions'
import { auth } from '@clerk/nextjs'
import { redirect } from 'next/navigation'
import React from 'react'

const AddTransformationsTypePage = async ({ params: { type } }: SearchParamProps) => {
 const {userId} = auth()
 const transformation = transformationTypes[type]

 if (!userId) redirect('/sign-in') 

 const user = await getUserById(userId)
  return (
    <>
      <Header
        title={transformation.title}
        subTitle={transformation.subTitle}
      />
      <section className='mt-10'>
      <TransformationForm 
        action="Add"
        data={null}
        type={transformation.type as TransformationTypeKey}
        userId={user?._id}
        creditBalance={user?.creditBalance}
      />
      </section>
      
    </>
  )
}

export default AddTransformationsTypePage