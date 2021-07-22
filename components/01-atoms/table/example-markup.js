export const tableMarkupWithVarietyOfHeadingConfigurations = `<table>
  <thead>
    <tr>
      <th>Column header one</th>
      <th>Column header two</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Row one, column one</td>
      <td>Row one, column two</td>
    </tr>
    <tr>
      <td>Row two, column one</td>
      <td>Row two, column one</td>
    </tr>
  </tbody>
</table>

<table>
  <tbody>
    <tr>
      <th>Row header one</th>
      <td>Row one, column two</td>
      <td>Row one, column three</td>
    </tr>
    <tr>
      <th>Row header two</th>
      <td>Row one, column two</td>
      <td>Row one, column three</td>
    </tr>
    <tr>
      <th>Row header three</th>
      <td>Row one, column two</td>
      <td>Row one, column three</td>
    </tr>
  </tbody>
</table>

<table>
  <thead>
    <tr>
      <th>&nbsp;</th>
      <th>Column one</th>
      <th>Column two</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Row one</th>
      <td>Column xxx</td>
      <td>Column xxx</td>
    </tr>
    <tr>
      <th>Row two</th>
      <td>Column xxx</td>
      <td>Column xxx</td>
    </tr>
  </tbody>
</table>

<table>
  <caption>
    The <a href="https://www.w3.org/WAI/WCAG21/Techniques/html/H39">caption</a> should be a short description of the table's purpose, e.g. 'Schedule for the week of 6 March'. In a screenreader it can act like a heading. We don't style it as a heading as we don't know at what point in the heading levels a table with a caption might be used.
  </caption>
  <thead>
    <tr>
      <th>&nbsp;</th>
      <th>Column header two</th>
      <th>Column header three</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Row header two</th>
      <td>Row two, column two</td>
      <td>Row two, column three</td>
    </tr>
    <tr>
      <th>Row header three</th>
      <td>Row three, column two</td>
      <td>Row three, column three</td>
    </tr>
  </tbody>
</table>`;

export const tableMarkupWithMultipleLinesInSomeCells = `<table>
  <thead>
    <tr>
      <th>&nbsp;</th>
      <th>Column header two</th>
      <th>Column header three</th>
      <th>Column header four</th>
      <th>Column header five</th>
      <th>Column header six</th>
      <th>Column header seven</th>
      <th>Column header eight</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Row header two</th>
      <td>Cras tristique pharetra libero vel elementum. Proin vitae egestas justo.</td>
      <td>Row two, column three</td>
      <td>Row two, column four</td>
      <td>Row two, column five</td>
      <td>Row two, column six</td>
      <td>Row two, column seven</td>
      <td>Row two, column eight</td>
    </tr>
    <tr>
      <th>Row header three</th>
      <td>Row three, column two</td>
      <td>Nulla dolor metus, tristique suscipit erat a, finibus pretium nunc. Curabitur commodo felis a arcu lobortis pharetra. Etiam lobortis, magna.</td>
      <td>Row three, column four</td>
      <td>Row three, column five</td>
      <td>Row three, column six</td>
      <td>Row three, column seven</td>
      <td>Row three, column eight</td>
    </tr>
  </tbody>
</table>`;
