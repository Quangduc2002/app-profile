import React from 'react';
import Text from '@/Component/UI/Text';
import { useTranslation } from 'react-i18next';
import ImageLaptop from '@/Component/UI/ImageLaptop';
import { Icon } from '@/Component/UI/IconFont/Icon';
function Experiences() {
  const { t } = useTranslation();
  const dataExperiences = [
    {
      date: t('txt_date1'),
      title: t('txt_title1'),
      work: t('txt_work1'),
    },
    {
      date: t('txt_date2'),
      title: t('txt_title2'),
      work: t('txt_work2'),
    },
  ];

  return (
    <>
      <Text type='heading3-semi-bold' className='text-[--text-white] text-center my-[48px]'>
        {t('txt_experiences')}
      </Text>

      <div className='md:grid md:grid-cols-2 flex flex-col mb-[48px]'>
        <div>
          <ImageLaptop />
        </div>

        <div className='flex flex-col gap-12'>
          {dataExperiences?.map((item, index) => {
            return (
              <div
                key={index}
                className='border-[2px] experiences experiences-bg bg-[--glow-card-background]'
              >
                <div className='p-4 h-max border-[2px] border-solid border-[--border-hero-right] rounded-2xl hover:rounded-none'>
                  <Text type='body1' className='text-[--text-pink-100] text-center'>
                    {item?.date}
                  </Text>
                  <div className='flex gap-10 items-center py-7 sm:px-3'>
                    <div className='w-[40px] h-[40px]'>
                      <Icon icon='icon-user' className='text-[#8b5cf6] w-[40px] h-[40px]' />
                    </div>
                    <div className='flex flex-col gap-4'>
                      <Text type='body1' className='text-[--text-white] uppercase'>
                        {item?.title}
                      </Text>
                      <Text type='body1' className='text-[--text-white] uppercase'>
                        {item?.work}
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Experiences;
