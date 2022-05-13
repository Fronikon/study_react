import React from 'react';
import styles from './ProfileStatus.module.scss'

class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        status: this.props.status
    }

    activateEditMode = () => {
        this.setState( {
            editMode: true,
        } )
    }

    diactivateEditMode = () => {
        this.setState( {
            editMode: false,
        } )
        this.props.updateUserStatus(this.state.status);
    }

    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value,
        })
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
    }

    render() {
        return (
            <div className={styles.status}>
                <h3 className='title'>Status</h3>
                {!this.state.editMode && 
                    <div>
                        <span onDoubleClick={this.activateEditMode} className={styles.status_text}>{this.props.status || '......'}</span>
                    </div>
                }
                {this.state.editMode && 
                    <div>
                        <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.diactivateEditMode} className={styles.field_input} type="text" value={this.state.status} />
                    </div>
                }
            </div>
        )
    }
}

export default ProfileStatus;