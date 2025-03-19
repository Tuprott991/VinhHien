import React from 'react';

import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure, Button
} from '@chakra-ui/react';

import {Graph} from "@/types/graph/Graph";
import useDeleteGraph from "@/hooks/graph/useDeleteGraph";

interface Props {
    graphId: Graph['id']
}

const DeleteSubject: React.FC<Props> = ({ graphId }) => {

    const { isOpen, onOpen, onClose } = useDisclosure();

    const { onDelete } = useDeleteGraph(graphId);

    return (
        <>
            <Modal
                isOpen={isOpen}
                onClose={onClose}
            >
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Xóa môn học</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        Bạn có chắc chắn muốn xóa môn học này không? Hành động này không thể hoàn tác.
                    </ModalBody>
                    <ModalFooter>
                        <Button
                            colorScheme={'red'}
                            onClick={onDelete}
                        >
                            Delete
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
            <Button
                colorScheme={'red'}
                onClick={onOpen}
                w={'100%'}
                variant={'ghost'}
            >
                Xóa Môn Học
            </Button>
        </>
    );
};

export default DeleteSubject;
