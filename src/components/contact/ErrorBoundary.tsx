import React, { Component, ReactNode } from 'react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
}

export class Credits3DErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(_: Error): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('3D Credits Error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        this.props.fallback || (
          <div className="h-screen w-full flex items-center justify-center bg-gradient-to-b from-[#F5F5DC]/20 to-white">
            <div className="text-center space-y-4 px-6">
              {/* Decorative element */}
              <div className="w-20 h-20 mx-auto bg-[#7CB342]/10 rounded-full flex items-center justify-center">
                <svg
                  className="w-10 h-10 text-[#7CB342]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>

              <div className="space-y-2">
                <p className="text-[#6B4423]/40 text-sm uppercase tracking-[0.3em]">
                  Forêt des Crayons
                </p>
                <h3 className="text-[clamp(2rem,5vw,4rem)] text-[#6B4423]">
                  2025
                </h3>
                <p className="text-[#6B4423]/60 text-lg max-w-md mx-auto">
                  아이들의 이야기는 계속됩니다
                </p>
              </div>
            </div>
          </div>
        )
      );
    }

    return this.props.children;
  }
}
