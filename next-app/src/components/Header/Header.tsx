import { ComponentPropsWithRef, forwardRef } from 'react';

export type HeaderProps = ComponentPropsWithRef<'header'>;
const Header = forwardRef<HTMLElement, HeaderProps>((props, ref) => (
  <header ref={ref} {...props} />
));
Header.displayName = 'Header';

export default Header;
