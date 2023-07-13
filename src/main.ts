import './style.css'
import { setupInput } from './input.ts';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <div class="card">
      <div id="keyboard-layout">
      <div class="keyboard-row numbers">
        <span class="key">
          <sup class="left">!</sup>
          <sub class="left">১</sub>
          1
          <sup class="right"></sup>
          <sub class="right">1</sub>
        </span>
        <span class="key">
          <sup class="left">@</sup>
          <sub class="left">২</sub>
          2
          <sup class="right"></sup>
          <sub class="right">2</sub>
        </span>
        <span class="key">
          <sup class="left">#</sup>
          <sub class="left">৩</sub>
          3
          <sup class="right"></sup>
          <sub class="right">3</sub>
        </span>
        <span class="key">
          <sup class="left">$</sup>
          <sub class="left">৪</sub>
          4
          <sup class="right">৳</sup>
          <sub class="right">4</sub>
        </span>
        <span class="key">
          <sup class="left">%</sup>
          <sub class="left">৫</sub>
          5
          <sup class="right"></sup>
          <sub class="right">5</sub>
        </span>
        <span class="key">
          <sup class="left">^</sup>
          <sub class="left">৬</sub>
          6
          <sup class="right"></sup>
          <sub class="right">6</sub>
        </span>
        <span class="key">
          <sup class="left">&</sup>
          <sub class="left">৭</sub>
          7
          <sup class="right"></sup>
          <sub class="right">7</sub>
        </span>
        <span class="key">
          <sup class="left">*</sup>
          <sub class="left">৮</sub>
          8
          <sup class="right"></sup>
          <sub class="right">8</sub>
        </span>
        <span class="key">
          <sup class="left">(</sup>
          <sub class="left">৯</sub>
          9
          <sup class="right"></sup>
          <sub class="right">9</sub>
        </span>
        <span class="key">
          <sup class="left">)</sup>
          <sub class="left">০</sub>
          0
          <sup class="right"></sup>
          <sub class="right">0</sub>
        </span>
      </div>
        <div class="keyboard-row">
          <span class="key mod q-key">
            Q
          </span>
          <span class="key">
            <sup class="left">ৃ</sup>
            <sub class="left">ঋ</sub>
            W
            <sup class="right"></sup>
            <sub class="right">ৎ</sub>
          </span>
          <span class="key">
            <sup class="left">ঐ</sup>
            <sub class="left">এ</sub>
            E
            <sup class="right">ৈ</sup>
            <sub class="right">ে</sub>
          </span>
          <span class="key">
            <sup class="left">ড়</sup>
            <sub class="left">র</sub>
            R
            <sup class="right"></sup>
            <sub class="right">ঢ়</sub>
          </span>
          <span class="key">
            <sup class="left">থ</sup>
            <sub class="left">ত</sub>
            T
            <sup class="right">ঠ</sup>
            <sub class="right">ট</sub>
          </span>
          <span class="key">
            <sup class="left"></sup>
            <sub class="left">য়</sub>
            Y
            <sup class="right"></sup>
            <sub class="right"></sub>
          </span>
          <span class="key">
            <sup class="left">ঊ</sup>
            <sub class="left">উ</sub>
            U
            <sup class="right">ূ</sup>
            <sub class="right">ু</sub>
          </span>
          <span class="key">
            <sup class="left">ঈ</sup>
            <sub class="left">ই</sub>
            I
            <sup class="right">ী</sup>
            <sub class="right">ি</sub>
          </span>
          <span class="key">
            <sup class="left">ঔ</sup>
            <sub class="left">ও</sub>
            O
            <sup class="right">ৌ</sup>
            <sub class="right">ো</sub>
          </span>
          <span class="key">
            <sup class="left">ফ</sup>
            <sub class="left">প</sub>
            P
            <sup class="right"></sup>
            <sub class="right"></sub>
          </span>
        </div>

        <div class="keyboard-row">
          <span class="key">
            <sup class="left">া</sup>
            <sub class="left">আ</sub>
            A
            <sup class="right"></sup>
            <sub class="right">অ</sub>
          </span>
          <span class="key">
            <sup class="left">শ</sup>
            <sub class="left">স</sub>
            S
            <sup class="right"></sup>
            <sub class="right">ষ</sub>
          </span>
          <span class="key">
            <sup class="left">ধ</sup>
            <sub class="left">দ</sub>
            D
            <sup class="right">ঢ</sup>
            <sub class="right">ড</sub>
          </span>
          <span class="key">
            <sup class="left"></sup>
            <sub class="left">ফ</sub>
            F
            <sup class="right"></sup>
            <sub class="right"></sub>
          </span>
          <span class="key">
            <sup class="left">ঘ</sup>
            <sub class="left">গ</sub>
            G
            <sup class="right"></sup>
            <sub class="right"></sub>
          </span>
          <span class="key">
            <sup class="left"></sup>
            <sub class="left">হ</sub>
            H
            <sup class="right"></sup>
            <sub class="right"></sub>
          </span>
          <span class="key">
            <sup class="left">ঝ</sup>
            <sub class="left">জ</sub>
            J
            <sup class="right"></sup>
            <sub class="right"></sub>
          </span>
          <span class="key">
            <sup class="left">খ</sup>
            <sub class="left">ক</sub>
            K
            <sup class="right"></sup>
            <sub class="right"></sub>
          </span>
          <span class="key">
            <sup class="left"></sup>
            <sub class="left">ল</sub>
            L
            <sup class="right"></sup>
            <sub class="right"></sub>
          </span>
        </div>

        <div class="keyboard-row">
          <span class="key mod left-shift">Left Shift</span>
          <span class="key">
            <sup class="left"></sup>
            <sub class="left">য</sub>
            Z
            <sup class="right"></sup>
            <sub class="right"></sub>
          </span>
          <span class="key">
            <sup class="left"></sup>
            <sub class="left">্</sub>
            X
            <sup class="right"></sup>
            <sub class="right"></sub>
          </span>
          <span class="key">
            <sup class="left">ছ</sup>
            <sub class="left">চ</sub>
            C
            <sup class="right"></sup>
            <sub class="right">ঁ</sub>
          </span>
          <span class="key">
            <sup class="left"></sup>
            <sub class="left">ভ</sub>
            V
            <sup class="right"></sup>
            <sub class="right"></sub>
          </span>
          <span class="key">
            <sup class="left">ভ</sup>
            <sub class="left">ব</sub>
            B
            <sup class="right"></sup>
            <sub class="right">ঃ</sub>
          </span>
          <span class="key">
            <sup class="left">ণ</sup>
            <sub class="left">ন</sub>
            N
            <sup class="right">ং</sup>
            <sub class="right">ঙ</sub>
          </span>
          <span class="key">
            <sup class="left"></sup>
            <sub class="left">ম</sub>
            M
            <sup class="right"></sup>
            <sub class="right"></sub>
          </span>
        </div>
      </div>
      <p id="text-output"></p>
      <textarea id="text-input" cols="80" rows="10" spellcheck="false" placeholder="এখানে লিখুন..."></textarea>
    </div>
  </div>
`;

setupInput(document.querySelector<HTMLTextAreaElement>('#text-input')!, document.querySelector<HTMLParagraphElement>('#text-output')!);

// Keyboard layout code
const modLeft = document.querySelectorAll<HTMLElement>('.key sup.left, .key sup.right')!;
modLeft.forEach(el => {
  if (el.innerHTML !== '') {
    const span = document.createElement('span');
    span.classList.add('shift');
    el.prepend(span);
  }
});

const modRight = document.querySelectorAll<HTMLElement>('.key .right')!;
modRight.forEach(el => {
  if (el.innerHTML !== '') {
    const span = document.createElement('span');
    span.classList.add('q');
    el.prepend(span);
  }
});
