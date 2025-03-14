import React from 'react';

import { Card, Heading, Text, VStack } from "@chakra-ui/react";

import AddMedia from "@/components/utilities/graphMedia/AddMedia";

import { Graph } from "@/types/graph/Graph";

interface Props {
    graphId: Graph['id'];
}

const UploadCard: React.FC<Props> = ({ graphId }) => {

    return (
        <>
            <Card
                p={4}
                w={'100%'}
                gap={2}
            >
                <VStack
                    spacing={4}
                    w={'100%'}
                    alignItems={'flex-start'}
                >
                    <VStack
                        spacing={0}
                        w={'100%'}
                        alignItems={'flex-start'}
                    >
                        <Heading
                            size={'lg'}
                        >
                            Thêm Tệp Kiến Thức
                        </Heading>
                        <Text
                            opacity={0.8}
                        >
                            Thêm bài giảng, ghi chú, hình ảnh, bài tập, video và nhiều hơn nữa vào đồ thị tri thức của bạn.
                        </Text>
                    </VStack>
                    <AddMedia graphId={graphId} />
                </VStack>
            </Card>
        </>
    );
};

export default UploadCard;
