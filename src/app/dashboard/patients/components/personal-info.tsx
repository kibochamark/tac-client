'use client';
import '@mantine/dates/styles.css';

import {
  Button,
  Container,
  Divider,
  Group,
  Paper,
  Stack,
  Textarea,
  TextInput,
  Title,
} from '@mantine/core';
import { DatePickerInput } from '@mantine/dates';
import { useState } from 'react';
import { useForm, zodResolver } from '@mantine/form';
import { z } from 'zod';

// Zod schema for validation
const personalInfoSchema = z.object({
  fullName: z.string().min(2, 'Full name must be at least 2 characters'),
  mrn: z.string().nonempty('MRN is required'),
  dateOfBirth: z.date({ error: 'Date of birth is required' }),
  phoneNumber: z
    .string()
    .regex(/^\+?[0-9]{7,15}$/, 'Invalid phone number')
    .optional()
    .or(z.literal('')),
  address: z.string().min(5, 'Address must be at least 5 characters'),
  insurance: z.string().optional(),
  emergencyContact: z.string().nonempty('Emergency contact is required'),
});

type PersonalInfoForm = z.infer<typeof personalInfoSchema>;

const PersonalInfo = () => {
  const [isEditing, setIsEditing] = useState(false);

  const form = useForm<PersonalInfoForm>({
    initialValues: {
      fullName: '',
      mrn: '',
      dateOfBirth: new Date(),
      phoneNumber: '',
      address: '',
      insurance: '',
      emergencyContact: '',
    },
    validate: zodResolver(personalInfoSchema),
  });

  const handleSave = (values: PersonalInfoForm) => {
    console.log('Saving data:', values);
    setIsEditing(false);
  };

  const handleCancel = () => {
    form.reset();
    setIsEditing(false);
  };

  return (
    <Container size="lg" py="md">
      <Paper shadow="sm" radius="md" p="xl">
        {/* Header */}
        <Group justify="space-between" mb="lg">
          <Title order={2} size="h3" c="gray.8">
            Personal Information
          </Title>
          {!isEditing && (
            <Button onClick={() => setIsEditing(true)} color="blue" size="sm">
              Edit Information
            </Button>
          )}
        </Group>

        <Divider mb="xl" />

        {/* Form */}
        <form onSubmit={form.onSubmit(handleSave)}>
          <Stack gap="lg">
            <Group grow align="flex-start">
              <TextInput
                label="Full Name"
                placeholder="Enter full name"
                {...form.getInputProps('fullName')}
                disabled={!isEditing}
              />
              <TextInput
                label="MRN (Medical Record Number)"
                placeholder="Enter MRN"
                {...form.getInputProps('mrn')}
                disabled={!isEditing}
              />
            </Group>

            <Group grow align="flex-start">
              <DatePickerInput
                label="Date of Birth"
                placeholder="Select date"
                {...form.getInputProps('dateOfBirth')}
                disabled={!isEditing}
                size="md"
                clearable
              />
              <TextInput
                label="Phone Number"
                placeholder="Enter phone number"
                {...form.getInputProps('phoneNumber')}
                disabled={!isEditing}
                size="md"
              />
            </Group>

            <Group grow align="flex-start">
              <TextInput
                label="Insurance Provider"
                placeholder="Enter insurance provider"
                {...form.getInputProps('insurance')}
                disabled={!isEditing}
                size="md"
              />
              <TextInput
                label="Emergency Contact"
                placeholder="Enter emergency contact name and number"
                {...form.getInputProps('emergencyContact')}
                disabled={!isEditing}
                required
                size="md"
              />
            </Group>

            <Textarea
              label="Address"
              placeholder="Enter full address"
              {...form.getInputProps('address')}
              disabled={!isEditing}
              required
              size="md"
              rows={3}
            />

            {isEditing && (
              <>
                <Divider my="lg" />
                <Group justify="flex-end">
                  <Button variant="outline" onClick={handleCancel} size="md">
                    Cancel
                  </Button>
                  <Button type="submit" color="blue" size="md">
                    Save Changes
                  </Button>
                </Group>
              </>
            )}
          </Stack>
        </form>
      </Paper>
    </Container>
  );
};

export default PersonalInfo;
