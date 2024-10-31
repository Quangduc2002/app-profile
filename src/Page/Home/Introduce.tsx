import React from 'react';
import Text from '@/Component/UI/Text';
import { useTranslation } from 'react-i18next';

function Introduce() {
  const { t, i18n } = useTranslation('home');

  return (
    <div className='flex justify-between items-center pb-[80px] border-b border-solid border-[--border-hero-right] gap-4'>
      <div className='flex flex-col gap-8'>
        <div>
          <Text
            element='span'
            type='heading3-bold'
            className='uppercase text-[--text-white] max-sm:!text-[24px]'
          >
            {i18n.language === 'en' && 'LET ME '}
            <Text element='span' type='heading3-bold' className='uppercase text-[#ec4899]'>
              {t('txt_introduce')}
            </Text>
            &nbsp;
            {t('txt_myself')}
          </Text>
        </div>

        <div className='flex flex-col gap-8'>
          <Text type='title1-semi-bold' className='!font-medium text-[--bs-navbar-color]'>
            {t('txt_introduce_1')}
          </Text>
          <Text
            type='title1-semi-bold'
            element='span'
            className='!font-medium text-[--bs-navbar-color]'
          >
            {t('txt_introduce_2.1')}&nbsp;
            <Text
              type='title1-semi-bold'
              element='span'
              className='text-[#ec4899] italic font-medium'
            >
              {t('txt_introduce_2.2')}
            </Text>
          </Text>
          <Text type='title1-semi-bold' className='!font-medium text-[--bs-navbar-color]'>
            {t('txt_introduce_3.1')}&nbsp;
            <Text
              type='title1-semi-bold'
              element='span'
              className='text-[#ec4899] italic font-medium'
            >
              {t('txt_introduce_3.2')}
            </Text>
          </Text>
          <Text type='title1-semi-bold' className='!font-medium text-[--bs-navbar-color]'>
            {t('txt_introduce_4.1')}&nbsp;
            <Text
              type='title1-semi-bold'
              element='span'
              className='text-[#ec4899] italic font-medium'
            >
              {t('txt_introduce_4.2')}
            </Text>
            &nbsp;
            <Text element='span' className='!font-medium text-[--bs-navbar-color]'>
              {t('txt_introduce_4.3')}
            </Text>
            &nbsp;
            <Text
              type='title1-semi-bold'
              element='span'
              className='text-[#ec4899] italic font-medium'
            >
              {t('txt_introduce_4.4')}
            </Text>
          </Text>
        </div>
      </div>

      <div className='max-md:hidden w-[200px] h-[200px]'>
        <img className='w-[200px] h-[200px] rounded-full object-cover' src='/Images/IMG_2002.jpg' />
      </div>
    </div>
  );
}

export default Introduce;
