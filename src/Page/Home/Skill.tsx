import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import Text from '@/Component/UI/Text';
import { useTranslation } from 'react-i18next';
import { skills } from '@/Contanst/skill';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';

interface ISkillItem {
  image: string;
  text: string;
}

const SkillItem: React.FC<ISkillItem> = ({ image, text }) => {
  return (
    <div className='skill-item h-[130px] w-[150px] cursor-pointer m-[20px]'>
      <div className='skill-hover flex flex-col justify-center items-center h-full gap-4 bg-[--skill-card-background] border border-[--border-hero-right] hover:border-[#ee82ee] duration-500 hover:scale-125 rounded-md '>
        <img className='w-[40px] h-[40px]' alt='' src={image} />
        <Text className='text-[--text-white]'>{text}</Text>
      </div>
    </div>
  );
};

function Skill() {
  const { t } = useTranslation();
  const options = {
    rewind: true,
    type: 'loop',
    perPage: 6,
    pagination: false,
    arrows: false,
    focus: 'center',
    autoScroll: {
      speed: 1,
      pauseOnHover: true,
    },
    breakpoints: {
      1285: {
        perPage: 5,
      },
      1024: {
        perPage: 4,
      },
      768: {
        perPage: 3,
      },
      560: {
        perPage: 2.5,
      },
      425: {
        perPage: 1.5,
      },
    },
  };

  return (
    <div className='border-t border-solid border-[--border-hero-right] pb-[100px]'>
      <Text type='heading3-semi-bold' className='text-[--text-white] text-center my-[48px]'>
        {t('txt_skills')}
      </Text>

      <Splide
        aria-label='Book related'
        hasTrack={false}
        options={options as any}
        extensions={{ AutoScroll }}
      >
        <SplideTrack>
          {skills.map((item: any, index: number) => (
            <SplideSlide key={index}>
              <SkillItem {...item} />
            </SplideSlide>
          ))}
        </SplideTrack>
      </Splide>
    </div>
  );
}

export default Skill;
