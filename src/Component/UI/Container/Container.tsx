import classNames from 'classnames';
import { FC } from 'react';

interface ContainerProps {
  className?: string;
  children?: any;
}

const Container: FC<ContainerProps> = ({ children, className }) => {
  return (
    <div
      className={classNames(
        'max-w-[1320px] xl:max-w-[1140px] lg:max-w-[960px] md:max-w-[800px] sm:max-w-[540px] px-[16px] m-auto ',
        className,
      )}
    >
      {children}
    </div>
  );
};

export default Container;
