import { Card, Flex, Text } from '@mantine/core';
import { FC } from 'react';
import { BiDotsVerticalRounded } from 'react-icons/bi';

interface EventStatCardProps {
  name: string;
  count: number;
  icon?: React.ReactNode;
  iconColor?: string;
}

const EventStatCard: FC<EventStatCardProps> = ({
  name,
  count,
  iconColor = 'green',
  icon,
}) => {
  const displayIcon = icon ?? <BiDotsVerticalRounded color={iconColor} size={12} />;

  return (
    <Card withBorder radius="md" >
      <Flex justify={'flex-start'} gap={12} align="center" p={4}>
        {displayIcon}
        <div>
          <Text fw={700} size='xl'>{count}</Text>
          <Text>{name}</Text>
        </div>
      </Flex>
    </Card>
  );
};

export default EventStatCard;
