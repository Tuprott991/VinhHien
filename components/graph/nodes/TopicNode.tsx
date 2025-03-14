import React, {ComponentType, useEffect} from 'react';

import {NodeProps} from "reactflow";

import {Input, useDisclosure} from "@chakra-ui/react";

import {FaMap, FaCheck, FaTrash, FaPlus} from "react-icons/fa6";
import {FaEdit} from "react-icons/fa";

import BaseNode from "@/components/graph/nodes/BaseNode";

import useEditNode from "@/hooks/graph/useEditNode";
import useGenerateSubtopics from "@/hooks/graph/useGenerateSubtopics";
import useAddTopic from "@/hooks/graph/useAddTopic";

import {Topic as TopicNodeType} from "@/types/graph/Topic";
import TopicContentModal from "@/components/graph/topicContentModal";

const TopicNode: ComponentType<NodeProps<TopicNodeType>> = (node) => {

    const {
        nodeName,
        setNodeName,
        isEditing,
        setIsEditing,
        onSave,
        onCancel
    } = useEditNode(node);

    const { onGenerate, isGenerating } = useGenerateSubtopics(node);

    const { addTopic } = useAddTopic(node);

    const inputRef = React.useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (isEditing) {
            inputRef.current?.focus();
            inputRef.current?.select();
        } else {
            inputRef.current?.blur();
            window.getSelection()?.removeAllRanges();
        }
    }, [isEditing]);

    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <>
            <TopicContentModal
                isOpen={isOpen}
                onClose={onClose}
                topicId={node.data.id}
            />
            <BaseNode
                nodeProps={node}
                toolbarItems={isEditing
                    ? [
                        {
                            icon: FaCheck,
                            onClick: onSave,
                            tooltip: 'Lưu thay đổi'
                        },
                        {
                            icon: FaTrash,
                            onClick: onCancel,
                            tooltip: 'Hủy thay đổi'
                        }
                    ]
                    : [
                        {
                            icon: FaMap,
                            onClick: onGenerate,
                            tooltip: 'Khám phá chủ đề con',
                            isLoading: isGenerating
                        },
                        {
                            icon: FaPlus,
                            onClick: addTopic,
                            tooltip: 'Thêm chủ đề con'
                        },
                        {
                            icon: FaEdit,
                            onClick: () => setIsEditing(!isEditing),
                            tooltip: 'Chỉnh sửa chủ đề',
                            isDisabled: isGenerating
                        }
                    ]
                }
                nodeContent={
                    <Input
                        value={nodeName}
                        onChange={(e) => setNodeName(e.target.value)}
                        variant={'unstyled'}
                        textAlign={'center'}
                        placeholder={'Nhập tên chủ đề'}
                        p={0}
                        ref={inputRef}
                        isReadOnly={!isEditing}
                    />
                }
                onDoubleClick={onOpen}
            />
        </>
    );
};

export default TopicNode;