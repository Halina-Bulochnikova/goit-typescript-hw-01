import './style.css'
import { setupCounter } from './counter.ts'
import './basic/1';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
