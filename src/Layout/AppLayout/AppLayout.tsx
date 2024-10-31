import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

function AppLayout() {
  return (
    <div className='bg-[--background-body]'>
      <Suspense fallback={undefined}>
        <Header />

        <main>
          <Outlet />
        </main>

        <Footer />
      </Suspense>
    </div>
  );
}

export default AppLayout;
