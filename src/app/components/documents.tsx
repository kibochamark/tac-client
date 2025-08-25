import { ActionIcon, Badge, Button, Group, Stack, Text } from "@mantine/core";
import { Dropzone, IMAGE_MIME_TYPE, MS_EXCEL_MIME_TYPE, PDF_MIME_TYPE } from '@mantine/dropzone';
import { useRef } from "react";
import { BiImage, BiTrash, BiUpload, BiX } from "react-icons/bi";
import usePatientDocument from "../hooks/usePatientDocument";

const Documents = () => {
    const openRef = useRef<() => void>(null);
    const { documents, addDocuments, removeDocument } = usePatientDocument();

    const handleDrop = (files: File[]) => {
        addDocuments(files);
    };

    const removeFile = (index: number) => {
        removeDocument(documents[index]);
    };

    const formatFileSize = (bytes: number) => {
        if (bytes === 0) return '0 Bytes';
        const k = 1024;
        const sizes = ['Bytes', 'KB', 'MB', 'GB'];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
    };

    return (
        <>
            <Dropzone
                onDrop={handleDrop}
                onReject={(files) => console.log('rejected files', files)}
                maxSize={5 * 1024 ** 2}
                accept={[
                    ...IMAGE_MIME_TYPE,
                    ...PDF_MIME_TYPE,
                    ...MS_EXCEL_MIME_TYPE
                ]}
                openRef={openRef}
                className="border-2 border-dashed border-gray-300 rounded-md p-4 m-2"
            >
                <Group justify="center" gap="xl" mih={220} style={{ pointerEvents: 'none' }}>
                    <Dropzone.Accept>
                        <BiUpload size={52} color="var(--mantine-color-blue-6)" />
                    </Dropzone.Accept>
                    <Dropzone.Reject>
                        <BiX size={52} color="var(--mantine-color-red-6)" />
                    </Dropzone.Reject>
                    <Dropzone.Idle>
                        <BiImage size={52} color="var(--mantine-color-dimmed)" />
                    </Dropzone.Idle>

                    <div>
                        <Text size="xl" inline>
                            Drag images here or click to select files
                        </Text>
                        <Text size="sm" c="dimmed" inline mt={7}>
                            Attach as many files as you like, each file should not exceed 5mb
                        </Text>
                    </div>
                </Group>
            </Dropzone>

            {/* Selected Files List */}
            {documents.length > 0 && (
                <Stack gap="sm" mt="md">
                    <Text size="lg" fw={500}>Selected Files ({documents.length})</Text>
                    {documents.map((file, index) => (
                        <Group key={index} justify="space-between" p="sm" bg="gray.0" style={{ borderRadius: '8px' }}>
                            <Group gap="sm">
                                <BiImage size={20} color="var(--mantine-color-blue-6)" />
                                <div>
                                    <Text size="sm" fw={500}>{file.name}</Text>
                                    <Text size="xs" c="dimmed">{formatFileSize(file.size)}</Text>
                                </div>
                            </Group>
                            <Group gap="xs">
                                <Badge size="sm" variant="light">
                                    {file.type.split('/')[1]?.toUpperCase() || 'FILE'}
                                </Badge>
                                <ActionIcon
                                    variant="subtle"
                                    color="red"
                                    onClick={() => removeFile(index)}
                                    size="sm"
                                >
                                    <BiTrash size={16} />
                                </ActionIcon>
                            </Group>
                        </Group>
                    ))}
                </Stack>
            )}

            <Group justify="center" mt="md">
                <Button onClick={() => openRef.current?.()} >Select files</Button>
            </Group>
        </>
    )
}

export default Documents