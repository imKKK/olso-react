import React from "react";

class DropdownMenu extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
        return (
            <li className="has-children">
                          <a href="#">{this.props.title}</a>
                          <ul className="dropdown">
                            {
                              this.props.menuItems.map((item,index)=>{
                                return (
                                <li key={index}>
                                  <a onClick={item.handler}>{item.title}</a>
                                </li>
                                )
                              })
                            }
                          </ul>
            </li>
        )
    }
}

export default DropdownMenu;
