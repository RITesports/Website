import { IconProps } from '@mui/material/Icon';

import IconFromLink from 'lib/icons';

export type TigerLogoGrayProps = Omit<IconProps, 'color'>;
const TigerLogoGray = (props: TigerLogoGrayProps) => <IconFromLink src="https://hooli-drive.sfo2.digitaloceanspaces.com/website/public/assets/TigerLogo_Gray.svg" alt="tiger logo gray" {...props} />;

export default TigerLogoGray;
