import { ChakraProps, IconButton, Stack } from '@chakra-ui/react';
import {
  AparatIcon,
  FaceBookIcon,
  InstagramIcon,
  LinkedinIcon,
  TelegramIcon,
  TwitterIcon,
  WhatsAppIcon,
} from '@/common/icons';
import { createElement, FunctionComponent } from 'react';
import { useAboutusQuery } from '@/api/services/overview/_queries';

export const socialIcons = {
  instagram: InstagramIcon,
  facebook: FaceBookIcon,
  telegram: TelegramIcon,
  twitter: TwitterIcon,
  aparat: AparatIcon,
  whatsapp: WhatsAppIcon,
  linkedin: LinkedinIcon,
} as const;

interface SocialProps extends ChakraProps {
  colorScheme?: string;
  variant?: string;
}

/**
 * ### Common Component BOX.
 */

export const Social: FunctionComponent<SocialProps> = ({ ...chakraProps }) => {
  const { data: aboutUs } = useAboutusQuery(null);

  return (
    <Stack direction="row" spacing="5px" {...chakraProps}>
      {aboutUs?.socialMediaLinks
        .filter(({ slug }) => Object.keys(socialIcons).includes(slug))
        .map(({ id, slug, url }) => (
          <IconButton
            flexShrink={0}
            minW="32px"
            h="32px"
            colorScheme="brand"
            fontSize="lg"
            rounded="full"
            aria-label={`${slug} Icon`}
            as="a"
            href={url}
            target="_blank"
            key={id}
            icon={createElement(socialIcons[slug as keyof typeof socialIcons])}
          />
        ))}
    </Stack>
  );
};
