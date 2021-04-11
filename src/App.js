import React, { Component } from "react";
import "./styles.css";

const dataSource = [
  {
    label: "1 Nonfiction",
    children: [
      {
        label: "1.1 History"
      },
      {
        label: "1.2 Health",
        children: [
          {
            label: "1.2.1 Diet"
          },
          {
            label: "1.2.1 Fitness"
          }
        ]
      },
      {
        label: "1.3 Biographies & Memoirs"
      }
    ]
  },
  {
    label: "2 Science Fiction & Fantasy",
    children: [
      {
        label: "2.1 Apocalyptic"
      },
      {
        label: "2.2 Comics"
      }
    ]
  },
  {
    label: "3 Arts & Photography"
  }
];

// + 1 Nonfiction
//   + 1.1 History
//   + 1.2 Health
//     + 1.2.1 Diet
//     + 1.2.2 Fitness
//   + 1.3 Biographies & Memoirs
// + 2 Science Fiction & Fantasy
//   + 2.1 Apocalyptic
//   + 2.2 Comics
// + 3 Arts & Photography

// class Hierarchy extends Component {
//   render() {
//     // const { data } = this.props;
//     return null;
//   }
// }

const Hierarchy = () => {
  return null;
};

export default function App() {
  return <Hierarchy data={dataSource} />;
}
