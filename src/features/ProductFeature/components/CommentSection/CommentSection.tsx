import { Box, Container, Stack } from '@chakra-ui/react';
import { FunctionComponent, useState } from 'react';
import { useText } from '@/hooks';
import { I18_NAMESPACES } from '@/common/constants/Locales';
import Title from './Title/Title';
import UserBox from './UserBox/UserBox';
import VideoBox from './VideoBox/VideoBox';
import { useProduct } from '../../hooks';

interface CommentSectionProps {}

const extraProps = [
  {},
  {
    mb: { base: '0px', xl: '100px' },
  },
  {},
  {
    ms: { base: '0', xl: '-50px' },
  },
  {
    ms: { base: '0', xl: '-50px' },
  },
  {},
  {
    mt: { base: '0', xl: '100px' },
  },
  {},
];

const CommentSection: FunctionComponent<CommentSectionProps> = () => {
  const product = useProduct();
  const t = useText(I18_NAMESPACES.SHOP);
  const [commentActive, setCommentActive] = useState(product.customerOpinion[0]?.id);

  const firstThreeComments = product.customerOpinion.slice(0, 3);
  const secondTwoComments = product.customerOpinion.slice(3, 5);
  const thirdThreeComments = product.customerOpinion.slice(5, 8);

  let index = 0;

  if (product.customerOpinion.length === 0) {
    return null;
  }
  const activeComment = product.customerOpinion.find(item => item.id === commentActive);
  return (
    <Box
      minH="600px"
      bgImg="linear-gradient(27deg, rgba(247,247,247,0.97) 0%, rgba(247,247,247,0.97) 100%) , url(/images/product/pattern.png)"
      bgRepeat="repeat"
      backgroundAttachment="fixed"
      bgSize="10px"
      py="5px"
      pb="180px"
      mt="100px"
    >
      <Title title={t('product.comment.title')} text={t(t('product.comment.description'))} />
      <Container position="relative" maxW="container.xl">
        <Stack spacing={{ base: '60px' }}>
          {firstThreeComments.length > 0 && (
            <Stack
              direction="row"
              spacing={{ base: '60px', xl: '0' }}
              flexWrap="wrap"
              justify={{ base: 'center', xl: 'space-between' }}
              mb={{ base: '0', xl: '-50px' }}
              px={{ base: '0', xl: '100px' }}
              align="center"
              order={{ base: '-1', xl: '0' }}
            >
              {firstThreeComments.map(comment => (
                <UserBox
                  key={comment.id}
                  comment={comment}
                  commentActive={commentActive}
                  setCommentActive={setCommentActive}
                  {...extraProps[index++]}
                />
              ))}
            </Stack>
          )}
          {secondTwoComments.length > 0 && (
            <Stack
              direction="row"
              position={{ base: 'static', xl: 'absolute' }}
              top="50%"
              left="0"
              right="0"
              order={{ base: '-1', xl: '0' }}
              align="center"
              transform={{ base: 'translateY(0)', xl: 'translateY(-50%)' }}
              px={{ base: '0', xl: '100px' }}
              justifyContent={{ base: 'center', xl: 'space-between' }}
              spacing="60px"
            >
              {secondTwoComments.map(comment => (
                <UserBox
                  key={comment.id}
                  comment={comment}
                  commentActive={commentActive}
                  setCommentActive={setCommentActive}
                  {...extraProps[index++]}
                />
              ))}
            </Stack>
          )}

          <VideoBox
            url={activeComment?.video}
            name={activeComment?.name}
            subName={activeComment?.subName}
          />
          {thirdThreeComments.length > 0 && (
            <Stack
              direction="row"
              flexWrap="wrap"
              justify={{ base: 'center', xl: 'space-between' }}
              spacing={{ base: '60px', xl: '0' }}
              mt={{ base: '0', xl: '-50px' }}
              px={{ base: '0', xl: '100px' }}
              order={{ base: '-1', xl: '0' }}
              align="center"
            >
              {thirdThreeComments.map(comment => (
                <UserBox
                  key={comment.id}
                  comment={comment}
                  commentActive={commentActive}
                  setCommentActive={setCommentActive}
                  {...extraProps[index++]}
                />
              ))}
            </Stack>
          )}
        </Stack>
      </Container>
    </Box>
  );
};

export default CommentSection;
