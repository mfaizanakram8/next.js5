import React from 'react';

const page = () => {
  return (
    <div className="flex justify-center items-center min-h-screen" style={{ backgroundColor: 'silver' }}>
      <figure className='flex flex-col md:flex-row items-center bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800'>
        <div className='flex flex-col md:flex-row w-full items-center'>
          <blockquote className='md:w-1/2 text-left'>
            <p className='text-lg font-medium'>
              Prophet Muhammad (ﷺ) is the last messenger of God. He is the best of creations, he is a role model on how to be of exemplary character, kindness, compassion, mercy, gratitude, thankfulness, abundance, courage, fearlessness, self-reflection, and an unwavering belief in his mission.
            </p>
          </blockquote>
          <div className='flex flex-col items-center'>
            <div className='w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto'>
              <img
                className='w-full h-full'
                src="ya.png"
                alt="Hazrat Muhammad (صَلَّى اللّٰهُ عَلَيْهِ وَسَلَّمَ)"
              />
            </div>
            <figcaption className='font-medium mt-4 text-center'>
              <div className='text-sky-500 dark:text-sky-400'>
                Hazrat Muhammad (صَلَّى اللّٰهُ عَلَيْهِ وَسَلَّمَ)
              </div>
              <div className='text-slate-700 dark:text-slate-400'>
                Khatim An-nabiyin
              </div>
            </figcaption>
          </div>
          <blockquote className='md:w-1/2 flex justify-center text-center'>
            <p className='text-lg font-medium'>
              Ilm Aisa bhi na de khud ko kahuñ un(ﷺ) jaisa Isse behtar mere maula mujhe jaahil kar de
            </p>
          </blockquote>
        </div>
      </figure>
    </div>
  );
}

export default page;
