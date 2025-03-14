import React from 'react';

import {Button, HStack, VStack, Text} from "@chakra-ui/react";

import {useTaskContext} from "@/contexts/TaskContext";

interface Props {
    skipTopic: () => void,
    nextQuestion: () => void,
}

const Decision: React.FC<Props> = ({ skipTopic, nextQuestion }) => {

    const { taskTopics, currentTopicIndex } = useTaskContext();

    return (
        <HStack
            w={'100%'}
            spacing={4}
        >
            <VStack
                w={'100%'}
                alignItems={'flex-start'}
                flex={1}
            >
                <Text
                    fontSize={'lg'}
                    fontWeight={'bold'}
                >
                    Chủ đề hiện tại: {taskTopics[currentTopicIndex].name}
                </Text>
                <Text>
                    Tiếp tục bằng cách đặt câu hỏi, kiểm tra kiến thức của bạn hoặc bỏ qua để chuyển sang chủ đề tiếp theo.
                </Text>
                <HStack
                    w={'100%'}
                    spacing={4}
                >
                    <Button
                        flex={1}
                        onClick={nextQuestion}
                        colorScheme={'brand'}
                    >
                        Câu hỏi tiếp theo
                    </Button>
                    <Button
                        flex={1}
                        onClick={skipTopic}
                        variant={'outline'}
                    >
                        Bỏ qua chủ đề
                    </Button>
                </HStack>
            </VStack>
        </HStack>
    );
};

export default Decision;
