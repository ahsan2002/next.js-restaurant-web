import React from 'react'
import Link from 'next/link'
import { MenuType } from '@/types/types'

const getData=async ()=>{
        const res =await fetch("http://localhost:3000/api/categories",{
          cache:"no-store",
        })
        if(!res.ok){
          throw new Error("Failed!");
        }
        return res.json();
}

const MenuPage = async () => {
  const menu:MenuType =await getData()
  return (
    <div className='p-4 lg:px-20 xl:px-40 h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] flex flex-col md:flex-row items-center' >
      {
        menu.map(item=>(
          <Link className='w-full h-1/3  bg-cover p-5 md:h-2/3' key={item.id} href={`/menu/${item.slug}`} style={{backgroundImage:`url(${item.img}`}}>
            <div className={`text-${item.color} w-1/2`}>
              <h1 className=' uppercase text-2xl font-bold'>{item.title}</h1>
              <p className=' text-xs md:text-xs xl:text-sm my-3'>{item.desc}</p>
              <button className={`hidden xl:block bg-${item.color} text-${item.color === "black" ? "white" : "red-500"} py-2 px-4 rounded-md`}
              >Explore</button>
            </div>
          </Link>
        ))
      }

    </div>
  )
}

export default MenuPage