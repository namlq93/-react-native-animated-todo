import React, { useState } from 'react';
import { Box, Text, Center, VStack, useColorModeValue } from 'native-base';
import ThemeToggle from '../components/theme-toggle';
import TaskItem from '../components/task-item';

export default function MainScreen() {
  const [checked, setChecked] = useState(false);
  const [subject, setSubject] = useState('Task Item');
  const [isEditing, setEditing] = useState(false);

  // không phải dùng useCallback bởi vì nó không truyền qua component đang sử dụng memo là animated-task-label.
  // nếu task-item re-render lại mà props truyền vô animated-task-label không thay đổi thì ko ảnh hưởng gì
  const handlePressCheckbox = () => {
    setChecked(!checked);
  };

  const handleChangeSubject = (value: string) => {
    setSubject(value);
  };

  // const handleChangeSubject = (value: string) => {
  //   setSubject(value);
  // };

  return (
    <Center _dark={{ bg: 'blueGray.900' }} _light={{ bg: 'blueGray.50' }} px={4} flex={1}>
      <VStack space={5} alignItems="center" w="full">
        <TaskItem
          isEditing={isEditing}
          isDone={checked}
          onToggleCheckbox={handlePressCheckbox}
          subject={subject}
          onPressLabel={() => setEditing(true)}
          onChangeSubject={handleChangeSubject}
          onFinishEditing={() => setEditing(false)}
        />
        <Box p={10} bg={useColorModeValue('red.500', 'yellow.500')}>
          <Text>Hello</Text>
        </Box>
        <ThemeToggle />
      </VStack>
    </Center>
  );
}
