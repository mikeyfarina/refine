import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useGetToPath } from "@refinedev/core";
import { useModalForm } from "@refinedev/antd";
import { Collapse, CollapseProps, Modal } from "antd";
import {
    AlignLeftOutlined,
    FieldTimeOutlined,
    UsergroupAddOutlined,
    CheckSquareOutlined,
} from "@ant-design/icons";

import { KanbanStageForm } from "../../../components/kanban-stage-form";
import { AccordionHeader } from "../../../components/kanban-accordion-header";
import { KanbanDescriptionForm } from "../../../components/kanban-description-form";
import { Task } from "../../../interfaces/graphql";

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

const panelStyle: React.CSSProperties = {
    background: "#ffffff",
    borderRadius: 0,
};

export const KanbanEditPage = () => {
    const [activeKey, setActiveKey] = useState<string | undefined>();

    const navigate = useNavigate();
    const getToPath = useGetToPath();
    const { modalProps, close, queryResult } = useModalForm<Task>({
        action: "edit",
        defaultVisible: true,
        meta: {
            fields: [
                "id",
                "title",
                "completed",
                "description",
                { stage: ["id", "title"] },
            ],
        },
    });

    const kanbanStageInitialValues = {
        completed: queryResult?.data?.data.completed ?? false,
        stage: queryResult?.data?.data.stage,
    };

    const descriptionInitialValues = {
        description: queryResult?.data?.data.description,
    };

    const items: CollapseProps["items"] = [
        {
            key: "1",
            label: (
                <AccordionHeader
                    icon={<AlignLeftOutlined />}
                    isActive={activeKey === "1"}
                    fallback="Add card description"
                >
                    Description
                </AccordionHeader>
            ),
            children: (
                <KanbanDescriptionForm
                    initialValues={descriptionInitialValues}
                    cancelForm={() => setActiveKey(undefined)}
                />
            ),
            style: panelStyle,
            showArrow: false,
        },
        {
            key: "2",
            label: (
                <AccordionHeader
                    icon={<FieldTimeOutlined />}
                    isActive={activeKey === "2"}
                    fallback="Add due date"
                >
                    Due date
                </AccordionHeader>
            ),
            children: <p>{text}</p>,
            style: panelStyle,
            showArrow: false,
        },
        {
            key: "3",
            label: (
                <AccordionHeader
                    icon={<UsergroupAddOutlined />}
                    isActive={activeKey === "3"}
                    fallback="Assign to users"
                >
                    Users
                </AccordionHeader>
            ),
            children: <p>{text}</p>,
            style: panelStyle,
            showArrow: false,
        },
        {
            key: "4",
            label: (
                <AccordionHeader
                    icon={<CheckSquareOutlined />}
                    isActive={activeKey === "4"}
                    fallback="Add checklist"
                >
                    Checklist
                </AccordionHeader>
            ),
            children: <p>{text}</p>,
            style: panelStyle,
            showArrow: false,
        },
    ];

    if (queryResult?.isLoading) {
        //TODO: add skeleton inside the modal
        return <div>Loading</div>;
    }

    return (
        <Modal
            {...modalProps}
            className="kanban-update-modal"
            onCancel={() => {
                //TODO: modalProps.onCancel expect an event so, I used close. Actually both of them are same.
                close();
                navigate(
                    getToPath({
                        action: "list",
                    }) ?? "",
                    {
                        replace: true,
                    },
                );
            }}
            title={queryResult?.data?.data.title}
            width={586}
        >
            <KanbanStageForm initialValues={kanbanStageInitialValues} />
            <Collapse
                accordion
                items={items}
                activeKey={activeKey}
                onChange={(key) => setActiveKey(key[0])}
                style={{ border: "none", borderRadius: 0 }}
            />
        </Modal>
    );
};
