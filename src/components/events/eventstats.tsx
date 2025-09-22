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
    <Card withBorder radius="md" p={{ base: 'xs', sm: 'sm' }}>
      <Flex justify={'flex-start'} gap={{ base: 8, sm: 12 }} align="center">
        <div style={{ flexShrink: 0 }}>
          {displayIcon}
        </div>
        <div style={{ minWidth: 0, flex: 1 }}>
          <Text fw={700} size="lg" c="dark">{count}</Text>
          <Text size="xs" c="dimmed" style={{ lineHeight: 1.2 }}>
            {name}
          </Text>
        </div>
      </Flex>
    </Card>
  );
};

export default EventStatCard;
