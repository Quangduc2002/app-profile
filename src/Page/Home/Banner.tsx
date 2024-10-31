import React from 'react';
import Text from '@/Component/UI/Text';
import Container from '@/Component/UI/Container/Container';
import { useTranslation } from 'react-i18next';
import { Typewriter } from 'react-simple-typewriter';
import { Icon } from '@/Component/UI/IconFont/Icon';
import { Link } from 'react-router-dom';

function Banner() {
  const { t } = useTranslation('home');
  return (
    <div className='md:h-[500px] mb-[48px]'>
      <div className='home'></div>
      <Container className='relative mt-20 z-20 md:grid md:grid-cols-2 flex flex-col max-md:gap-8 !px-0 gap-4'>
        <div>
          <Text type='heading3-bold' className='text-[--text-white]'>
            {t('txt_hi_there')}&nbsp;
            <Text element='span' className='text-4xl wave'>
              👋🏻
            </Text>
          </Text>

          <div>
            <Text element='span' type='heading3-bold' className='text-[--text-white]'>
              {t('txt_i')}
            </Text>
            &nbsp; &nbsp;
            <Text element='span' type='heading3-bold' className='text-[#ec4899]'>
              {t('txt_name')}
            </Text>
          </div>

          <Text className='text-[--brand-name-100] Typewriter h-7'>
            <Typewriter
              words={['MERN Stack Developer', 'Software Developer', 'Open Source Contributor']}
              loop
            />
          </Text>

          <div className='flex gap-6 my-16'>
            <Link to={'/'} target='_blank'>
              <Icon icon='icon-tiktok' className='text-[--brand-social] text-[30px]' />
            </Link>
            <Link to={'https://www.facebook.com/pqduc.202/'} target='_blank'>
              <Icon icon='icon-face-book' className='text-[--brand-social] text-[30px]' />
            </Link>
          </div>

          <div className='flex gap-8'>
            <button
              className='resize-button max-sm:p-[12px] border border-solid border-[--border-hero-right]'
              style={{ background: 'unset' }}
            >
              <Text className='uppercase text-lg max-sm:text-sm font-semibold text-[--text-white]'>
                {t('txt_skill')}
              </Text>
              <Icon icon='icon-fire' className='text-[#ffa500] text-xl' />
            </button>
            <button className='resize-button max-sm:p-[12px]'>
              <Text className='uppercase text-lg max-sm:text-sm font-semibold'>
                {t('txt_resume')}
              </Text>
              <Icon icon='icon-download' className='text-white text-xl' />
            </button>
          </div>
        </div>

        <div className='hero_right h-max rounded-2xl'>
          <div className='border-top'></div>
          <div className='border border-[--border-hero-right] rounded-t-2xl'>
            <div className='flex gap-5 h-[50px] px-[30px] items-center'>
              <div className='w-[12px] h-[12px] rounded-full bg-[--text-red-500]'></div>
              <div className='w-[12px] h-[12px] rounded-full bg-[--text-yellow-500]'></div>
              <div className='w-[12px] h-[12px] rounded-full bg-[--text-green-500]'></div>
            </div>
          </div>
          <div className='border border-[--border-hero-right] rounded-b-2xl p-[40px]'>
            <div className='flex gap-3'>
              <Text className='text-[--text-pink-100]'>const</Text>
              <Text className='text-[--text-white]'>developer</Text>
              <Text className='text-[--text-pink-100]'>=</Text>
              <Text className='text-[--text-white]'>{'{'}</Text>
            </div>

            <div className='ml-5'>
              <div className='flex gap-3'>
                <Text className='text-[--text-white]'>name:</Text>
                <Text className='text-[--text-white]'>Quang Đức,</Text>
              </div>

              <div className='flex gap-3'>
                <Text className='text-[--text-white]'>skills:</Text>
                <Text className='text-[--text-pink-200]'>
                  [ 'ReactJS', 'Redux', 'NextJS', 'NestJS', 'NoSQL', 'SQL', 'Docker', 'NodeJS' ],
                </Text>
              </div>
            </div>

            <Text className='text-[--text-white]'>{'}'}</Text>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Banner;
