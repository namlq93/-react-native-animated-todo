import React, { useCallback, useRef } from 'react';
import { AnimatePresence, View } from 'moti';
import { PanGestureHandlerProps, ScrollView } from 'react-native-gesture-handler';
import TaskItem from './task-item';
import makeStyledComponent from '../utils/styled';

const StyledView = makeStyledComponent(View);
const StyledScrollView = makeStyledComponent(ScrollView);

export interface TaskItemData {
  id: string;
  subject: string;
  done: boolean;
}

interface TaskListProps {
  data: TaskItemData[];
  editingItemId: string | null;
  onToggleItem: (item: TaskItemData) => void;
  onChangeSubject: (item: TaskItemData, newSubject: string) => void;
  onFinishEditing: () => void;
  onPressLabel: (item: TaskItemData) => void;
  onRemoveItem: (item: TaskItemData) => void;
}

interface TaskItemProps extends Pick<PanGestureHandlerProps, 'simultaneousHandlers'> {
  data: TaskItemData;
  isEditing: boolean;
  onToggleItem: (item: TaskItemData) => void;
  onChangeSubject: (item: TaskItemData, newSubject: string) => void;
  onFinishEditing: () => void;
  onPressLabel: (item: TaskItemData) => void;
  onRemove: (item: TaskItemData) => void;
}

export const AnimatedTaskItem = ({
  simultaneousHandlers,
  data,
  isEditing,
  onToggleItem,
  onChangeSubject,
  onFinishEditing,
  onPressLabel,
  onRemove,
}: TaskItemProps) => {
  const handleToggleCheckbox = () => {
    onToggleItem(data);
  };

  const handleChangeSubject = (subject: string) => {
    onChangeSubject(data, subject);
  };

  const handleFinishEditing = () => {
    onFinishEditing();
  };

  const handlePressLabel = useCallback(() => {
    onPressLabel(data);
  }, []);

  const handleRemove = () => {
    onRemove(data);
  };

  return (
    <StyledView
      w="full"
      from={{
        opacity: 0,
        scale: 0.5,
        marginBottom: -46,
      }}
      animate={{
        opacity: 1,
        scale: 1,
        marginBottom: 0,
      }}
      exit={{
        opacity: 0,
        scale: 0.5,
        marginBottom: -46,
      }}
    >
      <TaskItem
        simultaneousHandlers={simultaneousHandlers}
        subject={data.subject}
        isDone={data.done}
        isEditing={isEditing}
        onToggleCheckbox={handleToggleCheckbox}
        onChangeSubject={handleChangeSubject}
        onFinishEditing={handleFinishEditing}
        onPressLabel={handlePressLabel}
        onRemove={handleRemove}
      />
    </StyledView>
  );
};

const TaskList = ({
  data,
  editingItemId,
  onToggleItem,
  onChangeSubject,
  onFinishEditing,
  onPressLabel,
  onRemoveItem,
}: TaskListProps) => {
  const refScrollView = useRef(null);

  return (
    <StyledScrollView ref={refScrollView} w="full">
      <AnimatePresence>
        {data.map((item) => (
          <AnimatedTaskItem
            key={item.id}
            data={item}
            simultaneousHandlers={refScrollView}
            isEditing={item.id === editingItemId}
            onToggleItem={onToggleItem}
            onChangeSubject={onChangeSubject}
            onFinishEditing={onFinishEditing}
            onPressLabel={onPressLabel}
            onRemove={onRemoveItem}
          />
        ))}
      </AnimatePresence>
    </StyledScrollView>
  );
};

export default TaskList;
