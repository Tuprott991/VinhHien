import React from 'react';
import { Card, Container, Heading, Image, Text, VStack } from "@chakra-ui/react";
import Head from 'next/head';
import AuthProviderButtons from "@/components/utilities/authButtons/AuthProviderButtons";
import LandingGraph from "@/components/home/NotLoggedIn/LandingGraph";

const NotLoggedIn = () => {
  return (
    <>
      <Head>
        <title>VinhHienEDU - Ứng dụng học tập AI cho học sinh</title>
        <meta name="description" content="VinhHienEDU là một ứng dụng học tập được hỗ trợ bởi AI, được thiết kế để trở thành bộ não thứ hai của bạn. Nâng cao việc học của bạn với sự trợ giúp cá nhân hóa sử dụng công nghệ ChatGPT." />
        <meta name="keywords" content="ứng dụng học tập AI, ứng dụng học tập AI miễn phí, ChatGPT cho học sinh, học tập cá nhân hóa, công nghệ giáo dục" />
        <meta property="og:title" content="VinhHienEDU - Ứng dụng học tập AI cho học sinh" />
        <meta property="og:description" content="VinhHienEDU là một ứng dụng học tập được hỗ trợ bởi AI, được thiết kế để trở thành bộ não thứ hai của bạn. Nâng cao việc học của bạn với sự trợ giúp cá nhân hóa sử dụng công nghệ ChatGPT." />
        <meta property="og:image" content="/logo.png" />
        <meta property="og:url" content="https://vinhhienedu.io" />
        <meta name="twitter:title" content="VinhHienEDU - Ứng dụng học tập AI cho học sinh" />
        <meta name="twitter:description" content="VinhHienEDU là một ứng dụng học tập được hỗ trợ bởi AI, được thiết kế để trở thành bộ não thứ hai của bạn. Nâng cao việc học của bạn với sự trợ giúp cá nhân hóa sử dụng công nghệ ChatGPT." />
        <meta name="twitter:image" content="/logo.png" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Container
        maxW={'4xl'}
        w={'100%'}
        h={'100%'}
        py={8}
        display={'flex'}
        flexDirection={'column'}
        justifyContent={'center'}
      >
        <Card
          flexDirection={'column'}
          justifyContent={'center'}
          alignItems={'center'}
          gap={4}
          p={8}
        >
          <VStack spacing={0}>
            <Image
              src={'/logo.png'}
              alt={'VinhHienEDU logo'}
              boxSize={'100px'}
            />
            <Heading as="h1">
              <Text as='span'>VinhHien</Text>
              <Text as='span' color='brand.500'>EDU</Text>
            </Heading>
            <Text
              fontSize={'lg'}
              opacity={0.7}
              fontWeight={'bold'}
            >
              Bộ não thứ hai cho học sinh
            </Text>
          </VStack>
          <AuthProviderButtons />
          <LandingGraph />
        </Card>
      </Container>
    </>
  );
};

export default NotLoggedIn;