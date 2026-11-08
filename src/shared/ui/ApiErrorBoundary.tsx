import { Component, type ReactNode } from 'react'
import { ErrorBanner } from './ErrorBanner'

type Props = { children: ReactNode; onRetry: () => void }
type State = { error: Error | null }

export class ApiErrorBoundary extends Component<Props, State> {
  state: State = { error: null }

  static getDerivedStateFromError(error: Error): State {
    return { error }
  }

  private retry = () => {
    this.props.onRetry()
    this.setState({ error: null })
  }

  render() {
    if (this.state.error) return <ErrorBanner message={this.state.error.message} onRetry={this.retry} />
    return this.props.children
  }
}
