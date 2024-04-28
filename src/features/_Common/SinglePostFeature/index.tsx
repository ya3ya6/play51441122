import { usePostQuery } from '@/api/services/blog/_queries';
import { useScroll } from '@/hooks';
import { Container, Flex } from '@chakra-ui/react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { FunctionComponent, useRef, useState } from 'react';
import {
  BottomDetailsBoxSection,
  ContentSection,
  FaqSection,
  GetCommentSection,
  RelatedPostsSection,
  SetCommentSection,
  StudyGuideSection,
  TopDetailsBoxSection,
} from './components';

interface SinglePostFeatureProps {
  id: string;
  type: 'M' | 'N';
}

export const SinglePostFeature: FunctionComponent<SinglePostFeatureProps> = ({ id, type }) => {
  const router = useRouter();
  const [replyUser, setReplyUser] = useState({ name: '' });
  const { data: post } = usePostQuery({
    slug: router.query.slug as string,
    type,
  });
  const setCommentBoxRef = useRef<any>();

  useScroll();

  if (!post) return null;

  return (
    <Container mt={{ base: '130px', xl: '100px' }} maxW="container.xl">
      <Head>
        <title>{post.name} | پرنیان</title>
      </Head>

      <Flex as="main" direction={{ base: 'column', xl: 'row' }} w="100%" align="flex-start">
        <Flex position="relative" me="20px" w={{ base: '100%', xl: '70%' }} direction="column">
          <Flex
            w="100%"
            direction="column"
            bgColor="#fff"
            rounded="xl"
            position="relative"
            justify="center"
            border="1px solid #eee"
            p="60px 30px 20px"
          >
            <TopDetailsBoxSection post={post} />
            <ContentSection id={id} post={post} />
          </Flex>
          <FaqSection faqs={post.faq} />
        </Flex>
        <Flex
          position={{ base: 'static', xl: 'sticky' }}
          top="120px"
          as="aside"
          gap="60px"
          direction="column"
          w={{ base: '100%', xl: '30%' }}
          mt={{ base: '50px', xl: '0' }}
          justify="center"
          pb="15px"
        >
          <StudyGuideSection id={id} display={{ base: 'none', xl: 'flex' }} />
          <RelatedPostsSection posts={post.relatedPosts} />
        </Flex>
      </Flex>
      <BottomDetailsBoxSection post={post} />
      <Flex my={{ base: '0px', lg: '80px' }} direction="column">
        <SetCommentSection
          replyUser={replyUser}
          setReplyUser={setReplyUser}
          post={post}
          commentRef={setCommentBoxRef}
        />
        <GetCommentSection
          post={post}
          replyUser={replyUser}
          setReplyUser={setReplyUser}
          commentRef={setCommentBoxRef}
        />
      </Flex>
    </Container>
  );
};
