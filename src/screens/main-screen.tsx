import React, { useCallback, useState } from 'react';
import { Center, Fab, Icon, useColorModeValue, VStack } from 'native-base';
import { AntDesign } from '@expo/vector-icons';
import shortid from 'shortid';
import ThemeToggle from '../components/theme-toggle';
import TaskList, { TaskItemData } from '../components/task-list';

const initialData = [
  {
    id: shortid.generate(),
    subject: 'Buy movie tickets for Friday',
    done: false,
  },
  {
    id: shortid.generate(),
    subject: 'Make a React Native tutorial',
    done: false,
  },
];

export default function MainScreen() {
  const [data, setData] = useState(initialData);
  const [editingItemId, setEditingItemId] = useState<string | null>(null);

  // không phải dùng useCallback bởi vì nó không truyền qua component đang sử dụng memo là animated-task-label.
  // nếu task-item re-render lại mà props truyền vô animated-task-label không thay đổi thì ko ảnh hưởng gì
  const handleToggleTaskItem = (item: TaskItemData) => {
    const newData = [...data];
    const index = data.indexOf(item);
    newData[index] = {
      ...item,
      done: !item.done,
    };
    setData(newData);
  };

  const handleChangeTaskItemSubject = (item: TaskItemData, newSubject: string) => {
    const newData = [...data];
    const index = data.indexOf(item);
    newData[index] = {
      ...item,
      subject: newSubject,
    };
    setData(newData);
  };

  const handleFinishEditingTaskItem = () => {
    setEditingItemId(null);
  };

  // Thằng này phải dùng useCallback vì hàm này truyền qua animated-task-label.
  // khi nhập input nếu ko dùng useCallback thì sẽ bị re-render lại animated-task-label
  const handlePressTaskItemLabel = useCallback((item) => {
    setEditingItemId(item.id);
  }, []);

  const handleRemoveItem = (item: TaskItemData) => {
    const newData = data.filter((i) => i !== item);
    setData(newData);
  };

  // const handleChangeSubject = (value: string) => {
  //   setSubject(value);
  // };

  return (
    <Center _dark={{ bg: 'blueGray.900' }} _light={{ bg: 'blueGray.50' }} px={4} flex={1}>
      <VStack space={5} alignItems="center" w="full">
        <TaskList
          data={data}
          onToggleItem={handleToggleTaskItem}
          onChangeSubject={handleChangeTaskItemSubject}
          onFinishEditing={handleFinishEditingTaskItem}
          onPressLabel={handlePressTaskItemLabel}
          onRemoveItem={handleRemoveItem}
          editingItemId={editingItemId}
        />
        <ThemeToggle />
      </VStack>
      <Fab
        renderInPortal={false}
        icon={<Icon color="white" as={AntDesign} name="plus" />}
        colorScheme={useColorModeValue('blue', 'darkBlue')}
        bg={useColorModeValue('blue.500', 'blue.400')}
        onPress={() => {
          const id = shortid.generate();
          setData([
            {
              id,
              subject: '',
              done: false,
            },
            ...data,
          ]);
          setEditingItemId(id);
        }}
      />
    </Center>
  );
}
