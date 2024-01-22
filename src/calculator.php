<form method="post" class="calculator" aria-label="Calculator">
  <input class="calculator__input" aria-label="Calculator input" type="text" value="0" autocomplete="off"
    name="calculation[value]" readonly />
  <output class="calculator__output" aria-label="Calculator output" value="ss">
  </output>
  <input name="calculation[result]" type="hidden" />
  <nav class="calculator__buttons" aria-label="Calculator navigation">
    <button aria-label="Clear" data-action="reset" aria-keyshortcuts="Delete" type="reset"
      class="calculator__button calculator__button--reset">C</button>
    <button aria-keyshortcuts="1" type="button"
      class="calculator__button calculator__button--number calculator__button--number-1">1</button>
    <button aria-keyshortcuts="2" type="button"
      class="calculator__button calculator__button--number calculator__button--number-2">2</button>
    <button aria-keyshortcuts="3" type="button"
      class="calculator__button calculator__button--number calculator__button--number-3">3</button>
    <button aria-keyshortcuts="4" type="button"
      class="calculator__button calculator__button--number calculator__button--number-4">4</button>
    <button aria-keyshortcuts="5" type="button"
      class="calculator__button calculator__button--number calculator__button--number-5">5</button>
    <button aria-keyshortcuts="6" type="button"
      class="calculator__button calculator__button--number calculator__button--number-6">6</button>
    <button aria-keyshortcuts="7" type="button"
      class="calculator__button calculator__button--number calculator__button--number-7">7</button>
    <button aria-keyshortcuts="8" type="button"
      class="calculator__button calculator__button--number calculator__button--number-8">8</button>
    <button aria-keyshortcuts="9" type="button"
      class="calculator__button calculator__button--number calculator__button--number-9">9</button>
    <button aria-keyshortcuts="0" type="button"
      class="calculator__button calculator__button--number calculator__button--number-0">0</button>
    <button type="button" data-operation="add"
      class="calculator__button calculator__button--operation calculator__button--operation--add">+</button>
    <button type="button" data-operation="subtract"
      class="calculator__button calculator__button--operation calculator__button--operation--subtract">-</button>
    <button type="button" data-operation="multiply"
      class="calculator__button calculator__button--operation calculator__button--operation--multiply">x</button>
    <button aria-label="Clear" type="button" data-operation="divide"
      class="calculator__button calculator__button--operation calculator__button--operation-divide">÷</button>
    <button aria-label="Result" aria-keyshortcuts="Enter" data-action="result" type="button"
      class="calculator__button calculator__button--result">=</button>
  </nav>
  <nav class="calculator__save" aria-label="Save calculations">
    <button class="calculator__button" type="submit">Save</button>
  </nav>
</form>