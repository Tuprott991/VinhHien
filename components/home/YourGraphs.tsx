import React from 'react';

import { Card, Heading, Text, VStack } from "@chakra-ui/react";

import CreatorGraphs from "@/components/utilities/graphs/CreatorGraphs";
import AuthProviderButtons from "@/components/utilities/authButtons/AuthProviderButtons";
import Loading from "@/components/utilities/Loading";
import CreateGraph from "@/components/home/CreateGraph";

import useAuth from "@/hooks/useAuth";

const YourGraphs = () => {

    const { user, isLoading } = useAuth();

    return (
        <VStack
            spacing={4}
            alignItems={'flex-start'}
            w={'100%'}
        >
            <VStack
                alignItems={'flex-start'}
                w={'100%'}
                spacing={0}
            >
                <Heading>
                    Các Môn Học Của Bạn
                </Heading>
                <Text
                    fontSize={'md'}
                    opacity={0.7}
                >
                    Các môn học tạo ra đồ thị kiến thức mà trợ lý học tập của bạn có thể sử dụng để giúp bạn đạt được các mục tiêu học tập của mình.
                </Text>
            </VStack>
            <CreateGraph />
            <Loading loading={isLoading}>
                {
                    user ? (
                        <CreatorGraphs creatorId={user.id} />
                    ) : (
                        <NotLoggedIn />
                    )
                }
            </Loading>
        </VStack>
    );
};

const NotLoggedIn = () => {
    return (
        <Card>
            <Text
                fontSize={{
                    base: 'lg',
                    md: 'xl'
                }}
                fontWeight={'bold'}
            >
                Bạn phải đăng nhập để xem đồ thị của mình
            </Text>
            <AuthProviderButtons />
        </Card>
    )
}

export default YourGraphs;