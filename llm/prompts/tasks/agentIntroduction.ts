import {Task} from "@/types/task/Task";
import {Topic} from "@/types/graph/Topic";

export const agentIntroduction = (task: Task, topics: Topic[]) => `
# Xin chào!

Tôi là trợ lý AI của bạn, sẽ hướng dẫn bạn đạt được mục tiêu học tập.

## Mục tiêu

${task.text}

## Chủ đề

Tôi đã chia nhỏ mục tiêu của bạn thành các chủ đề sau:

${topics.map((topic, index) => `${index + 1}) ${topic.name}`).join("\n")}

Tôi sẽ đặt ra một loạt câu hỏi để giúp bạn hiểu rõ hơn về các chủ đề này. Bất cứ lúc nào, bạn có thể tự do đặt câu hỏi hoặc yêu cầu giải thích rõ hơn.

`