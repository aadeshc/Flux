import { Dispatcher } from 'flux'
const dispatcher = new Dispatcher()
export default dispatcher


//there is only one dispatcher per app
// all actions wll be dispatched with the help of this dispatcher