import React from 'react'
import CardBlog from '@/components/CardBlog';
import { blog } from '@/components/Data';

const LeatestBlog = () => {
  return (
    <div className="
    max-w-[1138px] 
    mx-auto
   
    ">
      <h1 className="text-[42px] leading-normal font-bold font-josefin text-blue my-14 text-center">
      Leatest Blog
      </h1>
      <div className="grid lg:grid-cols-3 gap-[56px] mb-[115px] w-full mx-auto px-4 xl:px-20">
        {blog.map((blog, index) => {
          return (
            <CardBlog
              key={index}
              image={blog.image}
              name={blog.name}
              date={blog.Date}
              title={blog.title}
              baragraph={blog.baragraph}
              read={blog.read}
              
            />
          );
        })}
      </div>
     
    </div>
  )
}

export default LeatestBlog