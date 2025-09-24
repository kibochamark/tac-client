'use client'

import { useState } from 'react'

interface ConfirmDialogOptions {
  title?: string
  message: string
  confirmText?: string
  cancelText?: string
  confirmColor?: string
  icon?: React.ReactNode
}

interface ConfirmDialogState {
  opened: boolean
  options: ConfirmDialogOptions | null
  onConfirm: (() => void) | null
  isLoading: boolean
}

export const useConfirmDialog = () => {
  const [state, setState] = useState<ConfirmDialogState>({
    opened: false,
    options: null,
    onConfirm: null,
    isLoading: false
  })

  const openConfirmDialog = (
    options: ConfirmDialogOptions,
    onConfirm: () => void | Promise<void>
  ) => {
    setState({
      opened: true,
      options,
      onConfirm: async () => {
        setState(prev => ({ ...prev, isLoading: true }))
        try {
          await onConfirm()
        } finally {
          setState(prev => ({ ...prev, isLoading: false }))
        }
      },
      isLoading: false
    })
  }

  const closeConfirmDialog = () => {
    setState({
      opened: false,
      options: null,
      onConfirm: null,
      isLoading: false
    })
  }

  return {
    opened: state.opened,
    options: state.options,
    onConfirm: state.onConfirm,
    isLoading: state.isLoading,
    openConfirmDialog,
    closeConfirmDialog
  }
}
