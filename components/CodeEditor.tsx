'use client'

import React from 'react'
import Editor, { loader, OnMount } from '@monaco-editor/react'
import * as monaco from 'monaco-editor'
import clsx from 'clsx'
import { useTranslations } from 'next-intl'

import { darkGrey, grey, extraLightGrey, white } from '@/styles/colors'

type CodeEditorProps = {
  variant?: 'testEditor'
  editorValue?: string
  editorRef?: React.MutableRefObject<any>
  handleEditorError?: (markers: monaco.editor.IMarker[]) => void
}

const CodeEditor: React.FC<CodeEditorProps> = ({
  editorValue,
  variant = 'editor',
  editorRef,
  handleEditorError,
}) => {
  const t = useTranslations('task')

  const isEditor = variant === 'editor'

  React.useEffect(() => {
    loader.init().then((monaco) => {
      monaco.editor.defineTheme('dark', {
        base: 'vs-dark',
        inherit: true,
        rules: [],
        colors: {
          'editor.background': darkGrey,
          'editorLineNumber.foreground': extraLightGrey,
          'editorLineNumber.activeForeground': white,
          'editorGutter.background': grey,
          'scrollbarSlider.background': white,
          'scrollbarSlider.hoverBackground': white,
          'scrollbarSlider.activeBackground': white,
        },
      })
    })
  }, [])

  const handleOnMountEditor: OnMount = (editor) => {
    if (editorRef) editorRef.current = editor

    const editorElements = editor.getDomNode()
    const slidersCollection = editorElements?.getElementsByClassName('slider')
    const slidersArr = slidersCollection ? Array.from(slidersCollection) : []

    slidersArr.forEach((element) => {
      if (element instanceof HTMLElement) {
        element.style.borderRadius = '6px'
      }
    })
  }

  return (
    <div
      className={clsx('flex text-white', {
        'absolute top-0 h-editor-buttons-wrapper w-full': isEditor,
        'h-full rounded-lg border border-grey shadow-customBoxShadow':
          !isEditor,
      })}
    >
      <Editor
        height={variant === 'editor' ? '100%' : '100px'}
        defaultLanguage='javascript'
        value={editorValue}
        theme='dark'
        loading={t('loadingEditor')}
        options={{
          lineNumbersMinChars: 1,
          glyphMargin: true,
          minimap: { enabled: isEditor },
          scrollbar: {
            handleMouseWheel: isEditor,
            verticalScrollbarSize: 6,
            vertical: 'visible',
            horizontalScrollbarSize: 6,
            horizontal: 'visible',
          },
          overviewRulerBorder: false,
          automaticLayout: true,
          scrollBeyondLastLine: false,
        }}
        onMount={handleOnMountEditor}
        onValidate={handleEditorError}
      />
    </div>
  )
}

export default CodeEditor
