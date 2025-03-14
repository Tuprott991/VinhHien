import React from 'react';

import {Button, Card, Heading} from "@chakra-ui/react";

import TextInput from "@/components/utilities/forms/TextInput";

import useAuth from "@/hooks/useAuth";
import useTaskInput from "@/hooks/task/useTaskInput";

import {Graph} from "@/types/graph/Graph";

interface Props {
    subjectId: Graph['id']
}

const TaskInput: React.FC<Props> = ({ subjectId }) => {

    const { user } = useAuth();

    const { task, setTask, isLoading, onSubmit } = useTaskInput(subjectId);

    return (
        <Card
            p={4}
            w={'100%'}
            gap={4}
        >
            <Heading
                size={'lg'}
            >
                Xin chào{user ? `, ${user.name}` : ''}!
            </Heading>
            <TextInput
                label={"Bạn muốn học gì hôm nay?"}
                placeholder={"Nhập mục tiêu học tập..."}
                value={task}
                onChange={setTask}
            />
            <Button
                isLoading={isLoading}
                onClick={onSubmit}
                colorScheme={"brand"}
                w={'100%'}
            >
                Bắt đầu học
            </Button>
        </Card>
    );
};

export default TaskInput;