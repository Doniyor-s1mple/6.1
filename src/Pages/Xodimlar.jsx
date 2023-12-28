import React from 'react'
import { useState } from 'react'
import { connect } from 'react-redux'
import XodimlarModal from '../Modals/XodimlarModal'

const Xodimlar = ({ Xodimlar, Delete, edit }) => {

  const [modalVisible, setModalVisible] = useState(false)
  const [editModalVisible, setEditModalVisible] = useState(false)


  const OpenModal = () => {
    setModalVisible(prev => !prev)
  }

  const toggleEdit = () => {
    setModalVisible(prev => !prev)
  }


  const editItem = (item) => {
    edit(item)
    setEditModalVisible(prev => !prev)
  }
  const editToggle = () => {
    setEditModalVisible(prev => !prev)
  }

  return (
    <div className='row mx-5'>
      <h2 className='text-center'>Xodimlar</h2>
      <div className="col-3">
        <input type="search" className='form-control' placeholder='search...' />
      </div>
      <div className="col-9">
        <button className='btn btn-outline-warning float-end' onClick={OpenModal}>Add</button>
      </div>
      <div className="row my-5">
        <div className="col-12">
          <table className='table table-info'>
            <thead>
              <tr>
                <th>NO</th>
                <th>Firstname</th>
                <th>Lastname</th>
                <th>Phone</th>
                <th>Lavozim</th>
                <th>Ilmiy_daraja</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {
                Xodimlar.map((item, index) =>
                  <tr>
                    <td>{index + 1}</td>
                    <td>{item.firstname}</td>
                    <td>{item.lastname}</td>
                    <td>{item.phone}</td>
                    <td>{item.lavozim}</td>
                    <td>{item.ilmiy_daraja}</td>
                    <td>
                      <button className='btn btn-warning btn-sm mx-1' onClick={() => editItem(item)}>edit</button>
                      <button className='btn btn-danger btn-sm mx-1' onClick={() => Delete(index)}>del</button>
                    </td>
                  </tr>)
              }
            </tbody>
          </table>
        </div>
      </div>
      <XodimlarModal modalVisible={modalVisible} OpenModal={OpenModal} editModalVisible={editModalVisible} editToggle={editToggle} />
    </div>

  )
}
function mapStateToPRops(state) {
  return {
    Xodimlar: state.Xodimlar
  }
}

function mapDispatchToProps(dispatch) {
  return {
    Delete: (index) => {
      dispatch({
        type: "delete",
        id: index
      })
    },
    edit: (item) => {
      dispatch({
        type: 'edit',
        item: item,
      })
    }
  }
}
export default connect(mapStateToPRops, mapDispatchToProps)(Xodimlar)