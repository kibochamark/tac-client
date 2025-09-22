'use client';

import { ActionIcon, Avatar, Box, Group, Stack, Text } from '@mantine/core';
import React from 'react';
import { BiBell } from 'react-icons/bi';

interface DashboardHeaderProps {
  username: string;
  date?: string;
  time?: string;
  description?: string;
  showGreeting?: boolean;
  notificationCount?: number;
}

const getGreeting = () => {
  const hour = new Date().getHours();
  if (hour < 12) return 'Good Morning';
  if (hour < 18) return 'Good Afternoon';
  return 'Good Evening';
};

const DashboardHeader: React.FC<DashboardHeaderProps> = ({
  username,
  date,
  time,
  description,
  showGreeting = false,
  
}) => {
  const greeting = `${getGreeting()} ${username}`;

  const currentDate = date || new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
  });

  const currentTime = time || new Date().toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
  });

  const paragraph =
    description || `Here's what's happening with your patients today`;

  return (
    // <Container fluid px={{ base: 'md', sm: 'md', lg: 'sm' }} py={{ base: 'md', sm: 'lg' }}>
      <Group justify="space-between" align="flex-start" gap="md" wrap="nowrap">
            {/* Left Section */}
        <Box style={{ flex: 1, minWidth: 0 }}>
          <Stack gap="xs">
            <Text
              size="xl"
              fw={700}
              style={{
                background: 'linear-gradient(90deg, #1a1a1a 0%, #4a4a4a 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
              visibleFrom="sm"
            >
              {showGreeting ? greeting : username}
            </Text>
            
            <Text size="sm" c="dimmed" style={{ lineHeight: 1.6 }} visibleFrom="sm">
              {paragraph}
            </Text>
            
            <Text
              size="lg"
              fw={700}
              style={{
                background: 'linear-gradient(90deg, #1a1a1a 0%, #4a4a4a 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
              hiddenFrom="sm"
            >
              {showGreeting ? greeting : username}
            </Text>
            
            <Text size="xs" c="dimmed" style={{ lineHeight: 1.6 }} hiddenFrom="sm">
                  {paragraph}
            </Text>

                {/* Mobile-only quick stats */}
            <Group gap="lg" visibleFrom="sm" hidden>
              <Group gap="xs">
                <Box w={8} h={8} bg="green" style={{ borderRadius: '50%' }} />
                <Text size="xs" c="dimmed">12 Active</Text>
              </Group>
              <Group gap="xs">
                <Box w={8} h={8} bg="orange" style={{ borderRadius: '50%' }} />
                <Text size="xs" c="dimmed">3 Pending</Text>
              </Group>
            </Group>
          </Stack>
        </Box>

        {/* Right Section */}
        <Group gap="md" align="center" hiddenFrom="lg">
          {/* Mobile notification button */}
          <ActionIcon
            variant="subtle"
            color="gray"
            size="lg"
            radius="xl"
          >
            <BiBell size={20} />
          </ActionIcon>
        </Group>

        <Group gap="md" align="center" visibleFrom="lg">
          <Stack gap={0} align="flex-end">
            <Text size="sm" fw={500} c="dark">
              {currentDate}
            </Text>
            <Text size="xs" c="dimmed">
              {currentTime}
            </Text>
          </Stack>

          <Avatar
            size="lg"
            radius="xl"
            gradient={{ from: 'purple', to: 'blue', deg: 45 }}
            color="purple"
          >
                {username.charAt(0).toUpperCase()}
          </Avatar>
        </Group>
      </Group>
    // </Container>
  );
};

export default DashboardHeader;
