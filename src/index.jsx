import React from "react";
import { createRoot } from "react-dom/client";
import { getInitialData } from "./utils/index";

// import style
import "./styles/style.css";
import Navbar from "./components/Navbar";
import BuatCatatan from "./components/BuatCatatan";
import Arsipan from "./components/Arsipan";
import CatatanList from "./components/CatatanList";

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: getInitialData(),
      searchTerm: "",
    };
    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onArchivedHandler = this.onArchivedHandler.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  onDeleteHandler(id) {
    const updatedData = this.state.data.filter((data) => data.id !== id);
    this.setState({ data: updatedData });
  }

  onArchivedHandler(id) {
    this.setState((prevState) => {
      const updatedData = prevState.data.map((catatan) => {
        if (catatan.id === id) {
          return { ...catatan, archived: !catatan.archived };
        }
        return catatan;
      });
      return { data: updatedData };
    });
  }

  handleSearch = (searchTerm) => {
    this.setState({ searchTerm: searchTerm });
  };

  onAddCatatanHandler = ({ title, body }) => {
    this.setState((prevState) => ({
      data: [
        ...prevState.data,
        {
          id: +new Date(),
          title,
          body,
          createdAt: +new Date(),
          archived: false,
        },
      ],
    }));
  };
  render() {
    const { data, searchTerm } = this.state;
    const filteredData = data.filter((catatan) =>
        catatan.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const aktifCatatan = filteredData.filter((catatan) => !catatan.archived);
    const arsipanData = filteredData.filter((catatan) => catatan.archived);
    return (
      <>
        <Navbar onSearch={this.handleSearch} />
        <main>
          <BuatCatatan addCatatan={this.onAddCatatanHandler} />
          <h1>Catatan Aktif</h1>
          {aktifCatatan.length > 0 ? (
            <CatatanList
              onDelete={this.onDeleteHandler}
              data={aktifCatatan}
              onArchivedHandler={this.onArchivedHandler}
            />
          ) : (
            <p>Belum ada catatan aktif.</p>
          )}
          <h1>Arsipan</h1>
          {arsipanData.length > 0 ? (
            <Arsipan
              onDelete={this.onDeleteHandler}
              onArchivedHandler={this.onArchivedHandler}
              data={arsipanData}
            />
          ) : (
            <p>Belum ada Arispan</p>
          )}
        </main>
      </>
    );
  }
}

const root = createRoot(document.getElementById("root"));
root.render(<MyComponent />);
