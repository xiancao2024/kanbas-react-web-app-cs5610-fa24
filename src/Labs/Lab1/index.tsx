export default function Lab1() {
    return (
      <div id="wd-lab1">
        <h2>Lab 1</h2>
        <h3>HTML Examples</h3>
        <div id="wd-h-tag">
          <h4>Heading Tags</h4>
          <p> Text documents are often broken up into several sections and subsections. </p>
          <p> Each section is usually prefaced with a short title or heading that attempts to summarize the topic of the section it precedes. For instance this paragraph is preceded by the heading Heading Tags. The font of the section headings are usually larger and bolder than their subsection headings. This document uses headings to introduce topics such as HTML Documents, HTML Tags, Heading Tags, etc. HTML heading tags can be used to format plain text so that it renders in a browser as large headings. There are 6 heading tags for different sizes: h1, h2, h3, h4, h5, and h6. Tag h1 is the largest heading and h6 is the smallest heading.</p>
        </div>

        <div id="wd-lists"> 
        <h4>Lists</h4>
        <h5> Ordered Lists</h5>
        <ol>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li> 
        </ol>

        <h2>Unordered lists</h2>
            Follow these steps
            <ul>
            <li>Learn HTML</li>
            <li>Learn JavaScript</li>
            <li>Build cool stuff</li>
            </ul>
        </div>

        <div id="wd-tables">
        <h4>Table Tag</h4>
        <table border={1} width="100%">	{/* table, border, width */}
          <thead>					{/* table headings */}
            <tr>						{/* table row */}
              <th>Quiz</th>				{/* table heading*/}
              <th>Topic</th>
              <th>Date</th>
              <th>Grade</th>
            </tr>
          </thead>
          <tbody>					{/* table body */}
            <tr>						{/* table row */}
              <td>Q1</td>				{/* table data / cell */}
              <td>HTML</td>
              <td>2/3/21</td>
              <td>85</td>
            </tr>
          </tbody>
          <tfoot>					{/* table row */}
            <tr>
              <td colSpan={3}>Average</td>	{/* column span */}
              <td>90</td>
            </tr>
          </tfoot>
        </table>
      </div>

    </div>

    );
     }
  