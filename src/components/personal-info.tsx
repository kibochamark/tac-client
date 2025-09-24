"use client";
import "@mantine/dates/styles.css";

import { usePersistentForm } from "@/hooks/usePersistentForm";
import {
  Button,
  Group,
  Stack,
  Textarea,
  TextInput
} from "@mantine/core";
import { DatePickerInput } from "@mantine/dates";
import { Controller } from "react-hook-form";
import { z } from "zod";
import { toast } from 'sonner';

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
    toast.success("Personal information saved successfully!");
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
      radius="md"
      size="xs"
    />
  );

  return (
    <>
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
                  radius="md"
                  size="xs"
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
            radius="md"
            size="xs"
          />

          <Group justify="flex-end">
            <Button type="reset" variant="outline" size="xs">Cancel</Button>
            <Button type="submit" size="xs">
              Save Changes
            </Button>
          </Group>
        </Stack>
      </form>

    </>

  );
};

export default PersonalInfo;
