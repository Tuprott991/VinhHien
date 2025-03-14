import { FaFile, FaRobot } from "react-icons/fa6";
import { PiGraph, PiStudent } from "react-icons/pi";
import { GrGrow } from "react-icons/gr";
import { MdOutlineAutoGraph } from "react-icons/md";

import { Edge, MarkerType, Node } from "reactflow";
import { LandingNodeTypes } from "@/types/landing/LandingNodeTypes";
import { LandingNode } from "@/types/landing/LandingNode";
import {
    componentNodeHeight, componentNodeWidth,
    parentNodeXOffset,
    parentNodeYOffset
} from "@/components/home/NotLoggedIn/LandingGraph/nodes/consts";

const edgeProps: Partial<Edge> = {
    animated: true,
    style: { stroke: '#4caf50', strokeWidth: 4 },
    markerEnd: {
        type: MarkerType.ArrowClosed,
        color: '#4caf50',
        width: 10,
        height: 10,
    }
};

export const topLevelNodes: Node[] = [
    {
        id: 'user',
        type: LandingNodeTypes.User,
        data: {},
        position: { x: 0, y: 0 },
    },

    {
        id: 'secondbrain',
        type: LandingNodeTypes.SecondBrain,
        data: {},
        position: { x: 0, y: 0 },
    }
]

export const topLevelEdges = [
    {
        id: 'user-secondbrain', // Updated id to be unique
        source: 'user',
        target: 'secondbrain',
        ...edgeProps
    }
]

export const userNodes: Node<LandingNode>[] = [
    {
        id: 'files',
        type: LandingNodeTypes.Component,
        data: {
            title: 'Tệp kiến thức',
            subtitle: 'Tài liệu học tập đa phương tiện',
            description: 'Tệp kiến thức là tài liệu học tập do người dùng tải lên, chẳng hạn như video, PDF, podcast, v.v. Những tệp này là cơ sở để xây dựng Đồ thị Kiến thức.',
            icon: FaFile,
        },
        position: { x: 0, y: 0 },
        parentId: 'user',
    },
    {
        id: 'tasks',
        type: LandingNodeTypes.Component,
        data: {
            title: 'Mục tiêu học tập',
            subtitle: 'Mục tiêu học tập dựa trên nhiệm vụ',
            description: 'Học sinh cung cấp cho các Agent của chúng tôi các Mục tiêu Học tập, được sử dụng để tạo các bài tập học tập tương tác hướng dẫn học sinh đạt được thành thạo.',
            icon: GrGrow,
        },
        position: { x: 0, y: 0 },
        parentId: 'user',
    },
]

export const secondBrainNodes: Node<LandingNode>[] = [
    {
        id: 'profile',
        type: LandingNodeTypes.Component,
        data: {
            title: 'Hồ sơ kiến thức',
            subtitle: 'Trình theo dõi tiến độ động',
            description: 'Hồ sơ kiến thức, được cấu trúc từ các tệp kiến thức do người dùng tải lên và được tổ chức bởi Đồ thị Kiến thức, phát triển khi học sinh tương tác với các bài tập học tập và đạt được Mục tiêu Học tập của cá nhân.',
            icon: PiStudent,
        },
        position: { x: parentNodeXOffset, y: parentNodeYOffset },
        parentId: 'secondbrain',
    },
    {
        id: 'graph',
        type: LandingNodeTypes.Component,
        data: {
            title: 'Đồ thị kiến thức',
            subtitle: 'Bản đồ khái niệm có cấu trúc',
            description: 'Đồ thị kiến thức (KGs) tổ chức và liên kết các chủ đề được trích xuất từ các tệp kiến thức do người dùng tải lên. Chúng cấu trúc Hồ sơ Kiến thức của mỗi học sinh và cung cấp hướng dẫn từng bước để đạt được Mục tiêu Học tập.',
            icon: PiGraph,
        },
        position: { x: parentNodeXOffset, y: parentNodeYOffset * 2 + componentNodeHeight },
        parentId: 'secondbrain',
    },
    {
        id: 'agent',
        type: LandingNodeTypes.Component,
        data: {
            title: 'Agent học tập',
            subtitle: 'Trợ lý cho việc đạt được thành thạo',
            description: 'Agent học tập điền vào mỗi bài tập học tập với các đầu ra tương tác và đa phương tiện, chẳng hạn như hình ảnh và video. Agent sẽ xác minh tính chính xác của mỗi câu trả lời và cung cấp phản hồi về sự hiểu biết của người dùng sau mỗi phiên.',
            icon: FaRobot,
        },
        position: { x: parentNodeXOffset * 2 + componentNodeWidth, y: parentNodeYOffset },
        parentId: 'secondbrain',
    },
    {
        id: 'comprehension',
        type: LandingNodeTypes.Component,
        data: {
            title: 'Phân tích hiểu biết',
            subtitle: 'Thông tin chi tiết học tập cá nhân hóa',
            description: 'Agent học tập đánh giá và tóm tắt hiệu suất của học sinh trong một nhiệm vụ cụ thể. Sau đó, một agent sẽ cập nhật Hồ sơ Kiến thức của học sinh và cá nhân hóa các bài tập tiếp theo cho phù hợp.',
            icon: MdOutlineAutoGraph,
        },
        position: { x: parentNodeXOffset * 2 + componentNodeWidth, y: parentNodeYOffset * 2 + componentNodeHeight },
        parentId: 'secondbrain',
    }
]

export const secondBrainEdges: Edge[] = [
    {
        id: 'e2',
        source: 'graph',
        target: 'profile',
        ...edgeProps
    },
    {
        id: 'e5',
        source: 'profile',
        target: 'agent',
        ...edgeProps
    },
    {
        id: 'e6',
        source: 'agent',
        target: 'comprehension',
        ...edgeProps
    },
    {
        id: 'e7',
        source: 'comprehension',
        target: 'graph',
        ...edgeProps
    }
];