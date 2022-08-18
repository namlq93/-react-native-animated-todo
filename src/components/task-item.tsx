import { Box, HStack, Pressable, useColorModeValue, Icon, Input, useToken } from 'native-base';
import React from 'react';
import AnimatedCheckbox from 'react-native-checkbox-reanimated';
import { Feather } from '@expo/vector-icons';
import { PanGestureHandlerProps } from 'react-native-gesture-handler';
import AnimatedTaskLabel from './animated-task-label';
import SwipableView from './swipable-view';

interface TaskItemProps extends Pick<PanGestureHandlerProps, 'simultaneousHandlers'> {
  isDone: boolean;
  subject: string;
  isEditing?: boolean;
  onToggleCheckbox?: () => void;
  onPressLabel?: () => void;
  onRemove?: () => void;
  onChangeSubject?: (value: string) => void;
  onFinishEditing?: () => void;
}

const TaskItem = ({
  isDone,
  onToggleCheckbox,
  subject,
  onPressLabel,
  onRemove,
  simultaneousHandlers,
  onChangeSubject,
  isEditing,
  onFinishEditing,
}: TaskItemProps) => {
  const highlightColor = useToken('colors', useColorModeValue('blue.500', 'blue.400'));
  const boxStroke = useToken('colors', useColorModeValue('muted.300', 'muted.500'));
  const checkmarkColor = useToken('colors', useColorModeValue('white', 'white'));
  const activeTextColor = useToken('colors', useColorModeValue('darkText', 'lightText'));
  const doneTextColor = useToken('colors', useColorModeValue('muted.400', 'muted.600'));

  return (
    <SwipableView
      simultaneousHandlers={simultaneousHandlers}
      onSwipeLeft={onRemove}
      backView={
        <Box w="full" h="full" bg="red.500" alignItems="flex-end" justifyContent="center" pr={4}>
          <Icon color="white" as={<Feather name="trash-2" />} size="sm" />
        </Box>
      }
    >
      <HStack alignItems="center" px={4} py={2} w="full" bg={useColorModeValue('warmGray.50', 'primary.900')}>
        <Box w={30} h={30} mr={2}>
          <Pressable onPress={onToggleCheckbox}>
            <AnimatedCheckbox
              highlightColor={highlightColor}
              checkmarkColor={checkmarkColor}
              boxOutlineColor={boxStroke}
              checked={isDone}
            />
          </Pressable>
        </Box>
        {isEditing ? (
          <Input
            placeholder="Task"
            value={subject}
            variant="unstyled"
            fontSize={19}
            px={1}
            py={0}
            autoFocus
            onChangeText={onChangeSubject}
            onEndEditing={onFinishEditing}
          />
        ) : (
          <AnimatedTaskLabel
            textColor={activeTextColor}
            inactiveTextColor={doneTextColor}
            strikethrough={isDone}
            onPress={onPressLabel}
          >
            {subject}
          </AnimatedTaskLabel>
        )}
      </HStack>
    </SwipableView>
  );
};

export default TaskItem;
