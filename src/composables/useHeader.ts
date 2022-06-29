import { ref, Ref } from 'vue'

interface HeaderPayload {
  mode: Ref<'hidden' | 'default'| 'history' | 'final'>,
  title: Ref<string>,
  canUndo: Ref<boolean>,
  canRedo: Ref<boolean>,
  undoIt: Ref<() => any>,
  redoIt: Ref<() => any>,
  undo: () => any,
  redo: () => any,
  back: () => any
  routerBack: Ref<() => any>,
}
const mode = ref<'default'| 'history' | 'final' | 'hidden'>('default')
const title = ref('Title')
const canUndo = ref(false)
const canRedo = ref(false)
const undoIt = ref(() => { alert('Please Set Undo Function') })
const redoIt = ref(() => { alert('Please Set Redo Function') })
const routerBack = ref(() => { alert('Please Set RouterBack Fn') })

export const useHeader = function (): HeaderPayload {
  return {
    mode,
    title,
    canRedo,
    canUndo,
    undoIt,
    redoIt,
    undo,
    redo,
    back,
    routerBack
  }
}

const undo = () => undoIt.value()
const redo = () => redoIt.value()
const back = () => routerBack.value()
