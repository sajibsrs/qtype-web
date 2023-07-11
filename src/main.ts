import './style.css'
import { setupInput } from './input.ts';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <div class="card">
      <p id="text-output"></p>
      <textarea id="text-input" cols="100" rows="10" spellcheck="false" placeholder="এখানে লিখুন..."></textarea>
    </div>
  </div>
`;

setupInput(document.querySelector<HTMLTextAreaElement>('#text-input')!, document.querySelector<HTMLParagraphElement>('#text-output')!);
