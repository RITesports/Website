import { ComponentPropsWithRef, forwardRef } from 'react';

export type FooterProps = ComponentPropsWithRef<'footer'>;
const Footer = forwardRef<HTMLElement, FooterProps>((props, ref) => (
  <footer ref={ref} {...props} />
));
Footer.displayName = 'Footer';

export default Footer;
