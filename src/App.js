import "./App.css";

function App() {
  return (
    <div className="App">
      <div
        className="container"
        style={{ borderTop: "10px solid rgb(103, 58, 183)", padding: "0px" }}
      >
        <h1 className="index_1">Assignment Task</h1>
        <br></br>
        <span className="index_2">210020040@iitdh.ac.in</span>
        <span className="index_3">Switch Accounts</span>

        <p className="index_4">
          The name and photo associated with your Google Account will be
          recorded when you upload files and submit this form. Your email
          address is not part of your response.
        </p>
        <div className="required index_5">* Indicates required question</div>
      </div>
      <div className="container">
        <h3>
          MCQ <span className="required">*</span>
        </h3>

        <label className="options">
          <input type="radio" name="option" value="option1" className="radio" />
          Option 1
        </label>
        <br />
        <label className="options">
          <input type="radio" name="option" value="option2" className="radio" />
          Option 2
        </label>
        <br />
        <label className="options">
          <input type="radio" name="option" value="option3" className="radio" />
          Option 3
        </label>
      </div>

      <div className="container">
        <h3>
          Checkbox <span className="required">*</span>
        </h3>

        <label className="options">
          <input type="checkbox" value="checkbox1" className="checkbox" />
          Checkbox 1
        </label>
        <br />
        <label className="options">
          <input type="checkbox" value="checkbox2" className="checkbox" />
          Checkbox 2
        </label>
        <br />
        <label className="options">
          <input type="checkbox" value="checkbox3" className="checkbox" />
          Checkbox 3
        </label>
      </div>
      <div className="container">
        <h3>
          Short Answer <span className="required">*</span>
        </h3>
        <input type="text" className="shortAnswer" placeholder="Your answer" />
      </div>
      <div className="container">
        <h3>
          ParaGraph <span className="required">*</span>
        </h3>
        <textarea
          type="text"
          className=" multiline-input shortAnswer "
          placeholder="Your answer"
        />
      </div>
      <div className="container">
        <h3>
          Dropdown <span className="required">*</span>
        </h3>
        <select className="dropdown">
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </select>
      </div>

      <div className="container">
        <h3>
          File Upload <span className="required">*</span>
        </h3>
        <input type="file" className="file-upload" />
      </div>
      <div className="container">
        <h3>
          Linear Scale <span className="required">*</span>
        </h3>
        <div
          className="options"
          style={{
            marginTop: "70px",
            justifyContent: "space-between",
            marginBottom: "20px",
          }}
        >
          <label>Worst</label>
          <label className="linear">1</label>
          <input type="radio" name="linearScale" value="1" className="radio " />
          <label className="linear">2</label>
          <input
            type="radio"
            name="2linearScale"
            value="1"
            className="radio "
          />
          <label className="linear">3</label>
          <input type="radio" name="linearScale" value="1" className="radio " />
          <label className="linear">4</label>
          <input type="radio" name="linearScale" value="1" className="radio " />
          <label className="linear">5</label>
          <input type="radio" name="linearScale" value="1" className="radio " />

          <label>Best</label>
        </div>
      </div>

      <div className="container">
        <h3>
          Multi choice Grid <span className="required">*</span>
        </h3>
        <div className="multi-choice-grid">
          <div className="grid-header-row">
            <div className="empty-cell"></div>
            <div className="header-cell">Column 1</div>
            <div className="header-cell">Column 2</div>
            <div className="header-cell">Column 3</div>
          </div>
          <div className="grid-row">
            <div className="row-name">Row 1</div>
            <div className="radio-cell">
              <input
                type="radio"
                name="row1"
                value="option1"
                className="radio"
              />
            </div>
            <div className="radio-cell">
              <input
                type="radio"
                name="row1"
                value="option2"
                className="radio"
              />
            </div>
            <div className="radio-cell">
              <input
                type="radio"
                name="row1"
                value="option3"
                className="radio"
              />
            </div>
          </div>
          <div className="grid-row">
            <div className="row-name">Row 2</div>
            <div className="radio-cell">
              <input
                type="radio"
                name="row2"
                value="option1"
                className="radio"
              />
            </div>
            <div className="radio-cell">
              <input
                type="radio"
                name="row2"
                value="option2"
                className="radio"
              />
            </div>
            <div className="radio-cell">
              <input
                type="radio"
                name="row2"
                value="option3"
                className="radio"
              />
            </div>
          </div>
          <div className="grid-row">
            <div className="row-name">Row 3</div>
            <div className="radio-cell">
              <input
                type="radio"
                name="row3"
                value="option1"
                className="radio"
              />
            </div>
            <div className="radio-cell">
              <input
                type="radio"
                name="row3"
                value="option2"
                className="radio"
              />
            </div>
            <div className="radio-cell">
              <input
                type="radio"
                name="row3"
                value="option3"
                className="radio"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <h3>
          Tick box Grid <span className="required">*</span>
        </h3>
        <div className="multi-choice-grid">
          <div className="grid-header-row">
            <div className="empty-cell"></div>
            <div className="header-cell">Column 1</div>
            <div className="header-cell">Column 2</div>
            <div className="header-cell">Column 3</div>
          </div>
          <div className="grid-row">
            <div className="row-name">Row 1</div>
            <div className="radio-cell">
              <input type="checkbox" value="checkbox2" className="checkbox" />
            </div>
            <div className="radio-cell">
              <input type="checkbox" value="checkbox2" className="checkbox" />
            </div>
            <div className="radio-cell">
              <input type="checkbox" value="checkbox2" className="checkbox" />
            </div>
          </div>
          <div className="grid-row">
            <div className="row-name">Row 2</div>
            <div className="radio-cell">
              <input type="checkbox" value="checkbox2" className="checkbox" />
            </div>
            <div className="radio-cell">
              <input type="checkbox" value="checkbox2" className="checkbox" />
            </div>
            <div className="radio-cell">
              <input type="checkbox" value="checkbox2" className="checkbox" />
            </div>
          </div>
          <div className="grid-row">
            <div className="row-name">Row 3</div>
            <div className="radio-cell">
              <input type="checkbox" value="checkbox2" className="checkbox" />
            </div>
            <div className="radio-cell">
              <input type="checkbox" value="checkbox2" className="checkbox" />
            </div>
            <div className="radio-cell">
              <input type="checkbox" value="checkbox2" className="checkbox" />
            </div>
          </div>
        </div>
      </div>
      <div className="last">
        <span>
          <button className="submit">Submit</button>
        </span>
        <span className="progress"></span>
        <span>page 1 of 1</span>
        <span>
          <button className="clear">Clear form</button>
        </span>
      </div>
    </div>
  );
}

export default App;
