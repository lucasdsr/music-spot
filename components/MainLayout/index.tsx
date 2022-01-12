import { ReactElement } from 'react';

interface IMainLayout {
  children: React.ReactNode;
}

const MainLayout = ({
  children,
  ...otherProps
}: IMainLayout): ReactElement => {
  return (
    <div {...otherProps}>
      <div>header</div>
      <div>{children}</div>
      <div>footer</div>
    </div>
  )
};

export default MainLayout;