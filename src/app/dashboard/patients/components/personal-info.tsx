"use client";
import "@mantine/dates/styles.css";

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
} from "@mantine/core";
import { DatePickerInput } from "@mantine/dates";
import { z } from "zod";
import { Controller } from "react-hook-form";
import { usePersistentForm } from "@/app/hooks/usePersistentForm";

// Zod schema
const personalInfoSchema = z.object({
  fullName: z.string().min(2, "Full name must be at least 2 characters"),
  mrn: z.string().nonempty("MRN is required"),
  dateOfBirth: z.string().nonempty("Date of birth is required"),
  phoneNumber: z
    .string()
    .regex(/^\+?[0-9]{7,15}$/, "Invalid phone number")
    .optional()
    .or(z.literal("")),
  address: z.string().min(5, "Address must be at least 5 characters"),
  insurance: z.string().optional(),
  emergencyContact: z.string().nonempty("Emergency contact is required"),
});

type PersonalInfoForm = z.infer<typeof personalInfoSchema>;

// Field configurations to avoid repetition
const fieldConfigs = [
  {
    name: 'fullName' as const,
    label: 'Full Name',
    placeholder: 'Enter full name',
    required: true,
  },
  {
    name: 'mrn' as const,
    label: 'MRN',
    placeholder: 'Enter MRN',
    required: true,
  },
  {
    name: 'phoneNumber' as const,
    label: 'Phone Number',
    placeholder: 'Enter phone number',
    required: true,
  },
  {
    name: 'insurance' as const,
    label: 'Insurance Provider',
    placeholder: 'Enter insurance provider',
    required: false,
  },
  {
    name: 'emergencyContact' as const,
    label: 'Emergency Contact',
    placeholder: 'Enter emergency contact',
    required: true,
  },
];

const PersonalInfo = () => {
  const form = usePersistentForm<PersonalInfoForm>({
    key: "personal-info-form",
    schema: personalInfoSchema,
    defaultValues: {
      fullName: "",
      mrn: "",
      dateOfBirth: "",
      phoneNumber: "",
      address: "",
      insurance: "",
      emergencyContact: "",
    },
  });

  const { control, register, handleSubmit, formState: { errors } } = form;

  const onSubmit = (values: PersonalInfoForm) => {
    console.log("Saving data:", values);
  };

  // Reusable function to render text input fields
  const renderTextField = (config: typeof fieldConfigs[0]) => (
    <TextInput
      key={config.name}
      label={config.label}
      placeholder={config.placeholder}
      {...register(config.name)}
      error={errors[config.name]?.message}
      required={config.required}
    />
  );

  return (
    <Container size="lg">
      <Paper shadow="sm" radius="md" p="xl">
        <Group justify="space-between" >
          <Title order={2} size="h3" c="gray.8">
            Personal Information
          </Title>
        </Group>

        <Divider mb="xl" />

        <form onSubmit={handleSubmit(onSubmit)}>
          <Stack gap="lg">
            {/* Full Name + MRN */}
            <Group grow>
              {renderTextField(fieldConfigs[0])}
              {renderTextField(fieldConfigs[1])}
            </Group>

            {/* Date of Birth + Phone */}
            <Group grow>
              <Controller
                control={control}
                name="dateOfBirth"
                render={({ field }) => (
                  <DatePickerInput
                    label="Date of Birth"
                    placeholder="Select date"
                    value={field.value}
                    onChange={field.onChange}
                    error={errors.dateOfBirth?.message}
                    required
                  />
                )}
              />
              {renderTextField(fieldConfigs[2])}
            </Group>

            {/* Insurance + Emergency Contact */}
            <Group grow>
              {renderTextField(fieldConfigs[3])}
              {renderTextField(fieldConfigs[4])}
            </Group>

            {/* Address */}
            <Textarea
              label="Address"
              placeholder="Enter full address"
              {...register("address")}
              error={errors.address?.message}
              required
              rows={3}
            />

            <Divider my="lg" />
            <Group justify="flex-end">
              <Button type="submit" color="blue">
                Save Changes
              </Button>
            </Group>
          </Stack>
        </form>
      </Paper>
    </Container>
  );
};

export default PersonalInfo;
