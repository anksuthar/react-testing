import React, { useEffect } from 'react'
import { connect }  from 'react-redux'
import { fetchUsers } from '../_redux'

function UserContainer({userData, fetchUsers}) {
    useEffect(()=>{
        fetchUsers()
    },[])
    return userData.lodding ? (
            <h2>Loading...</h2>
            ) : userData.error ? (
            <h2>{ userData.error }</h2>
            ) : (
                <div>
                <h2>User List</h2>
                { userData && userData.data && userData.data.map(user => <p>{user.name}</p>) }
                </div>
            )
        
}

const mapStateToPops = state => {
    return {
        userData: state.user
    }
}
const mapDispatchToPrps = dispatch => {
    return {
        fetchUsers: () => dispatch(fetchUsers())
    }

}
export default connect(mapStateToPops,mapDispatchToPrps) (UserContainer)

