import React from "react";
import PropTypes from "prop-types";

// class NoteSearch extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       search: this.props.keyword || "",
//     };
//     this.onSearchHandler = this.onSearchHandler.bind(this);
//   }
//   onSearchHandler(event) {
//     this.setState(() => {
//       return {
//         search: event.target.value,
//       };
//     });
//     this.props.keywordChange(event.target.value);
//   }
//   render() {
//     return (
//       <form className="note-app__search w-100">
//         <input
//           type="text"
//           placeholder="Search by title"
//           className="w-100 note-search__input"
//           value={this.s.search}
//           onKeyUp={this.onSearchHandler}
//         />
//       </form>
//     );
//   }
// }

// NoteSearch.propTypes = {
//   keywordChange: PropTypes.func.isRequired,
// };

function NoteSearch({ keyword, keywordChange }) {
  return (
    <form className="note-app__search w-100">
      <input
        type="text"
        placeholder="Search by title"
        className="w-100 note-search__input"
        value={keyword}
        onChange={(event) => {
          keywordChange(event.target.value);
        }}
      />
    </form>
  );
}

NoteSearch.propType = {
  keyword: PropTypes.string.isRequired,
  keywordChange: PropTypes.func.isRequired,
};
export default NoteSearch;
