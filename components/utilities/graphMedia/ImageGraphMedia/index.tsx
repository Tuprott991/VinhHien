import React from 'react';

import GraphMediaBase from "@/components/utilities/graphMedia/GraphMediaBase";
import AnalyzeButton from "@/components/utilities/graphMedia/AnalyzeButton";
import ImageMediaModalContent from "@/components/utilities/graphMedia/ImageGraphMedia/ImageMediaModalContent";

import {GraphMedia} from "@/types/graph/GraphMedia";

interface Props {
    graphMedia: GraphMedia
}

const ImageGraphMedia: React.FC<Props> = ({ graphMedia }) => {
    return (
        <GraphMediaBase
            graphMedia={graphMedia}
            analyzeButton={
                <AnalyzeButton
                    graphMedia={graphMedia}
                />
            }
            modalContent={
                <ImageMediaModalContent
                    graphMedia={graphMedia}
                />
            }
        />
    );
};

export default ImageGraphMedia;
