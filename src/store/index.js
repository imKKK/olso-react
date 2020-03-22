import { createStore } from 'redux';
import  OlsoSession  from '../reducers'

const OlsoStateStore = createStore(OlsoSession)

export default OlsoStateStore;