import { getCurrentScope, onScopeDispose } from 'vue'
import { Fn } from '@/shared/types'

export default function tryOnDisposeScope(fn: Fn): boolean {
  if (!getCurrentScope()) {
    return false
  }
  onScopeDispose(fn)
  return true
}
