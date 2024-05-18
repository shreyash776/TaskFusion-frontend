import styled from "@emotion/styled/macro";

export const AddTaskPane = styled.section`
  border-radius: 8px;
  color: ${(props) => [props.theme.colors.textPrimary]};
  margin: 1em;
  max-width: 720px;
  display: flex;
  align-items: center;
  min-height: 80vh;
  position: fixed;
  top: 20px;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 500;
  font-size: 0.9rem;
  animation-duration: 0.25s;
  animation-name: slidein1;

  @keyframes slidein1 {
    from {
      top: 80px;
    }

    to {
      top: 20px;
    }
  }

  @media (min-width: ${(props) => props.theme.media.medium}) {
    margin: 1em auto;
    max-width: 500px;
  }
`;

export const AddTaskTitle = styled.h3`
  padding: 0;
  margin: 0;
`;

export const TaskDescription = styled.p`
  color: ${(props) => [props.theme.colors.textSecondary]};
  font-size: 0.8rem;
  line-height: 1.75em;
  font-weight: 700;
`;

export const SubTaskTitle = styled.h4``;

export const StatusTitle = styled.h4``;

export const AddSubTaskListPane = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  font-size: 0.8rem;
  width: 100%;
`;

export const AddSubTaskListItem = styled.li`
  border-radius: 8px;
  display: flex;
  align-items: center;

  & + & {
    margin-top: 0.5em;
  }

  &:hover {
    cursor: pointer;
  }

  svg {
    margin-left: 1em;
  }
`;

export const SubTaskBody = styled.p`
  margin-left: 1em;
  line-height: 1.25em;
  font-weight: 700;

  color: ${({ state, theme }) =>
    state ? theme.colors.textSecondary : theme.colors.textPrimary};

  text-decoration: ${({ state }) => (state ? "line-through" : "")};
`;
