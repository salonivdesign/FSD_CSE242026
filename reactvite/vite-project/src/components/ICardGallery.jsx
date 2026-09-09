import React from 'react'
import ICard from './ICard'
function ICardGallery() {
    const student=[{
        collegeName:"ABES Engineering College" ,
        pic:"https://images.unsplash.com/photo-1787612498856-b8bb946c1967?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1OHx8fGVufDB8fHx8fA%3D%3D" ,
        rollNo:"123456" ,
        name:"Saloni" ,
        branch:"CSE"
    },{
        collegeName:"ABES Engineering College" ,
        pic:"https://images.unsplash.com/photo-1787613499742-12b259e19fc2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3NHx8fGVufDB8fHx8fA%3D%3D" ,
        rollNo:"123459" ,
        name:"Anshu" ,
        branch:"CSE"
    },{
        collegeName:"ABES Engineering College" ,
        pic:"https://plus.unsplash.com/premium_photo-1786053820590-83d0564f3cb0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw4OHx8fGVufDB8fHx8fA%3D%3D" ,
        rollNo:"123458" ,
        name:"Krishna" ,
        branch:"CSE"
    },{
        collegeName:"ABES Engineering College" ,
        pic:"https://images.unsplash.com/photo-1788165153988-5febefdbf4bb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw4Nnx8fGVufDB8fHx8fA%3D%3D" ,
        rollNo:"123457" ,
        name:"Ansh" ,
        branch:"CSE"
    }]
  return (
    <div>

        {/* <ICard collegeName="ABES Engineering College" pic="https://images.unsplash.com/photo-1787612498856-b8bb946c1967?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1OHx8fGVufDB8fHx8fA%3D%3D" rollNo="123456" name="Saloni" branch="CSE"/>
         <ICard collegeName="ABES Engineering College" pic="https://images.unsplash.com/photo-1787613499742-12b259e19fc2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3NHx8fGVufDB8fHx8fA%3D%3D" rollNo="123459" name="Anshu" branch="CSE"/>
          <ICard collegeName="ABES Engineering College" pic="https://plus.unsplash.com/premium_photo-1786053820590-83d0564f3cb0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw4OHx8fGVufDB8fHx8fA%3D%3D" rollNo="123458" name="Krishna" branch="CSE"/>
           <ICard collegeName="ABES Engineering College" pic="https://images.unsplash.com/photo-1788165153988-5febefdbf4bb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw4Nnx8fGVufDB8fHx8fA%3D%3D" rollNo="123457" name="Ansh" branch="CSE"/> */}
           {student.map((student, index) => (
             <ICard key={index} data={student} />
           ))}
    </div>
  )
}

export default ICardGallery