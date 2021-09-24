import Icon, { IconProps } from '@mui/material/Icon';
import Image, { ImageProps } from 'next/image';

export type IconFromLinkProps = IconProps & Pick<ImageProps, 'alt' | 'src'>;
const IconFromLink = ({
  src,
  alt,
  sx,
  ...props
}: IconFromLinkProps) => (
  <Icon sx={{ ...sx, position: 'relative' }} {...props}>
    <Image src={src} alt={alt} layout="fill" />
  </Icon>
);

export default IconFromLink;
