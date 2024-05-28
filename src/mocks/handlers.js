import { http, HttpResponse } from 'msw'

const mockData = {
  when: "2024-01-01T22:10",
  lanes: '1',
  people: '3',
  shoes: ['15', '25', '35'],
  price: 2560,
  id: "STR82H3LL",
  active: true
}
 
export const handlers = [
  http.post('https://h5jbtjv6if.execute-api.eu-north-1.amazonaws.com', () => {
    return HttpResponse.json(mockData, { status: 201 })
  })
]