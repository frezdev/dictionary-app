import { render } from '@testing-library/react'
import StoreProvider from '@/app/StoreProvider'

const AllTheProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    <StoreProvider>
      {children}
    </StoreProvider>
  )
}

const customRender = (ui: React.ReactNode, options?: any) =>
  render(ui, { wrapper: AllTheProviders, ...options })

export * from '@testing-library/react'

export { customRender as render }