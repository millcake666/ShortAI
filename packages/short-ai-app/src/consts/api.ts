export const API_PATH_PREFIX = ''

export const API = {
  GET: {
    EMPLOYEES: `${API_PATH_PREFIX}/readEmployees`,
    WORK_CENTERS: `${API_PATH_PREFIX}/readWorkCenters`,
    TICKETS_LIST: `${API_PATH_PREFIX}/readTicketsList`,
    TICKET: (id: string) => `${API_PATH_PREFIX}/tickets/${id}`,
    LOGOUT: '/logout'
  },
  MUTATE: {
    ADD_TICKET: `${API_PATH_PREFIX}/tickets`,
    LOGIN: '/login',
    REGISTER: '/login'
  }
}
