import { fireEvent, screen } from '@testing-library/react'
import Home from '@/app/page'
import { render } from '@/utils/test-utils'

describe('User interactions', () => {
  const search = async (query: string) => {
    render(<Home />)
    const searchInput = await screen.findByRole('textbox')
    const buttonSubmit = await screen.findByTitle('submit-button')

    fireEvent.change(searchInput, { target: { value: query } })

    fireEvent.submit(buttonSubmit)
  }

  describe('Search Interactions', () => {
    it('should render the search input', async () => {
      await search('')
      const searchInput = await screen.findByRole('textbox')
      expect(searchInput).toBeInTheDocument()
    })


    it('View Home Welcome', () => {
      render(<Home />)
      const welcome = screen.getByText('Welcome to the MyDictionary App')

      expect(welcome).toBeInTheDocument()
    })

    it('Search a word', async () => {
      await search('keyboard')
      const result = await screen.findByText('keyboard')
      expect(result).toBeInTheDocument()
    })

    it('Search for a word that does not exist', async () => {
      await search('alalsk')

      await screen.findByText('Not Found')
      // screen.debug()
    })
  })



  describe('Words historial interantion', () => {
    it('Open modal to view history', async () => {
      render(<Home />)

      const openButton = screen.getByTitle('open-historial')


      fireEvent.click(openButton)
      await screen.findByText('Historial')
    })


    it('Select historial item', async () => {
      const QUERY = 'keyboard'
      await search(QUERY)

      const openButton = screen.getByTitle('open-historial')

      fireEvent.click(openButton)

      await screen.findByText('Historial')
      const item = screen.getAllByTitle('historial-item')


      fireEvent.click(item[0])

      await screen.findByText(QUERY)
    })

    it('Close modal', async () => {
      render(<Home />)

      const openButton = screen.getByTitle('open-historial')


      fireEvent.click(openButton)

      const historialModal = await screen.findByTitle('modal')
      expect(historialModal).toBeInTheDocument()

      const closeButton = await screen.findByTitle('close-modal')

      fireEvent.click(closeButton)

      expect(historialModal).not.toBeInTheDocument()
    })
  })
})
