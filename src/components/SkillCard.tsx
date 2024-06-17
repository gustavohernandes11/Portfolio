import styled, { css } from "styled-components";
import { Text } from "./Text";

export type SkillCardType = {
    description: string;
    icon: React.ReactNode;
};

export const SkillCard = ({ description, icon }: SkillCardType) => {
    return (
        <StyledSkillCard>
            {icon}
            <Text>{description}</Text>
        </StyledSkillCard>
    );
};

const StyledSkillCard = styled.div`
    ${() => css`
        display: flex;
        flex-direction: column;
        padding: 1rem;
        border-radius: 0.5rem;
        gap: 1rem;
        border: 1px solid ${({ theme }) => theme.colors.border};
        transition: box-shadow 500ms ease;

        :hover {
            -webkit-box-shadow: 0px 0px 0px 10px
                ${({ theme }) => theme.colors.border};
            -moz-box-shadow: 0px 0px 0px 10px
                ${({ theme }) => theme.colors.border};
            box-shadow: 4px 4px 0px 0px ${({ theme }) => theme.colors.border};
        }
    `}
`;
