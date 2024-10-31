import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Container from '@/Component/UI/Container/Container';
import Text from '@/Component/UI/Text';
import { useTranslation } from 'react-i18next';
import { Icon } from '@/Component/UI/IconFont/Icon';
import { Link } from 'react-router-dom';
function Project() {
  const { t } = useTranslation();

  const projects = [
    {
      clone_url: 'https://github.com/Quangduc2002/app-furniture',
      name: 'app-furniture',
      visibility: 'public',
      language: 'TypeScript',
      stargazers_count: ' 0',
      desc: 'Vite + React + TypeScript',
    },
    {
      clone_url: 'https://github.com/Quangduc2002/zingmp3',
      name: 'zingmp3',
      visibility: 'public',
      language: 'TypeScript',
      stargazers_count: ' 0',
      desc: 'Vite + React + TypeScript',
    },

    {
      clone_url: 'https://github.com/Quangduc2002/BENoiThat',
      name: 'BENoiThat',
      visibility: 'public',
      language: 'Javascript',
      stargazers_count: ' 0',
      desc: 'Nodejs',
    },

    {
      clone_url: 'https://github.com/Quangduc2002/Fruit-Ninja',
      name: 'Fruit-Ninja',
      visibility: 'public',
      language: 'TypeScript',
      stargazers_count: ' 0',
      desc: 'Vite + React + TypeScript',
    },

    {
      clone_url: 'https://github.com/Quangduc2002/BanGiay',
      name: 'web-ban-giay',
      visibility: 'public',
      language: 'TypeScript',
      stargazers_count: ' 0',
      desc: 'Vite + React + TypeScript',
    },
  ];

  return (
    <Container className='projects-container'>
      <Text type='heading3-semi-bold' className='text-[--text-white] text-center my-[48px]'>
        {t('txt_project')}
      </Text>

      <div className='md:grid lg:grid-cols-3 md:grid-cols-2 gap-4 flex flex-col-reverse py-[30px]'>
        {projects.map((project: any) => (
          <Link
            to={project?.clone_url}
            target='_blank'
            className='border-[2px] experiences cursor-pointer'
            key={project?.id}
          >
            <div className='flex flex-col justify-between p-6 h-[150px] experiences-bg bg-[--glow-card-background] border-[2px] border-solid border-[--border-hero-right] rounded-2xl hover:rounded-none'>
              <div className='flex flex-col gap-2'>
                <div className='flex items-center gap-4'>
                  <Icon icon='icon-icon-project' className='text-[20px] text-[--bs-navbar-color]' />
                  <Text className='text-[--text-white] text-[20px]'>{project?.name}</Text>
                  <Text
                    element='span'
                    className='text-white px-2 py-1 bg-[--brand-social] rounded-xl'
                  >
                    {project?.visibility}
                  </Text>
                </div>
                <Text className='text-[--text-white]'>{project?.desc}</Text>
              </div>
              <div className='flex gap-2'>
                <Text className='text-[--text-white]'>{project?.language}</Text>
                <Text element='span' className='text-[--text-white]'>
                  ⭐ {project?.stargazers_count}
                </Text>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </Container>
  );
}

export default Project;
