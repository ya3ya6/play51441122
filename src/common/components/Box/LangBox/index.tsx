import { useLanguageMutation } from '@/api/services/core';
import { AppLangType, I18_NAMESPACES } from '@/common/constants/Locales';
import { CnIcon, IrIcon, SaIcon, TrIcon, UsIcon } from '@/common/icons/flagicons';
import { useText } from '@/hooks';
import { LangModel } from '@/model';
import {
  Box,
  Button,
  Center,
  HStack,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { FunctionComponent, useState } from 'react';

interface LangBoxProps {
  language?: LangModel[];
  hideName?: boolean;
}

const ReturnCountrySvg = ({ shortName }: { shortName: AppLangType }) => {
  switch (shortName) {
    case 'en':
      return (
        <Box rounded="sm" overflow="hidden" w="25px">
          <UsIcon />
        </Box>
      );
    case 'ar':
      return (
        <Box rounded="sm" overflow="hidden" w="25px">
          <SaIcon />
        </Box>
      );
    case 'zh':
      return (
        <Box rounded="sm" overflow="hidden" w="25px">
          <CnIcon />
        </Box>
      );
    case 'fa':
      return (
        <Box rounded="sm" overflow="hidden" w="25px">
          <IrIcon />
        </Box>
      );
    case 'tr':
      return (
        <Box rounded="sm" overflow="hidden" w="25px">
          <TrIcon />
        </Box>
      );
    default:
      return null;
  }
};

export const LangBox: FunctionComponent<LangBoxProps> = ({ language, hideName = false }) => {
  const t = useText(I18_NAMESPACES.COMMON);
  const router = useRouter();
  const currentLang = router.locale;
  const [activeLang] = useState(currentLang);
  const { pathname, asPath, query } = router;
  const mutateLang = useLanguageMutation();

  const changeLanguageHandler = (shortName: AppLangType) => {
    if (shortName !== activeLang) {
      mutateLang.mutate(
        { language: shortName },
        {
          onSuccess: () => {
            router.push({ pathname, query }, asPath, { locale: shortName });
          },
        },
      );
    }
  };

  return (
    <Box w={hideName ? '' : '120px'} h="32px">
      <Menu>
        <MenuButton
          colorScheme="gray"
          w="100%"
          as={!hideName ? Button : IconButton}
          leftIcon={
            !hideName ? (
              <Box rounded="sm" overflow="hidden" w="25px">
                <ReturnCountrySvg shortName={activeLang as AppLangType} />
              </Box>
            ) : null
          }
          icon={
            hideName ? (
              <Center rounded="sm" overflow="hidden" w="25px">
                <ReturnCountrySvg shortName={activeLang as AppLangType} />
              </Center>
            ) : null
          }
        >
          {!hideName ? t(`lang.${currentLang}`) : null}
        </MenuButton>
        <MenuList minW="120px" zIndex={10000}>
          {language?.map(lang => (
            <MenuItem key={lang.name} p="0">
              <HStack
                p="10px 5px"
                w="100%"
                justify="flex-start"
                align="center"
                spacing="8px"
                onClick={() => changeLanguageHandler(lang.shortName)}
              >
                <Box rounded="sm" overflow="hidden" w="25px">
                  <ReturnCountrySvg shortName={lang.shortName} />
                </Box>
                <Text>{t(`lang.${lang.shortName}`)}</Text>
              </HStack>
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </Box>
  );
};
