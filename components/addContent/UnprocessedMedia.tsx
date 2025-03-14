import React from 'react';
import {Card, Heading, Skeleton, Text, VStack} from "@chakra-ui/react";

import GraphMediaList from "@/components/utilities/graphMedia/GraphMediaList";

import useUnprocessedGraphMedia from "@/hooks/queries/graphMedia/useUnprocessedGraphMedia";

import {Graph} from "@/types/graph/Graph";

interface Props {
    graphId: Graph['id'];
}

const UnprocessedMedia: React.FC<Props> = ({ graphId }) => {

    const { graphMedia, loading } = useUnprocessedGraphMedia(graphId)

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
                    Tệp Kiến Thức Đang Chờ
                </Heading>
                <Text
                    color={'gray.500'}
                    fontSize={'sm'}
                >
                    Các tệp đa phương tiện đã được tải lên nhưng chưa được phân tích và thêm vào đồ thị kiến thức của bạn.
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

export default UnprocessedMedia;