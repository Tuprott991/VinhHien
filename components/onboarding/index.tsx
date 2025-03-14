import React, {useEffect} from 'react';

import {useRouter} from "next/navigation";

import {Avatar, Button, Card, Container, Heading, Text, VStack} from "@chakra-ui/react";

import TextInput from "@/components/utilities/forms/TextInput";
import Loading from "@/components/utilities/Loading";

import useOnboarding from "@/hooks/mutators/useOnboarding";

import {useCurrentUser} from "@/contexts/CurrentUserContext";

const Onboarding = () => {

    const router = useRouter();

    const { user: userData, isLoading } = useCurrentUser();

    useEffect(() => {
        if(userData) {
            router.replace('/')
        }
    }, [router, userData]);

    const {
        username,
        setUsername,
        profilePictureUrl,
        randomizeProfilePicture,
        isDisabled,
        onSubmit
    } = useOnboarding();

    return (
        <Loading
            loading={isLoading}
            h={'100%'}
            w={'100%'}
        >
            <Container
                maxW={'2xl'}
                h={'100%'}
                display={'flex'}
                flexDir={'column'}
                justifyContent={'center'}
            >
                <Card
                    p={4}
                    flexDir={'column'}
                    alignItems={'center'}
                    w={'100%'}
                    gap={4}
                >
                    <VStack>
                        <Heading>
                            Chào mừng đến với Rabbithole
                        </Heading>
                        <Text>
                            Bắt đầu bằng cách tạo một tài khoản.
                        </Text>
                    </VStack>
                    <VStack>
                        <Avatar
                            size={'xl'}
                            name={username}
                            src={profilePictureUrl}
                        />
                        <Button
                            onClick={randomizeProfilePicture}
                            variant={'outline'}
                            colorScheme={'brand'}
                        >
                            Đổi ảnh đại diện ngẫu nhiên
                        </Button>
                    </VStack>
                    <TextInput
                        label={"Tên người dùng"}
                        placeholder={"Tên người dùng"}
                        value={username}
                        onChange={setUsername}
                    />
                    <Button
                        onClick={onSubmit}
                        isDisabled={isDisabled}
                        colorScheme={'brand'}
                    >
                        Tạo tài khoản
                    </Button>
                </Card>
            </Container>
        </Loading>
    );
};

export default Onboarding;