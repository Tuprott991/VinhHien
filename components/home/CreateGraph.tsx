import React from 'react';
import {Button, Card} from "@chakra-ui/react";
import TextInput from "@/components/utilities/forms/TextInput";
import useCreateGraph from "@/hooks/mutators/useCreateGraph";

const CreateGraph = () => {

    const {
        graphName,
        setGraphName,
        onSubmit,
        isDisabled
    } = useCreateGraph();

    return (
        <Card
            w={'100%'}
            gap={4}
        >
            <TextInput
                label={"Tạo môn học"}
                placeholder={"Vd: Thuật toán Python"}
                value={graphName}
                onChange={setGraphName}
            />
            <Button
                onClick={onSubmit}
                isDisabled={isDisabled}
                colorScheme={'brand'}
                w={'100%'}
            >
                Tạo môn học
            </Button>
        </Card>
    );
};

export default CreateGraph;
