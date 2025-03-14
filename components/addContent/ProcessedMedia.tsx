import React from 'react';

import { Card, Heading, Skeleton, Text, VStack } from "@chakra-ui/react";

import GraphMediaList from "@/components/utilities/graphMedia/GraphMediaList";

import useProcessedGraphMedia from "@/hooks/queries/graphMedia/useProcessedGraphMedia";

import { Graph } from "@/types/graph/Graph";

interface Props {
    graphId: Graph['id'];
}

const ProcessedMedia: React.FC<Props> = ({ graphId }) => {

    const { graphMedia, loading } = useProcessedGraphMedia(graphId)

    return (
        <Card
            gap={4}
        >
            <VStack
                spacing={2}
                w={'100%'}
                alignItems={'flex-start'}
            >
                <Heading
                    size={'md'}
                >
                    Tệp Kiến Thức Đang Hoạt Động
                </Heading>
                <Text
                    color={'gray.500'}
                    fontSize={'sm'}
                >
                    Các tệp phương tiện đã được tích hợp vào đồ thị tri thức của bạn.
                </Text>
            </VStack>
            {
                loading ? (
                    <Skeleton
                        w={'100%'}
                        h={'100%'}
                    />
                ) : (
                    <GraphMediaList
                        graphMediaList={graphMedia}
                    />
                )
            }
        </Card>
    );
};

export default ProcessedMedia;
