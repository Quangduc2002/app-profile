import React from 'react';
import Text from '@/Component/UI/Text';
import Container from '@/Component/UI/Container/Container';
import { useTranslation } from 'react-i18next';
import { Icon } from '@/Component/UI/IconFont/Icon';
import { Link } from 'react-router-dom';

function About() {
  const { t } = useTranslation();
  return (
    <Container>
      <div className='md:grid md:grid-cols-2 flex flex-col md:mt-[96px] mt-[50px]'>
        <div>
          <Text type='heading4-semi-bold' className='text-[--text-white] text-center'>
            Know Who{' '}
            <Text type='heading4-semi-bold' element='span' className='text-[#ec4899]'>
              I'M
            </Text>
          </Text>

          <div className='flex flex-col gap-6 mt-[48px]'>
            <Text className='text-[--text-white]' type='body1'>
              {t('txt_about1')}
            </Text>
            <Text className='text-[--text-white]' type='body1'>
              {t('txt_about2')}
            </Text>
            <Text className='text-[--text-white]' type='body1'>
              {t('txt_about3')}
            </Text>
            <Text className='text-[--text-white]' type='body1'>
              {t('txt_about4')}
            </Text>
            <ul className='pl-[32px] list-disc text-[--text-white]'>
              <li>
                <Text className='text-[--text-white]' type='body1'>
                  {t('txt_about5')}
                </Text>
              </li>
              <li>
                <Text className='text-[--text-white]' type='body1'>
                  {t('txt_about6')}
                </Text>
              </li>
              <li>
                <Text className='text-[--text-white]' type='body1'>
                  {t('txt_about7')}
                </Text>
              </li>
            </ul>
          </div>
        </div>

        <img alt='' src='/Images/user.svg' className='w-[500px] m-auto' />
      </div>

      <div className='md:grid md:grid-cols-2 flex flex-col-reverse border-y border-solid border-[--border-hero-right] py-[30px]'>
        <img alt='' src='/Images/code.svg' className='w-[318px] m-auto' />
        <div className='flex flex-col gap-4'>
          <Text type='heading4-semi-bold' element='h1' className='text-[#ec4899] text-center'>
            {t('txt_education')}
          </Text>
          <div className='border-[2px] experiences experiences-bg bg-[--glow-card-background] h-max'>
            <div className='p-4 h-max border-[2px] border-solid border-[--border-hero-right] rounded-2xl hover:rounded-none'>
              <Text type='body1' className='text-[--text-pink-100] text-center'>
                2020-2024
              </Text>
              <div className='flex gap-10 items-center py-7 px-3'>
                <div className='w-[40px] h-[40px]'>
                  <Icon icon='icon-user' className='text-[#8b5cf6] w-[40px] h-[40px]' />
                </div>
                <div className='flex flex-col gap-4'>
                  <Text type='body1' className='text-[--text-white] uppercase'>
                    {t('txt_softwaren')}
                  </Text>
                  <Text type='body1' className='text-[--text-white] uppercase'>
                    {t('txt_school')}
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='md:grid md:grid-cols-2 flex flex-col mt-12'>
        <div className='flex flex-col gap-8'>
          <Text className='uppercase text-[--text-white]' type='heading4-semi-bold'>
            {t('txt_find_me')}
          </Text>
          <div className='flex gap-6'>
            <Icon icon='icon-tiktok' className='text-[--brand-social] text-[30px]' />
            <Link to={'https://www.facebook.com/pqduc.202/'} target='_blank'>
              <Icon icon='icon-face-book' className='text-[--brand-social] text-[30px]' />
            </Link>
          </div>
        </div>
        <div>
          <img className='w-[318px] m-auto' alt='' src='/Images/contact.svg' />
          <Text className=' text-[--text-white] text-center' type='heading5-medium'>
            {t('txt_contact')}
          </Text>
        </div>
      </div>
    </Container>
  );
}

export default About;
