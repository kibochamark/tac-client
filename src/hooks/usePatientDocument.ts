import { create } from "zustand";

type State = {
    documents: File[];
}

type Action = {
    addDocuments: (documents: File[]) => void;
    removeDocument: (document: File) => void;
}

const usePatientDocumentStore = create<State & Action>((set) => ({
    documents: [],
    addDocuments: (documents: File[]) => set((state) => ({ documents: [...state.documents, ...documents] })),
    removeDocument: (document: File) => set((state) => ({ documents: state.documents.filter((d) => d !== document) })),
}))

const usePatientDocument = () => {
    const { documents, addDocuments, removeDocument } = usePatientDocumentStore();
    return { documents, addDocuments, removeDocument };
}

export default usePatientDocument;
